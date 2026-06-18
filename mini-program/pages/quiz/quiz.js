// pages/quiz/quiz.js
const app = getApp();
const { parseLatex } = require('../../utils/latexParser.js');

Page({
  data: {
    quizMode: 'choice',
    activeCategory: 'all',
    activeDifficulty: 'all',
    questions: [],
    filteredQuestions: [],
    isAnswering: false,
    currentIndex: 0,
    currentQuestion: null,
    selectedIndex: -1,
    answered: false,
    isCorrect: false,
    correctIndex: -1,
    isCollected: false,
    isSmartMode: false,
    weakReport: null,
    recommendedQuestions: [],
    smartSessionCount: 0,
    allChapters: [],
    allTopics: [],
    ignoredChapters: [],
    ignoredTopics: [],
    showChapterSettings: false,
    settingsTab: 'chapter' // 'chapter' | 'topic'
  },

  onLoad() {
    this.loadQuestions();
    this.initChapterSettings();
    const report = this.loadWeakReport();
    this.setData({ weakReport: report });
  },

  onShow() {
    if (this.data.isAnswering) {
      this.checkCollectionStatus();
    }
    // 同步忽略的章节状态
    this.initChapterSettings();
    const report = this.loadWeakReport();
    this.setData({ weakReport: report });
  },

  loadQuestions() {
    const data = app.globalData.choiceQuestions;
    const ignoredChapters = app.globalData.userStats.ignoredChapters || [];
    const ignoredTopics = app.globalData.userStats.ignoredTopics || [];
    const questions = (data?.questions || [])
      .filter(q => !ignoredChapters.includes(q.chapter) && !ignoredTopics.includes(q.topic))
      .map(q => ({
        ...q,
        parsedQuestion: parseLatex(q.question)
      }));
    this.setData({ questions, filteredQuestions: questions, ignoredChapters, ignoredTopics });
  },

  initChapterSettings() {
    const data = app.globalData.choiceQuestions;
    const allChapters = [...new Set((data?.questions || []).map(q => q.chapter))].sort();
    const allTopics = [...new Set((data?.questions || []).map(q => q.topic))].sort();
    const ignoredChapters = app.globalData.userStats.ignoredChapters || [];
    const ignoredTopics = app.globalData.userStats.ignoredTopics || [];
    this.setData({ allChapters, allTopics, ignoredChapters, ignoredTopics });
  },

  filterQuestions() {
    const { questions, activeCategory, activeDifficulty, ignoredChapters, ignoredTopics } = this.data;
    let filtered = questions.filter(q => !ignoredChapters.includes(q.chapter) && !ignoredTopics.includes(q.topic));

    if (activeCategory !== 'all') {
      const chapter = activeCategory === 'geo' ? '几何光学' : '物理光学';
      filtered = filtered.filter(q => q.chapter === chapter);
    }

    if (activeDifficulty !== 'all') {
      filtered = filtered.filter(q => q.difficulty === activeDifficulty);
    }

    this.setData({ filteredQuestions: filtered });
  },

  switchCategory(e) {
    this.setData({ activeCategory: e.currentTarget.dataset.cat }, () => {
      this.filterQuestions();
    });
  },

  switchDifficulty(e) {
    this.setData({ activeDifficulty: e.currentTarget.dataset.diff }, () => {
      this.filterQuestions();
    });
  },

  toggleChapterSettings() {
    this.setData({ showChapterSettings: !this.data.showChapterSettings });
  },

  switchSettingsTab(e) {
    this.setData({ settingsTab: e.currentTarget.dataset.tab });
  },

  toggleIgnoreChapter(e) {
    const chapter = e.currentTarget.dataset.chapter;
    const isIgnored = app.toggleIgnoreChapter(chapter);
    const ignoredChapters = app.globalData.userStats.ignoredChapters || [];
    this.setData({ ignoredChapters }, () => {
      this.loadQuestions();
      this.filterQuestions();
      const report = this.loadWeakReport();
      this.setData({ weakReport: report });
      wx.showToast({ title: isIgnored ? `已忽略 ${chapter}` : `已恢复 ${chapter}`, icon: 'none' });
    });
  },

  toggleIgnoreTopic(e) {
    const topic = e.currentTarget.dataset.topic;
    const isIgnored = app.toggleIgnoreTopic(topic);
    const ignoredTopics = app.globalData.userStats.ignoredTopics || [];
    this.setData({ ignoredTopics }, () => {
      this.loadQuestions();
      this.filterQuestions();
      const report = this.loadWeakReport();
      this.setData({ weakReport: report });
      wx.showToast({ title: isIgnored ? `已忽略 ${topic}` : `已恢复 ${topic}`, icon: 'none' });
    });
  },

  loadWeakReport() {
    const stats = app.globalData.userStats;
    const ignoredChapters = stats.ignoredChapters || [];
    const ignoredTopics = stats.ignoredTopics || [];
    const chapters = stats.chapterProgress || {};
    const topics = stats.topicProgress || {};
    const mistakes = stats.mistakes || [];
    const recent = stats.recentAnswers || [];

    const weakChapters = [];
    Object.keys(chapters).forEach(ch => {
      if (ignoredChapters.includes(ch)) return;
      const p = chapters[ch];
      if (p.answered >= 3 && p.correct / p.answered < 0.7) {
        weakChapters.push({ name: ch, correctRate: Math.round(p.correct / p.answered * 100), answered: p.answered, correct: p.correct });
      }
    });

    const unstarted = [];
    const allChapters = [...new Set(this.data.questions.map(q => q.chapter))];
    allChapters.forEach(ch => {
      if (ignoredChapters.includes(ch)) return;
      if (!chapters[ch] || chapters[ch].answered < 1) {
        unstarted.push(ch);
      }
    });

    const weakTopics = [];
    Object.keys(topics).forEach(t => {
      if (ignoredTopics.includes(t)) return;
      const p = topics[t];
      if (p.answered >= 2 && p.correct / p.answered < 0.7) {
        weakTopics.push({ name: t, correctRate: Math.round(p.correct / p.answered * 100), answered: p.answered });
      }
    });

    const errorTypes = stats.weakPoints || {};
    const errorList = Object.keys(errorTypes).map(type => ({ type, count: errorTypes[type] })).sort((a, b) => b.count - a.count).slice(0, 5);

    const recentFiltered = recent.filter(r => !ignoredChapters.includes(r.chapter) && !ignoredTopics.includes(r.topic));
    const recentRate = recentFiltered.length > 0 ? Math.round(recentFiltered.filter(r => r.isCorrect).length / recentFiltered.length * 100) : 0;

    return { weakChapters, unstartedChapters: unstarted, weakTopics, errorTypeList: errorList, recentRate, totalAnswered: stats.totalAnswered || 0 };
  },

  generateRecommendations() {
    const report = this.loadWeakReport();
    const { questions } = this.data;
    let pool = [];

    // 1. 优先从薄弱章节取题
    if (report.weakChapters.length > 0) {
      report.weakChapters.forEach(ch => {
        const chQs = questions.filter(q => q.chapter === ch.name);
        pool.push(...chQs.slice(0, 3));
      });
    }

    // 2. 从薄弱知识点取题
    if (report.weakTopics.length > 0) {
      report.weakTopics.forEach(t => {
        const tQs = questions.filter(q => q.topic === t.name);
        pool.push(...tQs.slice(0, 2));
      });
    }

    // 3. 补充未开始章节
    if (report.unstartedChapters.length > 0) {
      report.unstartedChapters.slice(0, 2).forEach(ch => {
        const chQs = questions.filter(q => q.chapter === ch);
        pool.push(...chQs.slice(0, 2));
      });
    }

    // 去重
    const seen = new Set();
    pool = pool.filter(q => {
      if (seen.has(q.id)) return false;
      seen.add(q.id);
      return true;
    });

    // 4. 随机补足到15道
    if (pool.length < 15) {
      const remaining = questions.filter(q => !seen.has(q.id));
      const shuffled = remaining.sort(() => Math.random() - 0.5);
      pool.push(...shuffled.slice(0, 15 - pool.length));
    }

    return pool.slice(0, 15);
  },

  startSmartMode() {
    const recommended = this.generateRecommendations();
    const report = this.loadWeakReport();
    if (recommended.length === 0) {
      wx.showToast({ title: '暂无数据，先刷一些题吧', icon: 'none' });
      return;
    }
    this.setData({
      isSmartMode: true,
      filteredQuestions: recommended,
      recommendedQuestions: recommended,
      smartSessionCount: recommended.length,
      weakReport: report,
      isAnswering: true,
      currentIndex: 0,
      answered: false,
      selectedIndex: -1,
      correctIndex: -1
    }, () => {
      const rawQuestion = this.data.filteredQuestions[0];
      const currentQuestion = {
        ...rawQuestion,
        parsedQuestion: parseLatex(rawQuestion.question),
        parsedExplanation: parseLatex(rawQuestion.explanation),
        parsedOptions: rawQuestion.options.map(opt => parseLatex(opt.substring(3))),
        parsedHintMessage: parseLatex(rawQuestion.wrong_hint?.message || '')
      };
      this.setData({ currentQuestion }, () => {
        this.checkCollectionStatus();
        const answer = this.data.currentQuestion.answer;
        const correctIndex = ['A', 'B', 'C', 'D'].indexOf(answer);
        this.setData({ correctIndex });
      });
    });
  },

  exitSmartMode() {
    this.setData({ isSmartMode: false, recommendedQuestions: [], smartSessionCount: 0, isAnswering: false });
    this.filterQuestions();
  },

  startAnswer(e) {
    const index = e.currentTarget.dataset.index;
    const rawQuestion = this.data.filteredQuestions[index];
    if (!rawQuestion) return;

    const currentQuestion = {
      ...rawQuestion,
      parsedQuestion: parseLatex(rawQuestion.question),
      parsedExplanation: parseLatex(rawQuestion.explanation),
      parsedOptions: rawQuestion.options.map(opt => parseLatex(opt.substring(3))),
      parsedHintMessage: parseLatex(rawQuestion.wrong_hint?.message || '')
    };

    this.setData({
      isAnswering: true,
      currentIndex: index,
      currentQuestion,
      selectedIndex: -1,
      answered: false,
      isCorrect: false,
      correctIndex: -1
    }, () => {
      this.checkCollectionStatus();
      const answer = this.data.currentQuestion.answer;
      const correctIndex = ['A', 'B', 'C', 'D'].indexOf(answer);
      this.setData({ correctIndex });
    });
  },

  selectOption(e) {
    if (this.data.answered) return;
    const index = e.currentTarget.dataset.index;
    this.setData({ selectedIndex: index }, () => {
      this.submitAnswer();
    });
  },

  submitAnswer() {
    const { currentQuestion, selectedIndex, correctIndex } = this.data;
    const isCorrect = selectedIndex === correctIndex;
    
    this.setData({
      answered: true,
      isCorrect
    });

    const errorType = isCorrect ? null : currentQuestion.wrong_hint?.type || '概念错误';
    app.recordAnswer(currentQuestion.id, isCorrect, errorType, currentQuestion.chapter, currentQuestion.topic);
  },

  nextQuestion() {
    const nextIndex = this.data.currentIndex + 1;
    if (nextIndex < this.data.filteredQuestions.length) {
      const rawQuestion = this.data.filteredQuestions[nextIndex];
      const currentQuestion = {
        ...rawQuestion,
        parsedQuestion: parseLatex(rawQuestion.question),
        parsedExplanation: parseLatex(rawQuestion.explanation),
        parsedOptions: rawQuestion.options.map(opt => parseLatex(opt.substring(3))),
        parsedHintMessage: parseLatex(rawQuestion.wrong_hint?.message || '')
      };

      this.setData({
        currentIndex: nextIndex,
        currentQuestion,
        selectedIndex: -1,
        answered: false,
        isCorrect: false
      }, () => {
        this.checkCollectionStatus();
        const answer = this.data.currentQuestion.answer;
        const correctIndex = ['A', 'B', 'C', 'D'].indexOf(answer);
        this.setData({ correctIndex });
      });
    } else {
      if (this.data.isSmartMode) {
        wx.showToast({ title: '本轮智能推荐完成！', icon: 'success' });
        this.setData({ isAnswering: false, isSmartMode: false, recommendedQuestions: [] });
        this.filterQuestions();
      } else {
        wx.showToast({ title: '已完成本轮刷题', icon: 'success' });
        this.setData({ isAnswering: false });
      }
    }
  },

  exitAnswer() {
    if (this.data.isSmartMode) {
      this.exitSmartMode();
      return;
    }
    this.setData({
      isAnswering: false,
      answered: false,
      selectedIndex: -1,
      correctIndex: -1,
      currentQuestion: null
    });
  },

  checkCollectionStatus() {
    const qid = this.data.currentQuestion?.id;
    if (!qid) return;
    const isCollected = app.globalData.userStats.favorites.questions.includes(qid);
    this.setData({ isCollected });
  },

  collectQuestion() {
    const qid = this.data.currentQuestion.id;
    app.toggleFavoriteQuestion(qid);
    this.setData({ isCollected: !this.data.isCollected });
  },

  goToRelated() {
    const tags = this.data.currentQuestion?.knowledge_tags || [];
    if (tags.length > 0) {
      wx.navigateTo({
        url: `/pages/formula-detail/formula-detail?id=${tags[0]}&type=knowledge`
      });
    }
  },

  switchQuizMode(e) {
    const mode = e.currentTarget.dataset.mode;
    if (this.data.isSmartMode) {
      this.exitSmartMode();
    }
    this.setData({ 
      quizMode: mode,
      isAnswering: false,
      answered: false,
      showChapterSettings: false
    });
  },

  goToCalculation() {
    wx.navigateTo({
      url: '/pages/calculation/calculation'
    });
  },

  goToFillblank() {
    wx.navigateTo({
      url: '/pages/fillblank/fillblank'
    });
  },

  goToOpticalSim() {
    wx.navigateTo({
      url: '/pages/optical-sim/optical-sim'
    });
  },

  goToDrawingQuiz() {
    wx.navigateTo({
      url: '/pages/drawing-quiz/drawing-quiz'
    });
  },

  goToStudyMode() {
    wx.navigateTo({
      url: '/pages/study-mode/study-mode'
    });
  }
});

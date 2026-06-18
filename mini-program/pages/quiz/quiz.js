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
    smartSessionCount: 0
  },

  onLoad() {
    this.loadQuestions();
    const report = this.loadWeakReport();
    this.setData({ weakReport: report });
  },

  onShow() {
    if (this.data.isAnswering) {
      this.checkCollectionStatus();
    }
    const report = this.loadWeakReport();
    this.setData({ weakReport: report });
  },

  loadQuestions() {
    const data = app.globalData.choiceQuestions;
    const questions = (data?.questions || []).map(q => ({
      ...q,
      parsedQuestion: parseLatex(q.question)
    }));
    this.setData({ questions, filteredQuestions: questions });
  },

  filterQuestions() {
    const { questions, activeCategory, activeDifficulty } = this.data;
    let filtered = questions;

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

  loadWeakReport() {
    const stats = app.globalData.userStats;
    const chapters = stats.chapterProgress || {};
    const topics = stats.topicProgress || {};
    const mistakes = stats.mistakes || [];
    const recent = stats.recentAnswers || [];

    const weakChapters = [];
    Object.keys(chapters).forEach(ch => {
      const p = chapters[ch];
      if (p.answered >= 3 && p.correct / p.answered < 0.7) {
        weakChapters.push({ name: ch, correctRate: Math.round(p.correct / p.answered * 100), answered: p.answered, correct: p.correct });
      }
    });

    const unstarted = [];
    const allChapters = [...new Set(this.data.questions.map(q => q.chapter))];
    allChapters.forEach(ch => {
      if (!chapters[ch] || chapters[ch].answered < 1) {
        unstarted.push(ch);
      }
    });

    const weakTopics = [];
    Object.keys(topics).forEach(t => {
      const p = topics[t];
      if (p.answered >= 2 && p.correct / p.answered < 0.7) {
        weakTopics.push({ name: t, correctRate: Math.round(p.correct / p.answered * 100), answered: p.answered });
      }
    });

    const errorTypes = stats.weakPoints || {};
    const errorList = Object.keys(errorTypes).map(type => ({ type, count: errorTypes[type] })).sort((a, b) => b.count - a.count).slice(0, 5);

    const recentCount = recent.length;
    const recentCorrect = recent.filter(r => r.isCorrect).length;
    const recentRate = recentCount > 0 ? Math.round(recentCorrect / recentCount * 100) : 0;

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
      answered: false
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
  }
});

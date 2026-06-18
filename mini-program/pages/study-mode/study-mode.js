// pages/study-mode/study-mode.js
const app = getApp();
const { parseLatex } = require('../../utils/latexParser.js');

Page({
  data: {
    step: 'select', // 'select' | 'learn' | 'quiz'
    selectedChapter: null,
    selectedDifficulty: 'all',
    chapters: [],
    learningMaterials: [],
    quizQuestions: [],
    currentQuizIndex: 0,
    currentQuestion: null,
    selectedIndex: -1,
    answered: false,
    isCorrect: false,
    correctIndex: -1,
    isCollected: false
  },

  onLoad() {
    this.loadChapters();
  },

  loadChapters() {
    const data = app.globalData.choiceQuestions;
    const chapters = [...new Set((data?.questions || []).map(q => q.chapter))].sort();
    this.setData({ chapters });
  },

  selectChapter(e) {
    const chapter = e.currentTarget.dataset.chapter;
    this.setData({ selectedChapter: chapter, step: 'learn' });
    this.loadLearningMaterials(chapter);
  },

  selectDifficulty(e) {
    const difficulty = e.currentTarget.dataset.difficulty;
    this.setData({ selectedDifficulty: difficulty });
    if (this.data.selectedChapter) {
      this.loadLearningMaterials(this.data.selectedChapter);
    }
  },

  loadLearningMaterials(chapter) {
    const kb = app.globalData.knowledgeBase;
    const { selectedDifficulty } = this.data;
    
    // 获取该章节下的公式
    let formulas = (kb?.formulas || []).filter(f => f.chapter === chapter);
    
    // 获取该章节下的知识点
    let knowledge = (kb?.knowledge || []).filter(k => k.chapter === chapter);
    
    // 难度筛选（基于topic）
    if (selectedDifficulty !== 'all') {
      const hardTopics = ['像差理论', '傅里叶光学', '全息术'];
      const mediumTopics = ['近轴光学', '理想光学系统', '平面与平面系统', '光阑与光束限制', '光阑与景深'];
      
      formulas = formulas.filter(f => {
        if (selectedDifficulty === 'hard') return hardTopics.includes(f.topic);
        if (selectedDifficulty === 'medium') return mediumTopics.includes(f.topic);
        return !hardTopics.includes(f.topic) && !mediumTopics.includes(f.topic);
      });
      
      knowledge = knowledge.filter(k => {
        if (selectedDifficulty === 'hard') return hardTopics.includes(k.topic);
        if (selectedDifficulty === 'medium') return mediumTopics.includes(k.topic);
        return !hardTopics.includes(k.topic) && !mediumTopics.includes(k.topic);
      });
    }
    
    // 解析公式
    const parsedFormulas = formulas.map(f => ({
      ...f,
      parsedLatex: parseLatex(f.latex),
      type: 'formula'
    }));
    
    const parsedKnowledge = knowledge.map(k => ({
      ...k,
      type: 'knowledge',
      name: k.title
    }));
    
    this.setData({
      learningMaterials: [...parsedFormulas, ...parsedKnowledge]
    });
  },

  startQuiz() {
    const { selectedChapter, selectedDifficulty } = this.data;
    const data = app.globalData.choiceQuestions;
    let questions = (data?.questions || []).filter(q => q.chapter === selectedChapter);
    if (selectedDifficulty !== 'all') {
      questions = questions.filter(q => q.difficulty === selectedDifficulty);
    }
    questions = questions.map(q => ({
      ...q,
      parsedQuestion: parseLatex(q.question),
      parsedOptions: q.options.map(opt => parseLatex(opt.substring(3))),
      parsedExplanation: parseLatex(q.explanation),
      parsedHintMessage: parseLatex(q.wrong_hint?.message || '')
    }));
    
    if (questions.length === 0) {
      wx.showToast({ title: '该条件下暂无题目', icon: 'none' });
      return;
    }
    
    this.setData({
      step: 'quiz',
      quizQuestions: questions,
      currentQuizIndex: 0,
      currentQuestion: questions[0],
      selectedIndex: -1,
      answered: false,
      isCorrect: false,
      correctIndex: -1
    }, () => {
      const answer = this.data.currentQuestion.answer;
      const correctIndex = ['A', 'B', 'C', 'D'].indexOf(answer);
      this.setData({ correctIndex });
      this.checkCollectionStatus();
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
    this.setData({ answered: true, isCorrect });
    const errorType = isCorrect ? null : currentQuestion.wrong_hint?.type || '概念错误';
    app.recordAnswer(currentQuestion.id, isCorrect, errorType, currentQuestion.chapter, currentQuestion.topic);
  },

  nextQuestion() {
    const nextIndex = this.data.currentQuizIndex + 1;
    if (nextIndex < this.data.quizQuestions.length) {
      const rawQuestion = this.data.quizQuestions[nextIndex];
      this.setData({
        currentQuizIndex: nextIndex,
        currentQuestion: rawQuestion,
        selectedIndex: -1,
        answered: false,
        isCorrect: false
      }, () => {
        const answer = this.data.currentQuestion.answer;
        const correctIndex = ['A', 'B', 'C', 'D'].indexOf(answer);
        this.setData({ correctIndex });
        this.checkCollectionStatus();
      });
    } else {
      wx.showToast({ title: '学习完成！', icon: 'success' });
      this.setData({ step: 'select', selectedChapter: null, selectedDifficulty: 'all' });
    }
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

  goBack() {
    const { step } = this.data;
    if (step === 'quiz') {
      this.setData({ step: 'learn' });
    } else if (step === 'learn') {
      this.setData({ step: 'select', selectedChapter: null, selectedDifficulty: 'all' });
    }
  }
});

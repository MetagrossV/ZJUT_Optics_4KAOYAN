// pages/fillblank/fillblank.js
const app = getApp();
const { parseLatex } = require('../../utils/latexParser.js');

Page({
  data: {
    activeCategory: 'all',
    activeDifficulty: 'all',
    questions: [],
    filteredQuestions: [],
    isAnswering: false,
    currentIndex: 0,
    currentQuestion: null,
    userInput: '',
    answered: false,
    isCorrect: false,
    matchedKeywords: [],
    missingKeywords: [],
    isCollected: false
  },

  onLoad() {
    this.loadQuestions();
  },

  onShow() {
    if (this.data.isAnswering) {
      this.checkCollectionStatus();
    }
  },

  loadQuestions() {
    const data = app.globalData.fillblankQuestions;
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

  startAnswer(e) {
    const index = e.currentTarget.dataset.index;
    const rawQuestion = this.data.filteredQuestions[index];
    if (!rawQuestion) return;

    this.setData({
      isAnswering: true,
      currentIndex: index,
      currentQuestion: rawQuestion,
      userInput: '',
      answered: false,
      isCorrect: false,
      matchedKeywords: [],
      missingKeywords: []
    }, () => {
      this.checkCollectionStatus();
    });
  },

  onInputChange(e) {
    this.setData({ userInput: e.detail.value });
  },

  submitAnswer() {
    const { currentQuestion, userInput } = this.data;
    if (!userInput.trim()) {
      wx.showToast({ title: '请输入答案', icon: 'none' });
      return;
    }

    const input = userInput.trim().toLowerCase().replace(/\s/g, '');
    const keywords = currentQuestion.keywords || [];
    
    const matched = [];
    const missing = [];
    
    keywords.forEach(kw => {
      const cleanKw = kw.toLowerCase().replace(/\s/g, '');
      if (input.includes(cleanKw)) {
        matched.push(kw);
      } else {
        missing.push(kw);
      }
    });

    const isCorrect = missing.length === 0;
    
    this.setData({
      answered: true,
      isCorrect,
      matchedKeywords: matched,
      missingKeywords: missing
    });

    const errorType = isCorrect ? null : '概念填空错误';
    app.recordAnswer(currentQuestion.id, isCorrect, errorType, currentQuestion.chapter);
  },

  nextQuestion() {
    const nextIndex = this.data.currentIndex + 1;
    if (nextIndex < this.data.filteredQuestions.length) {
      this.setData({
        currentIndex: nextIndex,
        currentQuestion: this.data.filteredQuestions[nextIndex],
        userInput: '',
        answered: false,
        isCorrect: false,
        matchedKeywords: [],
        missingKeywords: []
      }, () => {
        this.checkCollectionStatus();
      });
    } else {
      wx.showToast({ title: '已完成本轮填空', icon: 'success' });
      this.setData({ isAnswering: false });
    }
  },

  exitAnswer() {
    this.setData({
      isAnswering: false,
      answered: false,
      userInput: '',
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
  }
});
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
    app.recordAnswer(currentQuestion.id, isCorrect, errorType, currentQuestion.chapter);
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
      wx.showToast({ title: '已完成本轮刷题', icon: 'success' });
      this.setData({ isAnswering: false });
    }
  },

  exitAnswer() {
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

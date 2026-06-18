// pages/study-mode/study-mode.js
const app = getApp();
const { parseLatex } = require('../../utils/latexParser.js');

Page({
  data: {
    step: 'select', // 'select' | 'selectTopic' | 'learn' | 'quiz'
    selectedChapter: null,
    selectedTopic: null,
    selectedDifficulty: 'all',
    chapters: [],
    topics: [],
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
    const data = app.globalData.choiceQuestions;
    const topics = [...new Set((data?.questions || []).filter(q => q.chapter === chapter).map(q => q.topic))].sort();
    this.setData({ selectedChapter: chapter, topics, step: 'selectTopic' });
  },

  selectTopic(e) {
    const topic = e.currentTarget.dataset.topic;
    this.setData({ selectedTopic: topic, step: 'learn' });
    this.loadLearningMaterials(this.data.selectedChapter, topic);
  },

  selectDifficulty(e) {
    const difficulty = e.currentTarget.dataset.difficulty;
    this.setData({ selectedDifficulty: difficulty });
    if (this.data.selectedTopic) {
      this.loadLearningMaterials(this.data.selectedChapter, this.data.selectedTopic);
    }
  },

  loadLearningMaterials(chapter, topic) {
    const kb = app.globalData.knowledgeBase;
    const { selectedDifficulty } = this.data;
    
    // 获取该单元下的公式和知识点
    let formulas = (kb?.formulas || []).filter(f => f.topic === topic);
    let knowledge = (kb?.knowledge || []).filter(k => k.topic === topic);
    
    // 如果该单元下没有数据，尝试从整个章节中获取
    if (formulas.length === 0 && knowledge.length === 0) {
      formulas = (kb?.formulas || []).filter(f => f.chapter === chapter);
      knowledge = (kb?.knowledge || []).filter(k => k.chapter === chapter);
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
    const { selectedChapter, selectedTopic, selectedDifficulty } = this.data;
    const data = app.globalData.choiceQuestions;
    let questions = (data?.questions || []).filter(q => q.topic === selectedTopic);
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
      wx.showToast({ title: '该单元暂无题目，试试其他单元', icon: 'none' });
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
      this.setData({ step: 'select', selectedChapter: null, selectedTopic: null, selectedDifficulty: 'all' });
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
      this.setData({ step: 'selectTopic', selectedTopic: null });
    } else if (step === 'selectTopic') {
      this.setData({ step: 'select', selectedChapter: null });
    }
  }
});

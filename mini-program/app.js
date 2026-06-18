// app.js
App({
  globalData: {
    knowledgeBase: null,
    choiceQuestions: null,
    fillblankQuestions: null,
    calculationSteps: null,
    formulaMindmap: null,
    userStats: {
      totalAnswered: 0,
      correctCount: 0,
      wrongCount: 0,
      mistakes: [],
      weakPoints: {},
      favorites: {
        formulas: [],
        questions: []
      },
      chapterProgress: {},
      topicProgress: {},
      recentAnswers: [],
      ignoredChapters: [],
      ignoredTopics: []
    }
  },

  onLaunch() {
    // 加载数据
    this.loadData();
    // 加载用户数据
    this.loadUserStats();
    console.log('浙工大光学考研小程序启动');
  },

  loadData() {
    try {
      this.globalData.knowledgeBase = require('./data/data_knowledge_base.js');
      this.globalData.choiceQuestions = require('./data/data_choice_questions.js');
      this.globalData.fillblankQuestions = require('./data/data_fillblank_questions.js');
      this.globalData.calculationSteps = require('./data/data_calculation_steps.js');
      this.globalData.formulaMindmap = require('./data/data_formula_mindmap.js');
      console.log('数据加载成功', {
        formulas: this.globalData.knowledgeBase?.formulas?.length || 0,
        knowledge: this.globalData.knowledgeBase?.knowledge?.length || 0,
        choiceQuestions: this.globalData.choiceQuestions?.questions?.length || 0,
        fillblankQuestions: this.globalData.fillblankQuestions?.questions?.length || 0,
        calcQuestions: this.globalData.calculationSteps?.metadata?.total_questions || 0
      });
    } catch (e) {
      console.error('数据加载失败:', e);
    }
  },

  loadUserStats() {
    const stats = wx.getStorageSync('userStats');
    if (stats) {
      this.globalData.userStats = { ...this.globalData.userStats, ...stats };
    }
  },

  saveUserStats() {
    wx.setStorageSync('userStats', this.globalData.userStats);
  },

  // 记录答题
  recordAnswer(questionId, isCorrect, errorType, chapter, topic) {
    const stats = this.globalData.userStats;
    stats.totalAnswered++;
    if (isCorrect) {
      stats.correctCount++;
    } else {
      stats.wrongCount++;
      // 加入错题本
      if (!stats.mistakes.find(m => m.questionId === questionId)) {
        stats.mistakes.push({
          questionId,
          errorType,
          chapter,
          topic,
          timestamp: Date.now()
        });
      }
      // 统计薄弱点
      if (!stats.weakPoints[errorType]) {
        stats.weakPoints[errorType] = 0;
      }
      stats.weakPoints[errorType]++;
    }
    // 章节进度
    if (!stats.chapterProgress[chapter]) {
      stats.chapterProgress[chapter] = { answered: 0, correct: 0 };
    }
    stats.chapterProgress[chapter].answered++;
    if (isCorrect) stats.chapterProgress[chapter].correct++;

    // 知识点进度（更细的粒度）
    if (!stats.topicProgress) stats.topicProgress = {};
    if (!stats.topicProgress[topic]) {
      stats.topicProgress[topic] = { answered: 0, correct: 0 };
    }
    stats.topicProgress[topic].answered++;
    if (isCorrect) stats.topicProgress[topic].correct++;

    // 最近答题记录（用于分析趋势）
    if (!stats.recentAnswers) stats.recentAnswers = [];
    stats.recentAnswers.push({ questionId, isCorrect, errorType, chapter, topic, timestamp: Date.now() });
    // 只保留最近50条
    if (stats.recentAnswers.length > 50) {
      stats.recentAnswers = stats.recentAnswers.slice(-50);
    }

    this.saveUserStats();
  },

  // 收藏/取消收藏公式
  toggleFavoriteFormula(formulaId) {
    const favs = this.globalData.userStats.favorites.formulas;
    const idx = favs.indexOf(formulaId);
    if (idx > -1) {
      favs.splice(idx, 1);
    } else {
      favs.push(formulaId);
    }
    this.saveUserStats();
  },

  // 收藏题目
  toggleFavoriteQuestion(questionId) {
    const favs = this.globalData.userStats.favorites.questions;
    const idx = favs.indexOf(questionId);
    if (idx > -1) {
      favs.splice(idx, 1);
    } else {
      favs.push(questionId);
    }
    this.saveUserStats();
  },

  // 忽略/取消忽略章节
  toggleIgnoreChapter(chapter) {
    const ignored = this.globalData.userStats.ignoredChapters;
    const idx = ignored.indexOf(chapter);
    if (idx > -1) {
      ignored.splice(idx, 1);
    } else {
      ignored.push(chapter);
    }
    this.saveUserStats();
    return idx === -1; // true表示已忽略，false表示已取消
  },

  // 检查章节是否被忽略
  isChapterIgnored(chapter) {
    return this.globalData.userStats.ignoredChapters.includes(chapter);
  },

  // 忽略/取消忽略知识点（topic级别）
  toggleIgnoreTopic(topic) {
    const ignored = this.globalData.userStats.ignoredTopics;
    const idx = ignored.indexOf(topic);
    if (idx > -1) {
      ignored.splice(idx, 1);
    } else {
      ignored.push(topic);
    }
    this.saveUserStats();
    return idx === -1;
  },

  // 检查知识点是否被忽略
  isTopicIgnored(topic) {
    return this.globalData.userStats.ignoredTopics.includes(topic);
  }
});

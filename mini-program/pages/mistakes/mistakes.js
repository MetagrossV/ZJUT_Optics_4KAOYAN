// pages/mistakes/mistakes.js
const app = getApp();

Page({
  data: {
    stats: {},
    accuracy: 0,
    weakPointsList: [],
    chapterProgressList: [],
    mistakesList: []
  },

  onShow() {
    this.loadStats();
  },

  loadStats() {
    const stats = app.globalData.userStats;
    const accuracy = stats.totalAnswered > 0 
      ? Math.round((stats.correctCount / stats.totalAnswered) * 100) 
      : 0;

    // 薄弱点排序
    const weakPoints = stats.weakPoints || {};
    const totalErrors = Object.values(weakPoints).reduce((a, b) => a + b, 0);
    const weakPointsList = Object.entries(weakPoints)
      .map(([type, count]) => ({
        type,
        count,
        percentage: totalErrors > 0 ? Math.round((count / totalErrors) * 100) : 0,
        color: this.getWeakColor(count)
      }))
      .sort((a, b) => b.count - a.count);

    // 章节进度
    const chapterProgress = stats.chapterProgress || {};
    const chapterProgressList = Object.entries(chapterProgress).map(([chapter, data]) => ({
      chapter,
      ...data,
      rate: data.answered > 0 ? Math.round((data.correct / data.answered) * 100) : 0
    }));

    // 错题列表
    const questions = app.globalData.choiceQuestions?.questions || [];
    const mistakesList = (stats.mistakes || []).map(m => {
      const q = questions.find(q => q.id === m.questionId);
      return {
        ...m,
        question: q?.question || '题目未找到',
        answer: q?.answer || '',
        date: this.formatDate(m.timestamp)
      };
    }).reverse();

    this.setData({
      stats,
      accuracy,
      weakPointsList,
      chapterProgressList,
      mistakesList
    });
  },

  getWeakColor(count) {
    if (count >= 8) return '#e55039';
    if (count >= 5) return '#fa8231';
    if (count >= 3) return '#f6b93b';
    return '#78e08f';
  },

  formatDate(timestamp) {
    if (!timestamp) return '';
    const date = new Date(timestamp);
    return `${date.getMonth() + 1}/${date.getDate()} ${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}`;
  },

  reviewQuestion(e) {
    const qid = e.currentTarget.dataset.id;
    const questions = app.globalData.choiceQuestions?.questions || [];
    const index = questions.findIndex(q => q.id === qid);
    if (index > -1) {
      wx.navigateTo({
        url: `/pages/quiz/quiz?reviewIndex=${index}`
      });
    }
  },

  goToKnowledge(e) {
    const qid = e.currentTarget.dataset.id;
    const questions = app.globalData.choiceQuestions?.questions || [];
    const q = questions.find(q => q.id === qid);
    if (q && q.knowledge_tags && q.knowledge_tags.length > 0) {
      wx.navigateTo({
        url: `/pages/formula-detail/formula-detail?id=${q.knowledge_tags[0]}&type=knowledge`
      });
    }
  }
});

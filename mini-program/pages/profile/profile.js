// pages/profile/profile.js
const app = getApp();

Page({
  data: {
    stats: {},
    accuracy: 0
  },

  onShow() {
    this.loadStats();
  },

  loadStats() {
    const stats = app.globalData.userStats;
    const accuracy = stats.totalAnswered > 0 
      ? Math.round((stats.correctCount / stats.totalAnswered) * 100) 
      : 0;
    this.setData({ stats, accuracy });
  },

  clearCache() {
    wx.showModal({
      title: '清除缓存',
      content: '确定要清除所有学习记录吗？此操作不可恢复。',
      success: (res) => {
        if (res.confirm) {
          wx.clearStorageSync();
          app.globalData.userStats = {
            totalAnswered: 0,
            correctCount: 0,
            wrongCount: 0,
            mistakes: [],
            weakPoints: {},
            favorites: { formulas: [], questions: [] },
            chapterProgress: {}
          };
          this.loadStats();
          wx.showToast({ title: '已清除', icon: 'success' });
        }
      }
    });
  }
});

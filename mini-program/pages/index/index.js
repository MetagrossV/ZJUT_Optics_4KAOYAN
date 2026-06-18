// pages/index/index.js
const app = getApp();

Page({
  data: {
    searchKeyword: '',
    showSearchResult: false,
    searchResults: [],
    mindmap: null
  },

  onLoad() {
    this.loadMindmap();
  },

  loadMindmap() {
    const mindmapData = app.globalData.formulaMindmap?.mindmap;
    if (mindmapData) {
      // 为每个节点添加展开状态
      const processed = this.processMindmap(mindmapData);
      this.setData({ mindmap: processed });
    }
  },

  processMindmap(node) {
    if (!node) return null;
    const processed = {
      ...node,
      expanded: node.type === 'root' ? true : false,
      childCount: this.countChildren(node)
    };
    if (node.children) {
      processed.children = node.children.map(child => this.processMindmap(child));
    }
    return processed;
  },

  countChildren(node) {
    if (!node.children || node.children.length === 0) return 0;
    let count = node.children.length;
    node.children.forEach(child => {
      count += this.countChildren(child);
    });
    return count;
  },

  // 切换分支展开
  toggleBranch(e) {
    const id = e.currentTarget.dataset.id;
    this.toggleNode('mindmap.children', id);
  },

  toggleSection(e) {
    const id = e.currentTarget.dataset.id;
    this.toggleNode('mindmap.children', id, 'children');
  },

  toggleTopic(e) {
    const id = e.currentTarget.dataset.id;
    this.toggleNode('mindmap.children', id, 'children', 'children');
  },

  toggleNode(path, id, ...depths) {
    const mindmap = this.data.mindmap;
    const found = this.findNode(mindmap, id, depths);
    if (found) {
      found.expanded = !found.expanded;
      this.setData({ mindmap: { ...mindmap } });
    }
  },

  findNode(node, id, depths, currentDepth = 0) {
    if (node.id === id) return node;
    if (!node.children || node.children.length === 0) return null;
    
    for (let child of node.children) {
      const result = this.findNode(child, id, depths, currentDepth + 1);
      if (result) return result;
    }
    return null;
  },

  // 搜索功能
  onSearchInput(e) {
    this.setData({ searchKeyword: e.detail.value });
  },

  onSearch() {
    const keyword = this.data.searchKeyword.toLowerCase().trim();
    if (!keyword) return;

    const results = [];
    const kb = app.globalData.knowledgeBase;
    
    // 搜索公式
    if (kb?.formulas) {
      kb.formulas.forEach(f => {
        if (f.name.toLowerCase().includes(keyword) || 
            f.description.toLowerCase().includes(keyword)) {
          results.push({ ...f, type: 'formula' });
        }
      });
    }
    
    // 搜索知识点
    if (kb?.knowledge) {
      kb.knowledge.forEach(k => {
        if (k.title.toLowerCase().includes(keyword) || 
            k.content.toLowerCase().includes(keyword)) {
          results.push({ ...k, type: 'knowledge', name: k.title });
        }
      });
    }

    this.setData({
      showSearchResult: true,
      searchResults: results.slice(0, 30)
    });
  },

  closeSearch() {
    this.setData({ showSearchResult: false });
  },

  preventBubble() {},

  // 点击叶子节点
  onLeafTap(e) {
    const { type, formulaId, knowledgeId } = e.currentTarget.dataset;
    if (type === 'formula' && formulaId) {
      wx.navigateTo({
        url: `/pages/formula-detail/formula-detail?id=${formulaId}&type=formula`
      });
    } else if (type === 'knowledge' && knowledgeId) {
      wx.navigateTo({
        url: `/pages/formula-detail/formula-detail?id=${knowledgeId}&type=knowledge`
      });
    }
  },

  onSearchResultTap(e) {
    const { id, type } = e.currentTarget.dataset;
    this.closeSearch();
    if (type === 'formula') {
      wx.navigateTo({
        url: `/pages/formula-detail/formula-detail?id=${id}&type=formula`
      });
    } else {
      wx.navigateTo({
        url: `/pages/formula-detail/formula-detail?id=${id}&type=knowledge`
      });
    }
  },

  // 快捷入口
  goToHighFreq() {
    const mindmap = app.globalData.formulaMindmap;
    wx.navigateTo({
      url: '/pages/formula-detail/formula-detail?mode=highfreq'
    });
  },

  goToConfusions() {
    wx.navigateTo({
      url: '/pages/formula-detail/formula-detail?mode=confusions'
    });
  },

  goToCards() {
    wx.navigateTo({
      url: '/pages/card-memory/card-memory'
    });
  }
});

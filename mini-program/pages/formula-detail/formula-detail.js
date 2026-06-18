// pages/formula-detail/formula-detail.js
const app = getApp();
const { parseLatex } = require('../../utils/latexParser.js');

Page({
  data: {
    mode: 'formula',
    // 滑动浏览
    swiperCurrent: 0,
    allFormulas: [],
    allKnowledge: [],
    // 当前显示（用于底部操作栏）
    currentFormula: null,
    currentKnowledge: null,
    isFavorite: false,
    // 列表模式
    highFreqFormulas: [],
    confusions: []
  },

  onLoad(options) {
    if (options.mode === 'highfreq') {
      this.loadHighFreq();
    } else if (options.mode === 'confusions') {
      this.loadConfusions();
    } else if (options.type === 'formula') {
      this.loadAllFormulas(options.id);
    } else if (options.type === 'knowledge') {
      this.loadAllKnowledge(options.id);
    }
  },

  /* ========== 公式滑动浏览 ========== */
  loadAllFormulas(targetId) {
    const kb = app.globalData.knowledgeBase;
    if (!kb || !kb.formulas) {
      this.setData({ mode: 'formula', allFormulas: [] });
      wx.showToast({ title: '数据加载失败，请重启小程序', icon: 'none' });
      return;
    }
    const formulas = (kb.formulas || []).map(f => {
      const variableList = Object.entries(f.variables || {}).map(([symbol, desc]) => ({ symbol, desc }));
      const relatedKnowledge = [];
      if (f.related_formulas) {
        f.related_formulas.forEach(rid => {
          const k = kb?.knowledge?.find(kn => kn.id === rid);
          if (k) relatedKnowledge.push(k);
        });
      }
      return {
        ...f,
        parsedLatex: parseLatex(f.latex),
        variableList,
        relatedKnowledge
      };
    });

    const targetIndex = formulas.findIndex(f => f.id === targetId);
    const currentIndex = targetIndex >= 0 ? targetIndex : 0;

    this.setData({
      mode: 'formula',
      allFormulas: formulas
    }, () => {
      setTimeout(() => {
        this.setData({ swiperCurrent: currentIndex }, () => {
          this.updateFormulaAtIndex(currentIndex);
        });
      }, 50);
    });
  },

  updateFormulaAtIndex(index) {
    const formula = this.data.allFormulas[index];
    if (!formula) return;
    const isFav = app.globalData.userStats.favorites.formulas.includes(formula.id);
    this.setData({
      currentFormula: formula,
      isFavorite: isFav
    });
  },

  /* ========== 知识点滑动浏览 ========== */
  loadAllKnowledge(targetId) {
    const kb = app.globalData.knowledgeBase;
    if (!kb || !kb.knowledge) {
      this.setData({ mode: 'knowledge', allKnowledge: [] });
      wx.showToast({ title: '数据加载失败，请重启小程序', icon: 'none' });
      return;
    }
    const knowledgeList = (kb.knowledge || []).map(k => {
      const relatedFormulas = [];
      if (k.related_formulas) {
        k.related_formulas.forEach(fid => {
          const f = kb?.formulas?.find(fm => fm.id === fid);
          if (f) relatedFormulas.push({ ...f, parsedLatex: parseLatex(f.latex) });
        });
      }
      return {
        ...k,
        relatedFormulas
      };
    });

    const targetIndex = knowledgeList.findIndex(k => k.id === targetId);
    const currentIndex = targetIndex >= 0 ? targetIndex : 0;

    this.setData({
      mode: 'knowledge',
      allKnowledge: knowledgeList
    }, () => {
      // 延迟设置swiperCurrent，确保swiper已初始化
      setTimeout(() => {
        this.setData({ swiperCurrent: currentIndex }, () => {
          this.updateKnowledgeAtIndex(currentIndex);
        });
      }, 50);
    });
  },

  updateKnowledgeAtIndex(index) {
    const knowledge = this.data.allKnowledge[index];
    if (!knowledge) return;
    this.setData({
      currentKnowledge: knowledge
    });
  },

  /* ========== Swiper滑动事件 ========== */
  onSwiperChange(e) {
    const index = e.detail.current;
    this.setData({ swiperCurrent: index });
    if (this.data.mode === 'formula') {
      this.updateFormulaAtIndex(index);
    } else if (this.data.mode === 'knowledge') {
      this.updateKnowledgeAtIndex(index);
    }
  },

  /* ========== 收藏 ========== */
  toggleFavorite() {
    const formula = this.data.currentFormula;
    if (!formula) return;
    app.toggleFavoriteFormula(formula.id);
    this.setData({ isFavorite: !this.data.isFavorite });
  },

  /* ========== 导航 ========== */
  goToKnowledge(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/formula-detail/formula-detail?id=${id}&type=knowledge`
    });
  },

  goToFormula(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/formula-detail/formula-detail?id=${id}&type=formula`
    });
  },

  /* ========== 高频公式（列表模式） ========== */
  loadHighFreq() {
    const mindmap = app.globalData.formulaMindmap;
    const highFreq = mindmap?.quick_access?.high_frequency?.items || [];
    const kb = app.globalData.knowledgeBase;
    
    const formulas = highFreq.map(item => {
      const f = kb?.formulas?.find(formula => formula.id === item.formula_id);
      return f ? { ...f, reason: item.reason, parsedLatex: parseLatex(f.latex) } : null;
    }).filter(Boolean);

    this.setData({
      mode: 'highfreq',
      highFreqFormulas: formulas
    });
  },

  /* ========== 易混淆对比（列表模式） ========== */
  loadConfusions() {
    const mindmap = app.globalData.formulaMindmap;
    const pairs = mindmap?.quick_access?.confusions?.pairs || [];
    const kb = app.globalData.knowledgeBase;
    
    const processed = pairs.map((c, idx) => {
      let leftLabel = '';
      let leftContent = '';
      let rightLabel = '';
      let rightContent = '';
      
      if (c.formula_a) {
        const f = kb?.formulas?.find(formula => formula.id === c.formula_a);
        if (f) {
          leftLabel = f.name;
          leftContent = parseLatex(f.latex);
        }
      } else if (c.knowledge_a) {
        const k = kb?.knowledge?.find(kn => kn.id === c.knowledge_a);
        if (k) {
          leftLabel = k.title;
          leftContent = k.content;
        }
      }
      
      if (c.formula_b) {
        const f = kb?.formulas?.find(formula => formula.id === c.formula_b);
        if (f) {
          rightLabel = f.name;
          rightContent = parseLatex(f.latex);
        }
      } else if (c.knowledge_b) {
        const k = kb?.knowledge?.find(kn => kn.id === c.knowledge_b);
        if (k) {
          rightLabel = k.title;
          rightContent = k.content;
        }
      }
      
      return {
        id: `confusion_${idx}`,
        title: c.title,
        left_label: leftLabel,
        left_content: leftContent || parseLatex(c.diff_a || ''),
        right_label: rightLabel,
        right_content: rightContent || parseLatex(c.diff_b || ''),
        diff: c.diff
      };
    });

    this.setData({
      mode: 'confusions',
      confusions: processed
    });
  }
});

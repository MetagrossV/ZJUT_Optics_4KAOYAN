// pages/formula-detail/formula-detail.js
const app = getApp();
const { parseLatex } = require('../../utils/latexParser.js');

Page({
  data: {
    mode: 'formula',
    formula: null,
    knowledge: null,
    isFavorite: false,
    variableList: [],
    relatedKnowledge: [],
    relatedFormulas: [],
    highFreqFormulas: [],
    confusions: []
  },

  onLoad(options) {
    if (options.mode === 'highfreq') {
      this.loadHighFreq();
    } else if (options.mode === 'confusions') {
      this.loadConfusions();
    } else if (options.type === 'formula') {
      this.loadFormula(options.id);
    } else if (options.type === 'knowledge') {
      this.loadKnowledge(options.id);
    }
  },

  loadFormula(id) {
    const kb = app.globalData.knowledgeBase;
    const formula = kb?.formulas?.find(f => f.id === id);
    if (!formula) return;

    const isFav = app.globalData.userStats.favorites.formulas.includes(id);
    
    // 变量列表
    const variableList = Object.entries(formula.variables || {}).map(([symbol, desc]) => ({
      symbol, desc
    }));

    // 关联知识点
    const relatedKnowledge = [];
    if (formula.related_formulas) {
      formula.related_formulas.forEach(rid => {
        const k = kb?.knowledge?.find(k => k.id === rid);
        if (k) relatedKnowledge.push(k);
      });
    }

    this.setData({
      mode: 'formula',
      formula: { ...formula, parsedLatex: parseLatex(formula.latex) },
      isFavorite: isFav,
      variableList,
      relatedKnowledge
    });
  },

  loadKnowledge(id) {
    const kb = app.globalData.knowledgeBase;
    const knowledge = kb?.knowledge?.find(k => k.id === id);
    if (!knowledge) return;

    // 关联公式
    const relatedFormulas = [];
    if (knowledge.related_formulas) {
      knowledge.related_formulas.forEach(fid => {
        const f = kb?.formulas?.find(f => f.id === fid);
        if (f) relatedFormulas.push({ ...f, parsedLatex: parseLatex(f.latex) });
      });
    }

    this.setData({
      mode: 'knowledge',
      knowledge,
      relatedFormulas
    });
  },

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
  },

  toggleFavorite() {
    const id = this.data.formula.id;
    app.toggleFavoriteFormula(id);
    this.setData({ isFavorite: !this.data.isFavorite });
  },

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
  }
});

// pages/card-memory/card-memory.js
const app = getApp();

Page({
  data: {
    mode: 'flip',
    cards: [],
    currentIndex: 0,
    currentCard: null,
    flipped: false,
    isFavorite: false,
    fillInput: '',
    fillResult: null
  },

  onLoad() {
    this.loadCards();
  },

  loadCards() {
    const kb = app.globalData.knowledgeBase;
    const { parseLatex } = require('../../utils/latexParser.js');
    const cards = [];
    
    // 从公式和知识点生成卡片
    if (kb?.formulas) {
      kb.formulas.forEach((f, i) => {
        cards.push({
          id: f.id,
          type: 'formula',
          title: f.name,
          content: f.description,
          latex: f.latex,
          parsedLatex: parseLatex(f.latex),
          chapter: f.chapter,
          fillQuestion: `${f.name}的表达式是：______`,
          fillAnswer: f.latex
        });
      });
    }
    
    if (kb?.knowledge) {
      kb.knowledge.forEach(k => {
        cards.push({
          id: k.id,
          type: 'knowledge',
          title: k.title,
          content: k.content,
          chapter: k.chapter,
          fillQuestion: `${k.title}的含义是：______`,
          fillAnswer: k.content.substring(0, 30) // 简化为前30字
        });
      });
    }

    this.setData({ cards, currentCard: cards[0] || null }, () => {
      this.checkFavorite();
    });
  },

  switchMode(e) {
    this.setData({ 
      mode: e.currentTarget.dataset.mode,
      fillInput: '',
      fillResult: null,
      flipped: false
    });
  },

  flipCard() {
    if (this.data.mode === 'flip') {
      this.setData({ flipped: !this.data.flipped });
    }
  },

  nextCard() {
    const next = (this.data.currentIndex + 1) % this.data.cards.length;
    this.setData({
      currentIndex: next,
      currentCard: this.data.cards[next],
      flipped: false,
      fillInput: '',
      fillResult: null
    }, () => {
      this.checkFavorite();
    });
  },

  prevCard() {
    const prev = this.data.currentIndex === 0 ? this.data.cards.length - 1 : this.data.currentIndex - 1;
    this.setData({
      currentIndex: prev,
      currentCard: this.data.cards[prev],
      flipped: false,
      fillInput: '',
      fillResult: null
    }, () => {
      this.checkFavorite();
    });
  },

  checkFavorite() {
    const card = this.data.currentCard;
    if (!card) return;
    const isFav = card.type === 'formula' 
      ? app.globalData.userStats.favorites.formulas.includes(card.id)
      : false;
    this.setData({ isFavorite: isFav });
  },

  toggleFavorite() {
    const card = this.data.currentCard;
    if (!card || card.type !== 'formula') return;
    app.toggleFavoriteFormula(card.id);
    this.setData({ isFavorite: !this.data.isFavorite });
  },

  onFillInput(e) {
    this.setData({ fillInput: e.detail.value });
  },

  checkFill() {
    const { currentCard, fillInput } = this.data;
    if (!fillInput) return;
    
    const correct = fillInput.toLowerCase().trim() === currentCard.fillAnswer.toLowerCase().trim() ||
      currentCard.fillAnswer.toLowerCase().includes(fillInput.toLowerCase().trim());
    
    this.setData({
      fillResult: {
        correct,
        answer: currentCard.fillAnswer
      }
    });
  }
});

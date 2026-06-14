// pages/calculation/calculation.js
const app = getApp();

Page({
  data: {
    questions: [],
    isAnswering: false,
    currentIndex: 0,
    currentQuestion: null,
    currentStepIndex: 0,
    currentStep: null,
    stepInput: '',
    verifyResult: null,
    errorCount: 0,
    stepErrorCounts: {}
  },

  onLoad() {
    this.loadQuestions();
  },

  loadQuestions() {
    const data = app.globalData.calculationSteps;
    const questions = data?.questions || [];
    this.setData({ questions: questions.length > 0 ? questions : [] });
  },

  startQuestion(e) {
    const index = e.currentTarget.dataset.index;
    const question = this.data.questions[index];
    this.setData({
      isAnswering: true,
      currentIndex: index,
      currentQuestion: question,
      currentStepIndex: 0,
      currentStep: question.steps[0],
      stepInput: '',
      verifyResult: null,
      errorCount: 0,
      stepErrorCounts: {}
    });
  },

  onInputChange(e) {
    this.setData({ stepInput: e.detail.value });
  },

  onChoiceSelect(e) {
    this.setData({ stepInput: e.currentTarget.dataset.value });
  },

  submitStep() {
    const { currentStep, stepInput, currentStepIndex, stepErrorCounts } = this.data;
    if (!stepInput) return;

    const expected = currentStep.expected_input;
    let isCorrect = false;
    let resultType = 'wrong';
    let title = '回答错误';
    let message = '';
    let detail = '';
    let hint = '';
    let scaffold = '';
    let formulaRef = '';

    // 验证逻辑
    if (currentStep.input_type === 'numerical') {
      const numInput = parseFloat(stepInput);
      const expectedVal = parseFloat(expected.value);
      const tolerance = expected.tolerance || 0.01;
      
      if (!isNaN(numInput) && Math.abs(numInput - expectedVal) <= tolerance) {
        isCorrect = true;
      } else if (!isNaN(numInput) && Math.abs(Math.abs(numInput) - Math.abs(expectedVal)) <= tolerance) {
        // 数值正确但符号可能错误
        detail = '数值大小正确，但符号可能有误。请检查物距/像距的符号规则（实物/实像为负，虚物/虚像为正）';
      }
    } else if (currentStep.input_type === 'formula') {
      // 简化公式验证：检查输入是否包含关键部分
      const input = stepInput.toLowerCase().replace(/\s/g, '');
      const patterns = expected.formula_patterns || [expected.value];
      isCorrect = patterns.some(p => input.includes(p.toLowerCase().replace(/\s/g, '')));
    } else if (currentStep.input_type === 'choice') {
      isCorrect = stepInput === expected.value;
    }

    if (isCorrect) {
      resultType = 'correct';
      title = '回答正确';
      message = '步骤验证通过！';
      if (currentStep.scaffolding?.hint) {
        hint = currentStep.scaffolding.hint;
      }
    } else {
      // 查找匹配的错误模式
      const errors = currentStep.common_errors || [];
      let matchedError = null;
      
      for (let err of errors) {
        if (err.error_pattern && stepInput.toLowerCase().includes(err.error_pattern.toLowerCase())) {
          matchedError = err;
          break;
        }
      }
      
      // 如果没有匹配到具体模式，取第一个错误
      if (!matchedError && errors.length > 0) {
        matchedError = errors[0];
      }
      
      if (matchedError) {
        title = matchedError.diagnosis_message || '回答错误';
        message = matchedError.diagnosis_message;
        detail = matchedError.root_cause;
        hint = matchedError.remediation_hint;
        formulaRef = matchedError.knowledge_ref;
      }

      // 更新错误计数
      const newStepErrorCounts = { ...stepErrorCounts };
      if (!newStepErrorCounts[currentStepIndex]) {
        newStepErrorCounts[currentStepIndex] = 0;
      }
      newStepErrorCounts[currentStepIndex]++;
      
      // 检查是否需要推送辅助材料
      if (newStepErrorCounts[currentStepIndex] >= (currentStep.scaffolding?.after_n_errors || 2)) {
        scaffold = currentStep.scaffolding?.hint || '建议回顾相关公式和知识点';
      }

      this.setData({
        errorCount: this.data.errorCount + 1,
        stepErrorCounts: newStepErrorCounts
      });
    }

    this.setData({
      verifyResult: {
        type: resultType,
        title,
        message,
        detail,
        hint,
        scaffold,
        formulaRef
      }
    });
  },

  nextStep() {
    const { currentStepIndex, currentQuestion } = this.data;
    if (currentStepIndex < currentQuestion.steps.length - 1) {
      const nextIndex = currentStepIndex + 1;
      this.setData({
        currentStepIndex: nextIndex,
        currentStep: currentQuestion.steps[nextIndex],
        stepInput: '',
        verifyResult: null
      });
    } else {
      // 完成本题
      wx.showToast({ title: '恭喜完成本题！', icon: 'success' });
      setTimeout(() => {
        this.setData({ isAnswering: false });
      }, 1500);
    }
  },

  retryStep() {
    this.setData({
      stepInput: '',
      verifyResult: null
    });
  },

  showHint() {
    const { currentStep } = this.data;
    if (currentStep.scaffolding?.hint) {
      wx.showModal({
        title: '提示',
        content: currentStep.scaffolding.hint,
        showCancel: false
      });
    }
  },

  goToFormulaRef() {
    const ref = this.data.verifyResult?.formulaRef;
    if (ref) {
      wx.navigateTo({
        url: `/pages/formula-detail/formula-detail?id=${ref}&type=formula`
      });
    }
  }
});

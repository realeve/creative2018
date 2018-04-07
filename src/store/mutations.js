// 同步事件

let mutations = {
  setInitStatus(state, val) {
    state.inited = val;
  },
  initTyped(state, val) {
    state.typeStatus = val;
  },
  setTips(state, val) {
    state.tips = val;
  },
  initCanvas(state, val) {
    state.initCanvas = val;
  }
};

export default mutations;

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const storage = window.localStorage;

export default new Vuex.Store({
  state: {
    // 已完成番茄钟
    pomodoroList: [],
    // 当前时间
    now: new Date().getTime(),
    // 设定番茄钟的时间
    time: 0,
    // 单个番茄钟时长
    minutes: 25,
    // 定时器
    timer: null,
  },
  getters: {
    remaining(state) {
      return (state.minutes * 60000 + state.time - state.now) / 1000;
    },
  },
  mutations: {
    // 初始化已完成番茄钟列表
    setPoromodo(state) {
      const json = storage.getItem('pomodoro');
      const loaclCart = JSON.parse(json);
      loaclCart.forEach((value) => state.cartList.push(value));
    },
    // 添加已完成番茄钟
    addPoromodo(state, obj) {
      state.pomodoroList.push(obj);
      storage.setItem('pomodoro', JSON.stringify(state.pomodoroList));
    },
    // 修改单个计时器的长度
    changeMinutes(state, val) {
      state.minutes += val;
    },
    // 开始计时器
    startTimer(state) {
      state.time = state.minutes * 60;
      state.timer = setInterval(() => {
        state.time -= 1;
      }, 1000);
    },
    // 停止计时器
    stopTimer(state) {
      clearInterval(state.timer);
      state.timer = null;
    },
  },
  actions: {

  },
  modules: {
  },
});

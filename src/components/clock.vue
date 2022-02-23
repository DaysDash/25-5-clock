<template>
  <div>
    <div class="time" >
      <p v-if="timer">{{ showTime }}</p>
      <p v-else>{{`${minutes}:00`}}</p>
    </div>
    <div class="chooseTime">
      <button @click="setTime(5)" v-show="!timer">+ 5</button>
      <button @click="setTime(-5)" v-show="!timer">- 5</button>
    </div>
    <div id="control">
      <button @click="start" v-if="!timer">开始</button>
      <button @click="giveup" v-else>放弃</button>
    </div>
    <!-- <div>
      <h3>已完成番茄钟</h3>
      <li v-for="item in list" :key="item.time">{{item.time}}{{item.long}}</li>
    </div> -->
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  computed: {
    showTime() {
      const minute = Math.floor(this.time / 60);
      const min = minute >= 10 ? minute : `0${minute}`;
      const second = this.time % 60;
      const sec = second >= 10 ? second : `0${second}`;
      return `${min}:${sec}`;
    },
    ...mapState([
      'minutes', 'now', 'timer', 'time',
    ]),
  },
  methods: {
    start() {
      // 点下开始的时间应该开始产生
      this.$store.commit('startTimer');
    },
    giveup() {
      this.$store.commit('stopTimer');
    },
    setTime(num) {
      this.$store.commit('changeMinutes', num);
    },
  },
};
</script>
<style lang="stylus" scoped>
.time
  margin 100px auto
  line-height 100px
  font-size 100px
  text-align center
  font-family "JetBrains Mono"
.chooseTime button
  font-size 20px
  line-height 1.5em
  width 60px
  background-color deepskyblue
  margin: 0 20px 10px
  color white
  border none
  &:disabled
    background-color grey
    cursor wait
#control button
  margin 0 auto
  width 200px
  font-size 30px
  line-height 2em
  text-align center
  background deepskyblue
  color white
  border none
  box-shadow 1px -1px 10px rgba(0,0,0,.2)
button:active
  border none
</style>

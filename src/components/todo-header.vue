<template>
  <div id="date">
    <div class="date-title">
      <span @click="nextMonth(-1)">&lt;</span>
      <span>{{ year }}年{{ month }}月</span>
      <span @click="nextMonth(1)">&gt;</span>
    </div>
      <div class="week-title">
        <div>日</div>
        <div>一</div>
        <div>二</div>
        <div>三</div>
        <div>四</div>
        <div>五</div>
        <div>六</div>
      </div>
      <div class="date-content">
          <div v-for="n in firstDay" :key="n + '空白'">
          </div>
          <div v-for="n in days" :key="n" :data="`${year}-${month}-${n}`">
            {{ n }}号
          </div>
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: new Date(),
    };
  },
  computed: {
    year() {
      return this.data.getFullYear();
    },
    month() {
      return this.data.getMonth() + 1;
    },
    week() {
      return this.data.getDay();
    },
    days() {
      const firstDay = new Date(this.year, this.month - 1);
      const lastDay = new Date(this.year, this.month);
      const msPerDay = 24 * 60 * 60 * 1000;
      return (lastDay.getTime() - firstDay.getTime()) / msPerDay;
    },
    firstDay() {
      return new Date(this.year, this.month - 1, 0).getDay();
    },
  },
  methods: {
    nextMonth(i) {
      this.data = new Date(this.year, this.month - 1 + i);
    },
  },
  mounted() {
    this.data = new Date();
  },
};
</script>
<style lang="stylus" scoped>
div#date
  color white
  margin auto
  .date-title
    background-color deepskyblue
    line-height 50px
    display flex
    border 1px solid white
    justify-content space-around
    span
      cursor pointer
  .week-title
    background-color deepskyblue
    display flex
    justify-content space-around
    line-height 50px
  .date-content
    display grid
    outline -1px solid deepskyblue
    grid-template-columns repeat(7, 1fr)
    div
      outline 1px solid deepskyblue
      height 160px
      background-color #fff
      color grey
</style>

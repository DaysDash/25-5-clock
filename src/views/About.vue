<template>
  <div class="clock">
    <Clock></Clock>
  </div>
</template>
<script>
import Clock from '@/components/clock.vue';

export default {
  name: 'Pomodoro',
  components: {
    Clock,
  },
};
</script>

<template>
  <div class="home">
    <todo-header></todo-header>
  </div>
</template>

<script>
// @ is an alias to /src
import todoHeader from '@/components/todo-header.vue';

export default {
  name: 'Home',
  components: {
    todoHeader,
  },
};
</script>

<template>
  <div id="app">
      <router-link to="/">TodoList</router-link> |
      <router-link to="/about">番茄钟</router-link>
    <router-view/>
        <div id="nav">

    </div>
  </div>
</template>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
</style>

<template>
  <div id="app">
    <router-view />
    <NavTab v-if="$route.meta.isShowFooter" />
  </div>
</template>

<script>
  import NavTab from './components/NavTab/NavTab.vue'
  export default {
    name: 'app',
    async mounted() {
      this.$store.dispatch('autoLogin')
    },
    components: {
      NavTab
    }
  }
</script>

<style lang="stylus" ref="stylesheet/stylus" scoped>
  #app
    font-size 30px
    font-family -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
</style>
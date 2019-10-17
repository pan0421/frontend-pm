<template>
  <section class="not-found-wrapper">
    <section class="not-found">
      <img src="./images/person.png">
      <h3>Page Not Found</h3>
      <button @click="$router.replace('/home')">Go back to Home page</button>
    </section>
  </section>
</template>

<script>
  export default {
    name: 'NotFound'
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus/mixins.styl'
  .not-found-wrapper
    width 100%
    overflow hidden
    .not-found
      padding-top 140px
      width 60%
      margin 0 auto
      text-align center
      >img
        display block
        width 100%
        height 30%
      >h3
        padding 10px 0
        font-size 17px
        color $textcolor
      >button
        display inline-block
        background $blue
        font-size 14px
        color #fff
        border 0
        outline none
        border-radius 5px
        padding 10px 20px
</style>

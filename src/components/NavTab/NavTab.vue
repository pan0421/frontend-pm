<template>
  <footer class="navtab_wrapper">
    <div class="navtab_item" @click="goTo('/home')" :class="{on: isCurrent('/home')}">
      <span class="item_icon">
        <i class="iconfont iconhome"></i>
      </span>
      <span>Home</span>
    </div>
    <div class="navtab_item" @click="goTo('/profile')" :class="{on: isCurrent('/profile')}">
      <span class="item_icon">
        <i class="iconfont iconnickname"></i>
      </span>
      <span>Profile</span>
    </div>
    <div class="navtab_item" @click="goTo('/more')" :class="{on: isCurrent('/more')}">
      <span class="item_icon">
        <i class="iconfont iconicon--"></i>
      </span>
      <span>More</span>
    </div>
  </footer>
</template>

<script>
  export default {
    name: "NavTab",
    methods: {
      goTo(path) {
        if (this.$route.path !== path) {
          this.$router.replace(path)
        }
      },
      isCurrent(path) {
        return this.$route.path === path
      }
    }
  }
</script>

<style lang="stylus" ref="stylesheet/stylus" scoped> 
  @import "../../common/stylus/mixins.styl"
  .navtab_wrapper
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    display flex
    .navtab_item
      flex 1
      display flex
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color $iconcolor
      &.on
        color $blue
      span
        font-size 13px
        margin-bottom 2px
        .iconfont
          font-size 24px
</style>
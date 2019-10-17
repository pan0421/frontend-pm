<template>
  <section class="more">
    <Header class="more-nav">
      <div slot="center">More</div>
    </Header>
    <MoreTabList class="more-tablist" />
  </section>
</template>

<script>
  import Header from '../../components/Header/Header'
  import MoreTabList from './MoreTabs/MoreTabList'
  export default {
    components: {
      Header,
      MoreTabList
    }
  }
</script>

<style lang="stylus" ref="stylesheet/stylus" scoped> 
  @import '../../common/stylus/mixins.styl'
  .more
    width 100%
    .more-nav 
      background $blue
      color #fff
      font-size 18px
      position fixed
      left 0
      right 0
      top 0
      z-index 9
    .more-tablist
      margin-top 45px
      margin-bottom 44px
</style>
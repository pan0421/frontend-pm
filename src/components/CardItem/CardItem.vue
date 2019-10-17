<template>
  <div class="card-item">
    <span class="card-icon"><i :class="cardListItem.icon"></i></span>
    <div class="card-info">
      <span class="card-title">{{cardListItem.title}}</span>
      <span class="card-arrow">
        <i class="iconfont iconright-arrow" v-if="cardListItem.children"></i>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CardItem",
    props: {
      cardListItem: {
        type: Object,
      }
    },
  }
</script>

<style lang="stylus" ref="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .card-item
    display flex
    align-items center
    padding-left 20px
    border-bottom 1px solid #f1f1f1
    .card-icon
      display flex
      align-items center
      width 22px
      height 22px
      .iconfont
        font-size 22px
        color $blue
    .card-info
      margin-left 20px
      width 100%
      padding 18px 0
      font-size 16px
      color $textcolor
      display flex
      justify-content space-between
      align-items center
      line-height 20px
      .card-arrow     
        margin-right 20px
        .iconright-arrow
          color $iconcolor
          font-size 20px
</style>
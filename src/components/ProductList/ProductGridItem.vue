<template>
  <div class="products-item">
    <div class="product-image"><img :src="productsItem.image_path" alt="" ></div>
    <div class="products-info">
      <div class="title"><p>{{productsItem.name}}</p></div>
      <div class="price">$ {{productsItem.price}}</div>
      <div class="quantity">{{productsItem.quantity}} left</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ProductGridItem",
    props: {
      productsItem: {
        type: Object,
      }
    },
  }
</script>

<style lang="stylus" ref="stylesheet/stylus" scoped> 
  @import "../../common/stylus/mixins.styl"
  .products-item
    position relative
    background #fff
    width 48%
    margin-bottom 8px
    border-radius 5px
    display flex
    flex-direction column
    .product-image
      img
        width 100%
        border-radius 5px
    .products-info
      display flex
      flex-direction column
      font-size 13px
      overflow hidden
      padding-left 5px
      .title 
        margin 2px 2px 5px 2px
        p
          text-overflow ellipsis
          display -webkit-box
          -webkit-line-clamp 2
          -webkit-box-orient vertical
          overflow hidden
          line-height 18px
      .price
        color #ea0f0f
        margin 2px
      .quantity
        color #777777
        margin 2px 2px 10px 2px
</style>

<template>
  <div class="products">
    <product-grid-item v-for="item in products" :products-item="item" :key="item.id"/>
  </div>
</template>

<script>
  import ProductGridItem from './ProductGridItem'
  import {
    mapState
  } from 'vuex'

  export default {
    name: "ProductItem",
     computed: {
      ...mapState({
        products: state => state.product.products
      })
    },
    components: {
      ProductGridItem
    },
  }
</script>

<style lang="stylus" ref="stylesheet/stylus" scoped> 
  @import "../../common/stylus/mixins.styl"
  .products
    display flex
    flex-wrap wrap
    justify-content space-around
    padding 2px
    background #eee
    margin-bottom 45px
</style>

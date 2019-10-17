<template>
  <div class="products">
    <product-list-item v-for="item in products" :products-item="item" :key="item.id"/>
  </div>
</template>

<script>
  import ProductListItem from './ProductListItem'
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
      ProductListItem
    },
  }
</script>


 <style lang="stylus" ref="stylesheet/stylus" scoped>
   @import '../../common/stylus/mixins.styl'
  .products 
    display flex
    flex-direction column
    padding 2px
    background #eee
</style>
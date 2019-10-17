<template>
  <section class="home">
    <Header class="home-nav">
      <div slot="center">Shopping List</div>
      
      <div slot="right" v-if="viewMode" @click="viewMode=false"><i class="iconfont iconstudioslist"></i></div>
      <div slot="right" v-if="!viewMode" @click="viewMode=true"><i class="iconfont icongrid"></i></div>
    </Header>

    <ProductGrid v-if="viewMode" class="home-prod" />
    <ProductList v-if="!viewMode" class="home-prod" />
  </section>
</template>

<script>
  import { mapState } from 'vuex'
  import ProductGrid from '../../components/ProductList/ProductGrid'
  import ProductList from '../../components/ProductList/ProductList'
  import Header from '../../components/Header/Header'

  export default {
    name: 'home',
    data(){
      return{
        viewMode: true // true for grid view, false for list view
      }
    },
    computed: {
      ...mapState({
        user: state => state.user.user
      }),
    },
    async mounted() {
      let result = await this.$API.reqProducts()
      if (result.code === 0) {
        const products = result.data
        this.$store.dispatch('recordProduct', products)
      } else {
        alert(result.msg)
      }
    },
    components: {
      Header,
      ProductGrid,
      ProductList
    }
  }
</script>

<style lang="stylus" ref="stylesheet/stylus" scoped>
  @import '../../common/stylus/mixins.styl'
  .home
    width 100% 
    .home-nav 
      background $blue
      color #fff
      font-size 18px
      position fixed
      left 0
      right 0
      top 0
      z-index 9
    .home-prod
      margin-top 44px
      margin-bottom 45px
</style>
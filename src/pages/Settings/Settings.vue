<template>
  <section class="settings">
    <Header class="settings-nav">
      <div slot="left" @click="goBack"><i class="iconfont iconarrow_left"></i></div>
      <div slot="center">Settings</div>
    </Header>
    <div class="settings-list">
      <CardItem v-for="item in childrenList" :card-list-item="item" :key="item._id" @click.native="item.path ? goTo(item.path, item.children) : showMessage(item.title)"/>
    </div>
  </section>
</template>

<script>
  import Header from '../../components/Header/Header'
  import CardItem from '../../components/CardItem/CardItem'
  import { Toast } from 'vant'
  export default {
    name: "Settings",
    data(){
      return {
        childrenList: []
      }
    },
    components: {
      Header,
      CardItem
    },
    created(){
      this.childrenList = this.$route.query.children
    },
    
    methods: {
      goBack() {
        this.$router.go(-1)
      },
      goTo(path, children){
        this.$router.push({path, query: children})
      },
      showMessage(title){
        Toast(title + " function is under development." )
      }
    }
  }
</script>

<style lang="stylus" ref="stylesheet/stylus" scoped> 
  @import '../../common/stylus/mixins.styl'
  .settings
    width 100%
    .settings-nav 
      background $blue
      color #fff
      font-size 18px
      position fixed
      left 0
      right 0
      top 0
      z-index 9
    .settings-list
      margin-top 45px
      margin-bottom 44px
</style>
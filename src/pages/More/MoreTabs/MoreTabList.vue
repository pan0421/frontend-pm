<template>
  <div class="tab-list">
    <CardItem v-for="item in tabList" :card-list-item="item" :key="item._id" @click.native="item.path ? goTo(item.path, item.children) : showMessage(item.title)"/>
  </div>
</template>

<script>
  import { tabList } from './MoreItemsConfig'
  import CardItem from '../../../components/CardItem/CardItem'
  import { Toast } from 'vant'

  export default {
    name: "MoreTabList",
    data() {
      return {
        tabList: []
      }
    },
    methods: {
      goTo(path, children){
        this.$router.push({path, query: {children}})
      },
      showMessage(title){
        Toast(title + " function is under development." )
      }
    },
    components: {
      CardItem
    },
    mounted() {
      this.tabList = tabList
    },
  }
</script>

<style lang="stylus" ref="stylesheet/stylus" scoped>
  .tab-list
    padding 0 5px
</style>
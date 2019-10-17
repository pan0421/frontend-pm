<template>
  <section class="aboutme">
    <Header class="aboutme-nav">
      <div slot="left" @click="goBack"><i class="iconfont iconarrow_left"></i></div>
      <div slot="center">About Me</div>
      <div slot="right" class="edit" @click="edit"><i class="iconfont iconedit"></i></div>
    </Header>
    <section class="aboutme-container">
      <section v-for="aboutme in user.aboutme" :key="aboutme[0]">
        <van-cell :title="aboutme[0]" size="large" :label="aboutme[1]" class="aboutme-item" />
      </section>
    </section>
  </section>
</template>

<script>
  import Header from '../../components/Header/Header'
  import { mapState } from "vuex"
  import { Toast } from 'vant'

  export default {
    components: {
      Header,
    },
    computed: {
      ...mapState({
        user: state => state.user.user
      }),
    },
    methods: {
      goBack() {
        this.$router.go(-1)
      },
      edit(){
        Toast("This function is under development")
      }
    }
  }
</script>

<style lang="stylus" ref="stylesheet/stylus" scoped>
  @import '../../common/stylus/mixins.styl'
  .aboutme
    width 100%
    overflow hidden
    .aboutme-nav 
      background $blue
      color #fff
      font-size 18px
      position fixed
      left 0
      right 0
      top 0
      z-index 9
      .left
        height 100%
        width 60px
        .iconfont
          font-size 20px
      .edit
        .iconfont
          font-size 16px
    .aboutme-container
      margin-top 45px
      padding-top 5px
      .aboutme-item
        border-bottom 1px solid #eee
      
          

</style>
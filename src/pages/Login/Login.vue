<template>
  <section class="loginContainer">
    <div class="loginInner">
      <div class="login_header">PM Frontend</div>

      <div class="login_header_flag">
        <a href="javascript:;" :class="{on: loginFlag}" @click="loginFlag=true">Login</a>
        <a href="javascript:;" :class="{on: !loginFlag}" @click="loginFlag=false">Register</a>
      </div>

      <div class="login_content">
        <form>
          <div :class="{on: loginFlag}">
            <section>
              <section class="login_container">
                <input type="text" placeholder="Username / Email" v-model="username">
              </section>
              <section class="login_container">
                <input :type="isShowPwd ? 'text' : 'password'" maxlength="8" placeholder="Password" v-model="pwd">
                <div class="switch_button" :class="isShowPwd ? 'on' : 'off'" @click="isShowPwd = !isShowPwd">
                  <div class="switch_circle" :class="{right: isShowPwd}"></div>
                </div>
              </section>
            </section>
            <button class="login_submit" @click.prevent="login">Login</button>
          </div>

          <div :class="{on: !loginFlag}">
            <section>
              <section class="login_container">
                <input type="text" placeholder="Username / Email" v-model="username">
              </section>
              <section class="login_container">
                <input :type="isShowPwd ? 'text' : 'password'" maxlength="8" placeholder="Password" v-model="pwd">
                <div class="switch_button" :class="isShowPwd ? 'on' : 'off'" @click="isShowPwd = !isShowPwd">
                  <div class="switch_circle" :class="{right: isShowPwd}"></div>
                  <span class="switch_text">{{isShowPwd ? '' : ''}}</span>
                </div>
              </section>
            </section>
            <button class="login_submit" @click.prevent="register">Register</button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script type="text/ecmascript-6">
  import { Toast } from 'vant'
  import md5 from 'blueimp-md5'
  export default {
    data() {
      return {
        username: '',
        pwd: '',
        isShowPwd: false,
        loginFlag: true,
      }
    },
    methods: {
      async login() {
        let result
        const { username,  pwd } = this
        const pwdHash = md5(pwd)
        if(!username || !pwd){
            Toast("Please fill in username and password")
        }else{
          result = await this.$API.reqPwdLogin({ username, pwdHash })
          if (result.code === 0) {
            const user = result.data
            this.$store.dispatch('recordUser', user)
            this.$router.replace('/home')
          } else {
            Toast(result.msg)
          }
        }
      },
      register() {
        Toast("This function is still under development")
      }
    },
    beforeRouteEnter(to, from, next) {
      next((component) => {
        if (component.$store.state.user.token) {
          next('/home')
        } else {
          next()
        }
      })
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus/mixins.styl'
  .loginContainer
    background #fff
    .loginInner
      padding-top 80px
      width 80%
      margin 0 auto
      .login_header
        font-size 36px
        font-weight bold
        color $blue
        text-align center
        margin-bottom 5px
      .login_header_flag
        padding-top 20px
        text-align center
        margin-bottom 25px
        >a
          color $textcolor
          font-size 16px
          padding-bottom 4px
          &:first-child
            margin-right 40px
          &.on
            color $blue
            font-weight 400
            border-bottom 2px solid $blue
      .login_content
        >form
          >div
            display none
            &.on
              display block
            input
              width 100%
              height 100%
              padding-left 10px
              box-sizing border-box
              border 1px solid #ddd
              border-radius 4px
              outline 0
              font 400 14px Arial
              &:focus
                border 1px solid $blue
            .login_container
              position relative
              margin-top 16px
              height 48px
              font-size 14px
              background #fff
              .switch_button
                font-size 12px
                border 1px solid #ddd
                border-radius 10px
                transition background-color .3s, border-color .3s
                padding 0 6px
                width 35px
                height 22px
                color #fff
                position absolute
                top 50%
                transform translateY(-50%)
                right 10px
                &.off
                  background #fff
                &.on
                  background $blue
                >.switch_circle
                  position absolute
                  top -1px
                  left -1px
                  width 22px
                  height 22px
                  border 1px solid #ddd
                  border-radius 50%
                  background #fff
                  box-shadow 0 2px 4px 0 rgba(0,0,0,.1)
                  transition transform .3s
                  &.right
                    transform translateX(27px)
            .login_submit
              display block
              width 100%
              height 42px
              margin-top 30px
              border-radius 4px
              background $blue
              color #fff
              text-align center
              font-size 16px
              line-height 42px
              border 0
</style>
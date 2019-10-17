<template>
  <section class="account">
    <section class="account-info">
      <div class="account-info-basic">
        <div class="account-image"><img src="https://upload.jianshu.io/users/upload_avatars/3136195/484e32c3504a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180" />
        </div>
        <div class="account-info-right">
          <div class="account-name">{{user.fullname}} </div>
          <div class="account-info-bottom">
            <div class="account-bday"> Birthday {{user.birthday}} </div>
            <div class="account-age"> Age {{user.age}}</div>
          </div>
        </div>
        <div class="edit" @click="showEdit"><i class="iconfont iconedit"></i></div>
      </div>
      
      <div class="account-info-extra">
        <CardItem :card-list-item="extra.education" @click.native="$router.push({path: '/profile/education'})"></CardItem>
        <CardItem :card-list-item="extra.aboutme" @click.native="$router.push('/profile/aboutme')"></CardItem>
        <CardItem :card-list-item="extra.changePassword" @click.native="showChangePwd"></CardItem>
      </div>
    </section>

    <section class="account-footer" v-if="user.id">
      <button class="account-action logout" @click="showLogout">Logout</button>
    </section>
    
    <van-dialog title="Change Password" show-cancel-button v-model="ChangePwdPopup" :before-close="beforeClose" cancel-button-text="Cancel" confirm-button-text='Confirm' >
      <van-cell-group>
        <van-field class="pwd-field" v-model="changePsw.oldPsw" type="password" required clearable placeholder="Old Password" />
        <van-field class="pwd-field" v-model="changePsw.newPsw" type="password" required clearable placeholder="New Password" />
        <van-field class="pwd-field" v-model="changePsw.againNewPsw" type="password" required clearable placeholder="Confirm New Password" />
      </van-cell-group>
    </van-dialog>
    </section>
</template>

<script type="text/ecmascript-6">
  import { mapState } from "vuex"
  import { Dialog, Toast  } from "vant"
  import CardItem from '../../components/CardItem/CardItem'
  import md5 from 'blueimp-md5'
  
  export default {
    data(){
      return{
        extra:{
          education: {
            id: 1,
            title: "Education",
            icon: "iconfont iconeducation",
            children: []
          },
          aboutme:{
            id: 2,
            title: "About Me",
            icon: "iconfont iconinformation",
            children: []
          },
          changePassword:{
            id: 3,
            title: "Change Password",
            icon: "iconfont icon3701mima",
          }
        },
        changePsw: {
          oldPsw: '',
          newPsw: '',
          againNewPsw: ''
        },
        ChangePwdPopup: false,
        LogoutPopup: false,
        password: '',
      }
    },
    computed: {
      ...mapState({
        user: state => state.user.user
      }),
    },
    methods: {
      showChangePwd(){
        this.ChangePwdPopup = true
      },
      showEdit(){
        Toast("This function is under development")
      },

      goTo (path) {
        this.$router.push(path)
      },
      
      showLogout(){
        Dialog.confirm({
          title: 'Logout',
          message: 'Are you sure to logout?',
          confirmButtonText:"Confirm",
           confirmButtonColor:"red" ,
           cancelButtonText:"Cancel"
        }).then(() => {
          this.$store.dispatch("logout")
          this.$router.replace('/login')
        }).catch(() => {});
      },
      beforeClose(action, done){ 
        if(action === 'confirm'){
          if(this.changePsw.oldPsw === '' || this.changePsw.newPsw === '' || this.changePsw.againNewPsw === ''){
            this.$toast("Please fill in required fields.");
            done(false)
          }else if(md5(this.changePsw.oldPsw) != this.user.pwd){
            this.$toast("Old Password is incorrect.");
            done(false)
          }else if(this.changePsw.newPsw !== this.changePsw.againNewPsw){
            this.$toast("New Password does not match.");
            done(false)
          }else{
            this.$store.dispatch("changePsw", md5(this.changePsw.newPsw))
            done()
            Toast("Your password has been updated")
            this.changePsw.oldPsw=''
            this.changePsw.newPsw=''
            this.changePsw.againNewPsw=''
          }
        }else{
          done()
          this.changePsw.oldPsw=''
          this.changePsw.newPsw=''
          this.changePsw.againNewPsw=''
        }
      },
      navEducation(){
        this.$router.push('/profile/education')
      }
    },
     components: {
      CardItem   
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus/mixins.styl'
  .account
    width 100%
    overflow hidden
    .account-nav 
      background $blue
      color #fff
      font-size 18px
      position fixed
      left 0
      right 0
      top 0
      z-index 9
    .account-info    
      .account-info-basic
        height 150px
        display flex
        align-items center
        background $blue
        position relative
        padding 15px 10px
        .account-image
          width 60px
          height 60px
          border-radius 50%
          overflow hidden
          vertical-align top
          background #e4e4e4
          margin-left 15px
          .iconfont
            background #e4e4e4
            font-size 60px
        
        .account-info-right
          display flex
          flex-direction column
          justify-content space-around
          margin-top 8px
          margin-left 30px
          font-weight: 700
          font-size 18px
          color #fff
          padding-bottom 8px
          padding-top 10px
          .account-name
            font-size 28px
            margin-bottom 20px
            font-family Helvetica
            font-weight 600
            letter-spacing 1px
          .account-info-bottom
            font-size 12px
            display flex
            flex-direction column
            justify-content space-around
            div
              width 130px
              height 20px
              background #80808087
              border-radius 5px
              line-height 20px
              padding 1px 15px
            .account-bday
              margin-bottom 10px
        .edit
          position absolute
          bottom 20px
          right 20px
          color #ffffff
          width 30px
          border-radius 5px
          background #80808087
          display flex
          align-items center
          justify-content center
          padding-top 5px
          padding-bottom 5px
          .iconfont
            font-size 20px

      .account-info-extra
        margin-top 10px
        background #fff
        .account-info-extra-item
          display flex
          align-items center
          padding-left 15px
          border-bottom 1px solid #f1f1f1

          >span
            display flex
            align-items center
            width 20px
            height 20px
            >.iconfont
              font-size 25px
            .iconicon
              color #ff8198
            .iconinformation
              color #ff8198
           
          .extra-item-title
            margin-left 30px
            width 100%
            padding 18px 10px 18px 0
            font-size 16px
            color #333
            display flex
            justify-content space-between
            align-items center
            span
              display block
            .extra-item-icon
              float right
              right 20px
              width 10px
              height 10px
              margin-right 20px
              .iconright-arrow
                color #bbb
                font-size 20px
    .account-footer
      position absolute
      left 0
      right 0
      bottom 40px
      .account-action
        display block
        width 90%
        height 42px
        margin 20px auto
        border-radius 4px
        background #f5506e
        color #fff
        text-align center
        font-size 16px
        line-height 42px
        border 0
    .pwd-field
      width 90%
      border 1px solid #ddd
      margin 10px auto
      border-radius 5px
</style>

import ajax from './ajax'
const BASE = '/api'

export const reqPwdLogin = ({ username, pwdHash }) => ajax({
  method: 'POST',
  url: BASE + '/login_pwd',
  data: {
    username,
    pwdHash
  }
})

export const reqAutoLogin = () => ajax({
  url: BASE + '/auto_login',
  headers: { needToken: true }
})

export const reqUpdatePassword = ( username, pwdHash ) => ajax({
  method: 'POST',
  url: BASE + '/change_password',
  data: {
    username, pwdHash
  }
})

export const reqProducts = () => ajax(BASE +'/products')

import Mock from 'mockjs'
import loginAPI from './data/user'

Mock.setup({
  timeout: '350-600'
})

Mock.mock(/\/user\/login/, 'post', loginAPI.login)
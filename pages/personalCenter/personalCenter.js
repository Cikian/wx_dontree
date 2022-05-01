// pages/personalCenter/personalCenter.js
// 获取应用实例
const app = getApp()
Page({
  data: {
    userInfo: "",
  },
  // 用户登录
  login() {
    wx.getUserProfile({
      desc: '登录后使用',
      success: res => {
        let user = res.userInfo
        console.log("授权成功", res)
        this.setData({
          userInfo: user
        })
      },
      fail: res => {
        console.log("授权失败", res)
      }
    })
  },
  //退出登录
  logout() {
    this.setData({
      userInfo: ""
    })
  }
})
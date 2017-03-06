//app.js

App({
  onLaunch: function () {
    console.log('onLaunch')
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  onShow: function() {
    console.log('onShow')
  },
  onHide: function() {
    console.log('onHide')
  },
  onError: function(msg) {
    console.log('onError : ' + msg)
  },
  getUserInfo:function(cb){
    var that = this
    if (this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo:null,
    download_fix:"https://www.pandafly.cn/static/files/recv",
  }
  // ,
  // window:{
  //   "enablePullDownRefresh":true,
  //   "navigationBarBackgroundColor": "#ffffff",
  //   "navigationBarTextStyle": "black",
  //   "navigationBarTitleText": "微信接口功能演示",
  //   "backgroundColor": "#eeeeee",
  //   "backgroundTextStyle": "light"
  // }
})

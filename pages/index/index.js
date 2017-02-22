//index.js
var ttools = require('../../utils/ttools.js');

//获取应用实例
var app = getApp()
Page({
  data: {
    motto: '朱之路好丑',//'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      // url: '../logs/logs'
      url:'../share/share'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    ttools.deb("onload");
    // util.formatTime(new Date())
    wx.request({
      url: 'https://www.pandafly.cn/get_all_videos', //仅为示例，并非真实的接口地址
      data: {
      },
      header: {
        'content-type': 'application/json'
      },
      success: function(res) {
        console.log(res.data)
      }
    })
  },
  onError:function(msg) {
    ttools.err(msg);
  }
})

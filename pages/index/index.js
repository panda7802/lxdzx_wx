//index.js
var ttools = require('../../utils/ttools.js');
var that = null;

function getVideoList() {
  ttools.deb("get all videos");
  wx.request({
      url: 'https://www.pandafly.cn/get_all_videos', 
      data: {
      },
      header: {
        'content-type': 'application/json'
      },
      success: function(res) {
        that.setData({
            video_list: res.data
        });
        ttools.deb(JSON.stringify(res));
      },
      fail:function(res) {
        console.log("no request---------")
      },
    });
}


//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'DEMO',//'Hello World',
    userInfo: {},
    video_list:[]
  },
  onPullDownRefresh: function(){//下拉刷新
    getVideoList();
    wx.stopPullDownRefresh()
  },
  //事件处理函数
  bindViewTap: function() {
    // wx.navigateTo({
    //   // url: '../logs/logs'
    //   url:'../share/share'
    // });
    wx.request({
      url: 'https://www.pandafly.cn', 
      data: {
      },
      header: {
        'content-type': 'application/json'
      },
      success: function(res) {
        ttools.deb(JSON.stringify("----------------------"));
      },
      fail:function(res) {
        console.log("no request---------")
      },
    });
    ttools.deb("eeeeeeeeee");
  },
  // showDetail: function(e) {
  //   var id = e.currentTarget.id;
  //   var json = JSON.stringify(that.data.video_list[id]);
  //   ttools.deb("json : " + json);
  //   // ttools.deb("id : " + video_list[id]);
  //    wx.navigateTo({
  //     // url: '../logs/logs'
  //     url:'../video/video?detail=' + json
  //   });
  // },
  onLoad: function () {
    ttools.deb("onload");
    that = this;
    // util.formatTime(new Date())
    getVideoList();
  },
  onError:function(msg) {
    ttools.err(msg);
  }
})

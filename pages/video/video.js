// pages/video/video.js
var ttools = require('../../utils/ttools.js');
var that = null;

function getVideoItem(t_id) {
  ttools.deb("get video item " + t_id);
  wx.request({
      url: 'https://www.pandafly.cn/get_all_videos', 
      data: {
        id:t_id,
      },
      header: {
        'content-type': 'application/json'
      },
      success: function(res) {
        var items = res.data
        ttools.deb("items" + items);
        if ((null!=items) ) {//} && (items.length() >0)) {
          var item = items[0];
          that.setData({
            video_item: item
          });
          ttools.deb(JSON.stringify(that.data.video_item));
        } else {
          wx.showToast({
            title: '数据获取失败',
            duration: 10000
          })
        }
        
        
      },
      fail:function(res) {
        console.log("no request---------")
      },
    });
}


Page({
  data:{
    video_item:null
  },
  onLoad:function(options){
    that = this;
    // 页面初始化 options为页面跳转所带来的参数
    var id = options.id;
    getVideoItem(id);
    // ttools.deb("recv : " + detail);
    // var item = new Function("return" + detail)();
    // ttools.deb("recv : " +  item.upload_time);
  },
  onPullDownRefresh: function(){//下拉刷新
    getVideoItem();
    wx.stopPullDownRefresh()
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})


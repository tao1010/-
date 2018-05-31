// pages/parents/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  logOut: function () {
    wx.redirectTo({
      url: '../../common/index/index',
    })
  },
  //视频
  video: function () {

    wx.navigateTo({
      url: '../../common/video/video',
    })
  },

  //绘图
  canvas:function(){

      wx.navigateTo({
        url: '../canvas/canvas',
      })
  },
  //动画
  animation: function(){
    wx.navigateTo({
      url: '../animation/animation',
    })
  },
  //音频
  audio:function(){
    wx.navigateTo({
      url: '../audio/audio',
    })
  },
  //地图
  map:function(){
    wx.navigateTo({
      url: '../map/map',
    })
  },
  //网络请求
  request:function(){
    wx.navigateTo({
      url: '../request/request',
    })
  },
  //文件
  file: function(){
    wx.navigateTo({
      url: '../file/file',
    })
  },
  //设备
  device: function(){

    wx.navigateTo({
      url: '../device/device',
    })
  }
})
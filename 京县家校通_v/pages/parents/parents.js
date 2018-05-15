// pages/parents/parents.js

// const app = getApp()
// var template = require('../remplate/customTabbar.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    max: 120
  },

  logOut: function(){
    wx.redirectTo({
      url: '../index/index',
    })
  },
  showVideo: function(){

    wx.navigateTo({
      url: '../video/video',
    })
  },
  quickPlay: function(e){

    console.log(e.detail.value)
    this.audioCtx.seek(e.detail.value)
  },
  audioPlay: function(){

    this.audioCtx.play()
  },
  audioPause: function(){
    this.audioCtx.pause()
  },
  audioStart: function(){
    this.audioCtx.seek(0)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    // template.tabar("tabBar",4,this)//0 表示第一个tabbar
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext("audio", this)
    // this.audioCtx = wx.createInnerAudioContext();
    max = this.audioCtx.detail.duration;
    // console.log(this.audioCtx.detail);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})
// pages/parents/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    max: 120
  },

  logOut: function () {
    wx.redirectTo({
      url: '../../common/index/index',
    })
  },
  showVideo: function () {

    wx.navigateTo({
      url: '../../common/video/video',
    })
  },
  quickPlay: function (e) {

    console.log(e.detail.value)
    this.audioCtx.seek(e.detail.value)
  },
  audioPlay: function () {

    this.audioCtx.play()
  },
  audioPause: function () {
    this.audioCtx.pause();
  },
  pictureSource: function(){

    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
      }
    })
  },
  audioStart: function () {
    this.audioCtx.seek(0)
  },
  takePhoto: function(){
    const ctx = wx.createCameraContext()
    // 拍照
    ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        this.setData({
          src: res.tempImagePath
        })
      }
    })
  },
  error(e) {

    console.log(e.detail)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    // template.tabar("tabBar",4,this)//0 表示第一个tabbar
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext("audio", this)
    // this.audioCtx = wx.createInnerAudioContext();
    // max = this.audioCtx.detail.duration;
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
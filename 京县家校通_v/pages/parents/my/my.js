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
  //上传文件
  uploadFile:function(){

    const uploadTask =wx.uploadFile({
      url: '',//上传服务器的URL
      filePath: '',//文件路径
      name: '',//文件名称
      header: {},
      formData: {
        'user': 'test'
      },
      success: function(res) {

        var data = res.data
        //do something
      },
      fail: function(res) {
        //do something
      },
      complete: function(res) {
        //do something
      },
    })
    //上传进度
    uploadTask.onProgressUpdate((res) =>{

      console.log('上传进度', res.progress)
      console.log('已经上传的数据长度', res.totalBytesSent)
      console.log('预期需要上传的数据总长度', res.totalBytesExpectedToSend)
    })
    uploadTask.abort()//取消上传任务
  },

  //下载文件




})
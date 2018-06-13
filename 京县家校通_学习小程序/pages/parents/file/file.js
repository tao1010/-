// pages/parents/file/file.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tempFilePath: '',
    saveFilePath: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      saveFilePath: wx.getStorageSync("saveFilePath")
    })
  },

  //选择图片
  chooseImage: function(){
    var that = this
    wx.chooseImage({
      success: function(res) {
        that.setData({
          tempFilePath: res.tempFilePaths[0]
        })
        console.log('成功返回路径:'+ res.tempFilePaths[0])
      },
    })
  },
  //保存文件
  saveFile: function(){
    var that = this
    wx.saveFile({
      tempFilePath: this.data.tempFilePath,
      success: function(res){
        that.setData({
          saveFilePath: res.savedFielPath
        })
        wx.setStorageSync('saveFilePath', res.savedFielPath)
        console.log(res)
      },
      fail: function(res){
        console.log(res)
      }
    })
  },
  //
  clear: function(){

    wx.setStorageSync('saveFilePath', '')
    this.setData({
      tempFilePath: '',
      saveFilePath: ''
    })
  },
  //获取文件列表
  getList: function(){
    wx.getSavedFileList({
      success: function(res){
        console.log(res)
      }
    })
  },
  //获取临时文件信息
  getFile: function () {

    wx.getSavedFileList({
      success: function(res){

        if(res.fileList.length > 0){

          var tempFilePath = res.fileList[0].filePath
          wx.getFileInfo({
            filePath: tempFilePath,
            success: function (res) {
              console.log(res)
            },
            fail: function (res) {
              console.log(res)
            }
          })
        }
      }
    })
  },
  //获取已保存的文件信息
  getFileInfo: function(){

    wx.getSavedFileList({
      success: function (res) {

        if (res.fileList.length > 0) {

          var tempFilePath = res.fileList[0].filePath
          wx.getSavedFileInfo({
            filePath: tempFilePath,
            success: function (res) {
              console.log(res)
            },
            fail: function (res) {
              console.log(res)
            }
          })
        }
      }
    })
  },
  removeFile: function(){

    wx.getSavedFileList({
      success: function (res) {

        if (res.fileList.length > 0) {

          var tempFilePath = res.fileList[0].filePath
          wx.removeSavedFile({
            filePath: tempFilePath,
            success: function (res) {
              console.log(res)
            },
            fail: function (res) {
              console.log(res)
            }
          })
        }
      }
    })
  },
  openDocument: function(){

    wx.getSavedFileList({
      success: function (res) {

        if (res.fileList.length > 0) {

          var tempFilePath = res.fileList[0].filePath
          wx.openDocument({
            filePath: tempFilePath,
            fileType: 'pdf',
            success: function (res) {
              console.log(res)
            },
            fail: function (res) {
              console.log(res)
            }
          })
        }
      }
    })
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
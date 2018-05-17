// pages/common/contact/contact.js
const recorderManager = wx.getRecorderManager()
const options = {
  duration: 10000,
  sampleRate: 44100,
  numberOfChannels: 1,
  encodeBitRate: 192000,
  format: 'aac',
  frameSize: 50
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  startRecord: function(){
    
    recorderManager.start(options);
  },
  stopRecord: function(){

    recorderManager.stop();
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    // template.tabbar("tabBar", 2, this)//1表示第二个tabbar
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
recorderManager.onStart(() => {
  console.log('recorder start')
})
recorderManager.onStop((res) => {
  console.log('recorder stop', res)
  const { tempFilePath } = res
})
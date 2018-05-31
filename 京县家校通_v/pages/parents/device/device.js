// pages/parents/device/device.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  getSystemInfo: function(){

    // wx.getSystemInfo({
    //   success: function(res) {
    //     console.log(res)
    //   },
    // })
    try{
      var res = wx.getSystemInfoSync()
      console.log(res)
    }catch(e){
      console.log(e)
    }
  },
  caniUse: function(){

    if (wx.canIUse('openBluetoothAdapter')){
      console.log('I can')
    }else{
      console.log("You can't")
    }
  },
  networkingStatus: function(){
    wx.getNetworkType({
      success: function(res) {
        console.log(res)
      },
    })
    wx.onNetworkStatusChange(function(res){
      console.log(res)
    })
  },
  vibrateLong: function(){
    wx.vibrateLong({
      
      success: function(res){
          console.log('手机长振动了')
          
          wx.onUserCaptureScreen(function(res){
            
            console.log('用户截屏了：' + res)
          })
      }
    })
  },
  screenBrightness: function(){

    wx.setScreenBrightness({
      value: 1,
      success: function(res){
        console.log(res)
      }
    })

    wx.getScreenBrightness({

      success: function(res){
        console.log(res)

      }    
    })
  },
  phone: function(){
    wx.makePhoneCall({
      phoneNumber: '17629283930',
      success: function(res){
        console.log(res)
      }
    })
  },
  scanCode: function(){
    //允许相册和相机扫描
    wx.scanCode({
      success: function(res){
        console.log(res)
      }
    })
    //只允许相机
    wx.scanCode({
      onlyFromCamera: true,
      success: function(res){
        console.log(res)
      }
      
    })
  },
  clipBoard: function(){

    //获取剪贴板的内容
    wx.getClipboardData({
      success: function(res){
        console.log(res)
      }
    })
    //设置剪贴板的内容
    wx.setClipboardData({
      data: '设置剪贴板内容...',
      success: function(res){
        console.log(res)
      }
    })
  },
  contact: function(){
    wx.addPhoneContact({
      firstName: 'AAAAAA',
      mobilePhoneNumber: '10086',
      success: function(res){
        console.log(res)
      }
    })
  }
})



// pages/parents/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  onLoad: function(options){

    if (getApp().globalData.userRole === "1") {
      wx.setNavigationBarTitle({
        title: '家长中心',
      })
    }
    if (getApp().globalData.userRole === "2") {
      wx.setNavigationBarTitle({
        title: '教师中心',
      })
    }
    if (getApp().globalData.userRole === "3") {
      wx.setNavigationBarTitle({
        title: '管理中心',
      })
    }
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
  },
  pay: function(){
    wx.requestPayment({
      timeStamp: '',
      nonceStr: '',
      package: '',
      signType: '',
      paySign: '',
      success: function(res){
        console.log(res)
      },
      fail: function(res){
        console.log(res)
      },
      complete: function(res){
        console.log(res)
      }
    })
  },
  run: function(){
    wx.getSetting({
      success: function (res) {
        
        if (res.authSetting['scope.werun']) {
          console.log(res)
          wx.getWeRunData({
            success: function (res) {
              console.log(res)
            }
          })
        }else{
          wx.authorize({
            scope: 'scope.werun',
            success() {
              wx.run()
            }
          })
          console.log('未授权')
        }
      }
    })
  },
  share: function(){

    wx.showShareMenu({
      withShareTicket: true,
      success(){
        console.log('success')
        wx.getShareInfo({
          shareTicket: '',
          success: function(res){
            console.log(res)
          }
        })
      }
    })
  },
  getCode: function(){

    wx.request({
      path: '/pages/parents/my/my',
      url: 'https://api.weixin.qq.com/wxa/getwxacode?access_token=ACCESS_TOKEN',
      success: function(res){
        console.log(res)
      }
    })
  },
  editCard: function(){
    wx.navigateToMiniProgram({
      appId: 'wx933aa61d2fda8d42',
      extraData: data, // 包括 encrypt_card_id, outer_str, biz三个字段，须从 step3 中获得的链接中获取参数
      success: function (res) {
        console.log('success' + res)
      },
      fail: function (res) {
        console.log('fail' + res)
      }
    })
    wx.openCard({
      cardList: [{cardId:'',code:''}],
      success: function (res) {
        console.log('success' + res)
      },
      fail: function (res) {
        console.log('fail' + res)
      }
    })
    wx.addCard({
      cardList: [
        {
          carId: '',
          cardExt: '{"code": "", "openid": "", "timestamp": "", "signature":""}'
        }
      ],
      success: function(res){
        console.log('success' + res)
      },
      fail: function(res){
        console.log('fail' + res)
      }
    })
  },
  invoiceTitle: function(){
    wx.getSetting({
      success: function (res) {
        console.log(res)
        if (res.authSetting['scope.invoiceTitle']) {
          console.log('getSetting' + res)
          wx.chooseInvoiceTitle({
            success: function (res) {
              console.log(res)
            }
          })
        } else {
          wx.authorize({
            scope: 'scope.invoiceTitle',
            success() {
              wx.run()
            }
          })
          console.log('未授权')
        }
      }
    })
  }
})
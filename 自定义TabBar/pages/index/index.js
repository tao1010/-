//index.js
//获取应用实例
const app = getApp()

Page({
  data: {

  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  clickParent: function(){

    console.log("家长");
    getApp().globalData.userRole = "1"
    wx.redirectTo({
      url: '../parent/parent',
    })
  },
  clickTeacher: function(){

    console.log("教师");
    getApp().globalData.userRole = "2"
    wx.redirectTo({
      url: '../teach/teach',
    })
  },
  clickAdmin: function(){

    console.log("管理");
    getApp().globalData.userRole = "3"
    wx.redirectTo({
      url: '../admin/admin',
    })
  },
  onLoad: function () {
    
  },
  getUserInfo: function(e) {
    console.log(e)
  
  }
})

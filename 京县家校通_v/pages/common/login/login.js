// pages/login/login.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    placeholdername: "请输入学生姓名",
    placeholdernumber: "请输入学生学号",
    hiddenRegister: false,
    password: false,
    inputType: "number"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    if (getApp().globalData.userRole === "1"){
      this.setData({
        placeholdername: "请输入学生姓名",
        placeholdernumber: "请输入学生学号",
        hiddenRegister: false,
        password: false,
        inputType: "number"
      });
      wx.setNavigationBarTitle({
        title: '家长登录',
      })
    }
    if (getApp().globalData.userRole === "2") {
      this.setData({
        placeholdername: "请输入教师账号",
        placeholdernumber: "请输入教师密码",
        hiddenRegister: true,
        password: true,
        inputType: "text"
      }); 
      wx.setNavigationBarTitle({
        title: '教师登录',
      })
    }
    if (getApp().globalData.userRole === "3") {

      this.setData({
        placeholdername: "请输入管理员账号",
        placeholdernumber: "请输入管理员密码",
        hiddenRegister: true,
        password: true,
        inputType: "text"
      });
     
      wx.setNavigationBarTitle({
        title: '管理员登录',
      })
    }
  },
  /**
     * 点击事件
     */
  commitLoginInfo: function () {
    console.log("点击家长登录" + getApp().globalData.userRole)
    if (getApp().globalData.userRole === "1") {
      
      var _curPageArr = getCurrentPages();//获取当前栈数组内容
      var _curPage = _curPageArr[_curPageArr.length - 1];
      var _pagePath = _curPage.__route__;
   
      console.log(app.window);


      wx.switchTab({
        url: '../../parents/my/my',
      })
    }
    if (getApp().globalData.userRole === "2") {
      wx.switchTab({
        url: '../../teacher/my/my',
      })
    }
    if (getApp().globalData.userRole === "3") {
      wx.switchTab({
        url: '../../admin/center/center',
      })
    }
  },
  updateTabbar: function () {

    console.log(getApp().globalData.userRole)
  },
  showRegister: function () {

    wx.navigateTo({
      url: '../register/register',
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
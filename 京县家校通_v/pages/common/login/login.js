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
    inputType: "number",
    first: '',
    second: ''
  },
  /**获取输入框的值
   * 方法一：表单提交,方法二：变量获取
   */
  bindFirstInput: function(e){
    this.setData({
      first: e.detail.value
    })
  },
  bindSecondInput: function (e) {
    this.setData({
      second: e.detail.value
    })
  },
  //点击事件
  commitLoginInfo: function () {

    console.log('1212'+ this.first)
    console.log('1231' + this.second)

    console.log("点击家长登录" + getApp().globalData.userRole)
    if (getApp().globalData.userRole === "1") {

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
  showRegister: function () {

    wx.navigateTo({
      url: '../register/register',
    })
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
  }
})
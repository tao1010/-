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
    second: '',
    
    canIUse: wx.canIUse('button.open-type.getUserInfo')
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

    //appid : wx933aa61d2fda8d42
    wx.login({
      success: function(res){
        console.log(res)
        if(res.code){
          console.log('code:' + res.code)
        }
        wx.checkSession({
          success: function(res){
            console.log(res)
          },
          fail: function (res){
            console.log(res)
          }
        })
      }
    })
   
    

    // return;
    console.log("登录角色:"+ getApp().globalData.userRole)
    if (getApp().globalData.userRole === "1") {

      wx.switchTab({
        // url: '../../parents/my/my',
        url:'../home/home',
      })
    }
    if (getApp().globalData.userRole === "2") {
      wx.switchTab({
        // url: '../../teacher/my/my',
        url: '../home/home',
        // url: '../../parents/my/my',
      })
    }
    if (getApp().globalData.userRole === "3") {
      wx.switchTab({
        // url: '../../admin/center/center',
        url: '../home/home',
        // url: '../../parents/my/my',
      })
    }
  },
  auth: function(){
  
    wx.getUserInfo({
      success: function (res) {

        console.log('UserInfo:' + res)
      }
    }),
    wx.getSetting({
      success: function(res){
        console.log(res)
      }
    }),
    wx.openSetting({
      success: function (res) {
        console.log(res)
      }
    }),
    wx.authorize({
      scope: '',
      success: function(res){
        console.log(res)
      }
    })

  },
  showRegister: function () {

    wx.navigateTo({
      url: '../register/register',
    })
  },

  bindGetUserInfo: function (e) {
    console.log(e.detail.userInfo)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    wx.getSetting({
      success: function(res){
        console.log(res)
        if(res.authSetting['scope.useInfo']){
          wx.getUserInfo({
            success: function (res){
              console.log(res.userInfo)
            }
          })
        }
      }
    })
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
  onShareAppMessage: function(){
    if (res.from === 'menu') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '自定义转发标题',
      path: '/pages/login/login',
      imageUrl: '/pages/images/bd.png'
    }

  }
})
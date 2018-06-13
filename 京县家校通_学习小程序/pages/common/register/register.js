// pages/common/register/register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    studentName: '',
    studentNumber: '',
    yourName: '',
    yourTel: '',
    relationship: ''
  },
  // 传值
  studentName: function (e) {
    this.setData({
      studentName: e.detail.value
    })
  },
  studentNumber: function(e){
    this.setData({
      studentNumber: e.detail.valur
    })
  },
  showLogin:function(){
    wx.navigateBack({
      
    })
  },
  commitBind: function (e) {

    console.log(studentName + studentNumber);
    wx.switchTab({
      url: '../../parents/my/my',
    })
  }
})
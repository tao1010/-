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

    wx.showModal({
      title: '温馨提示',
      content: '请输入账号',
      success: function(res){

        if(res.confirm){
          wx.switchTab({
            // url: '../../parents/my/my',
            url: '../home/home',
          })
        }else if(res.cancel){
          console.log('点击了取消')
        }
      }
    })
  }
})
// pages/common/home/home.js
// const app = getApp()
// var template = require('../../remplate/customTabbar.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {

    city: ''
  },
  bindCity: function(e){
    this.setData({
      city: e.detail.value
    })
  },
  startRuest: function(){

    wx.request({
      url: 'http://op.juhe.cn/onebox/weather/query',
      data: {
        'x': 'cityname=%E6%88%90%E9%83%BD&dtype=&key=69e9d363d843b615bb95efed68c14fd0'
      },
      header: {
        'content-type': 'appliication/json'
      },
      success: function(res){
        console.log(res.data)
      }
    })

  }

})
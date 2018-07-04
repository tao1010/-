// pages/common/home/home.js
// const app = getApp()
// var template = require('../../remplate/customTabbar.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {

    banners:[      
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    itemTitle: ['学校简介','名师风采','学生成绩','消费情况'],
    itemImages: [

      '../../images/parents/school.png',
      '../../images/parents/teacher.png',
      '../../images/parents/score.png',
      '../../images/parents/sales.png'
    ],
    randColor: '#12320131',
    role: 0
  },
  onLoad: function(options){

    // if (getApp().globalData.userRole === "1") {
    //   role = 1;
    //   wx.setNavigationBarTitle({
    //     title: '学校-家长端',
    //   })
      
    // }else
    // if (getApp().globalData.userRole === "2") {
    //   role = 2;
    //   wx.setNavigationBarTitle({
    //     title: '学校-教师端',
    //   })
    // }else
    // if (getApp().globalData.userRole === "3") {
    //   role = 3;
    //   wx.setNavigationBarTitle({
    //     title: '学校-管理员端',
    //   })
    // }
    
  }, 
  // 点击事件
  clickSchool: function(){
    console.log('学校简介')
    wx.navigateTo({
      url: '../schoolintroduce/schoolintroduce',
    })
  },
  clickTeacher: function () {
    console.log('名师风采')
    wx.navigateTo({
      url: '../famousteacher/famousteacher',
    })
  },
  clickStudent: function () {
    console.log('学生成绩')
    wx.navigateTo({
      url: '../../parents/score/score',
    })
  },
  clickCost: function () {
    console.log('消费记录')
    wx.navigateTo({
      url: '../../parents/costrecord/costrecord',
    })
  },
  hello: function(){

    console.log('。。。。')
    wx.navigateTo({
      url: '../../parents/score/score',
    })
  }
})
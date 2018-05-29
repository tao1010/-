// pages/parents/animation/animation.js
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

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    //创建实例对象animation
    this.animation = wx.createAnimation()
  },
  //旋转
  rotate: function () {

    //从原点顺时针旋转一个deg角度
    // this.animation.rotate(Math.random() * 720 - 360).step()
    //在X轴旋转一个deg角度
    this.animation.rotateX(Math.random() * 720 - 360).step()
    //在Y轴旋转一个deg角度
    // this.animation.rotateY(Math.random() * 720 - 360).step()
    //在Z轴旋转一个deg角度  
    // this.animation.rotateZ(Math.random() * 720 - 360).step()
    //在3d轴旋转一个deg角度
    // this.animation.rotate3d(10,10,10,Math.random() * 720 - 360).step()
    this.setData({
      animation: this.animation.export()
    })
  },
  //缩放
  scale: function () {

    //一个参数表示在x，y轴同时缩放sx倍
    // this.animation.scale(Math.random()*2).step()
    //两个参数时表示在X轴缩放sx倍数，在Y轴缩放sy倍数
    // this.animation.scale(Math.random() * 2, [Math.random() * 3]).step()
    //在X轴缩放
    this.animation.scaleX(Math.random() * 2).step()
    //在Y轴缩放
    // this.animation.scaleY(Math.random() * 2).step()
    //在Z轴缩放
    // this.animation.scaleZ(Math.random() * 2).step()
    //3d缩放(sx,sy,sz)
    // this.animation.scale3d(Math.random() * 1, Math.random() * 2, Math.random() * 3).step()
    this.setData({
      animation: this.animation.export()
    })
  },
  //偏移
  translate: function () {
    //一个参数表示在X，Y轴同时偏移tx
    // this.animation.translate(Math.random() * 100 - 50).step()
    //两个参数表示在X，Y轴分别偏移tx，ty
    // this.animation.translate(Math.random() * 100 - 50, Math.random() * 100 - 80).step()
    //在X轴移动
    this.animation.translateX(Math.random() * 100 - 50).step()
    //在Y轴移动
    // this.animation.translateY(Math.random() * 100 - 50).step()
    //在Z轴移动
    // this.animation.translateZ(Math.random() * 100 - 50).step()
    //在3d移动
    // this.animation.translate3d(Math.random() * 100 - 50, Math.random() * 100 - 60, Math.random() * 100 - 70).step()
    this.setData({
      animation: this.animation.export()
    })
  },
  //倾斜
  skew: function () {

    //一个参数，Y轴不变，X轴在沿顺时针方向倾斜ax度
    // this.animation.skew(Math.random() * 90).step()
    //两个参数，分别在X轴倾斜ax度，在Y轴倾斜ay度
    // this.animation.skew(Math.random() * 90,Math.random() * 45).step()
    //在X轴倾斜ax度
    this.animation.skewX(Math.random() * 90).step()
    //在Y轴倾斜ay度
    // this.animation.skewY(Math.random() * 90).step()
    this.setData({
      animation: this.animation.export()
    })
  },
  //旋转并缩放
  rotateAndScale: function () {
    this.animation.rotate(Math.random() * 720 - 360)
      .scale(Math.random() * 2)
      .step()
    this.setData({
      animation: this.animation.export()
    })
  },
  //旋转后缩放
  rotateThenScale: function () {

    this.animation.rotate(Math.random() * 720 - 360).step()
      .scale(Math.random() * 2).step()
    this.setData({
      animation: this.animation.export()
    })
  },
  //同时展示全部
  all: function () {
    this.animation.rotate(Math.random() * 720 - 360)
      .scale(Math.random() * 2)
      .translate(Math.random() * 100 - 50, Math.random() * 100 - 50)
      .skew(Math.random() * 90, Math.random() * 90)
      .step()
    this.setData({
      animation: this.animation.export()
    })
  },
  //顺序展示全部
  allInQueue: function () {
    this.animation.rotate(Math.random() * 720 - 360).step()
      .scale(Math.random() * 2).step()
      .translate(Math.random() * 100 - 50, Math.random() * 100 - 50).step()
      .skew(Math.random() * 90, Math.random() * 90).step()
    this.setData({
      animation: this.animation.export()
    })
    //下拉刷新
    wx.startPullDownRefresh()
  },
  //重置动画
  reset: function () {
    //滚动到指定位置
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 1000
    })
    //停止下拉刷新
    wx.stopPullDownRefresh()

    //重置动画
    this.animation.rotate(0, 0)
      .scale(1)
      .translate(0, 0)
      .skew(0, 0)
      .step({
        duration: 1000
      })
    this.setData({
      animation: this.animation.export()
    })
  }
})
// pages/parents/canvas/canvas.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    x: 0,
    y: 0,
    hidden:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    const ctx = wx.createCanvasContext('myCanvas', this)

    //渐变色
    // const grd = ctx.createLinearGradient(0, 0, 200, 0)
    // grd.addColorStop(0,'red')
    // grd.addColorStop(1,'white')
    // ctx.setFillStyle(grd)

    // // ctx.setFillStyle('red')//设置填充样式
    // ctx.fillRect(10,10,150,75)//填充一个矩形

    // ctx.beginPath()
    // ctx.moveTo(10, 10)
    // ctx.lineTo(150, 10)
    // ctx.stroke()

    // ctx.beginPath()
    // ctx.setLineCap('butt')
    // ctx.setLineWidth(5)
    // ctx.moveTo(10, 30)
    // ctx.lineTo(150, 30)
    // ctx.stroke()

    // ctx.beginPath()
    // ctx.setLineCap('round')
    // ctx.setLineWidth(10)
    // ctx.moveTo(10, 50)
    // ctx.lineTo(150, 50)
    // ctx.stroke()

    // ctx.beginPath()
    // ctx.setLineCap('square')
    // ctx.setLineWidth(15)
    // ctx.moveTo(10, 70)
    // ctx.lineTo(150, 70)
    // ctx.stroke()

    // ctx.beginPath()
    // ctx.moveTo(10, 10)
    // ctx.lineTo(100, 50)
    // ctx.lineTo(10, 90)
    // ctx.stroke()

    // ctx.beginPath()
    // ctx.setLineJoin('bevel')
    // ctx.setLineWidth(10)
    // ctx.moveTo(50, 10)
    // ctx.lineTo(140, 50)
    // ctx.lineTo(50, 90)
    // ctx.stroke()

    // ctx.beginPath()
    // ctx.setLineJoin('round')
    // ctx.setLineWidth(10)
    // ctx.moveTo(90, 10)
    // ctx.lineTo(180, 50)
    // ctx.lineTo(90, 90)
    // ctx.stroke()

    // ctx.beginPath()
    // ctx.setLineJoin('miter')
    // ctx.setLineWidth(10)
    // ctx.moveTo(130, 10)
    // ctx.lineTo(220, 50)
    // ctx.lineTo(130, 90)
    // ctx.stroke()

    // ctx.setLineDash([10, 50], 0);

    // ctx.beginPath();
    // ctx.moveTo(0, 100);
    // ctx.lineTo(400, 100);
    // ctx.stroke();

    // ctx.beginPath()
    // ctx.setLineWidth(10)
    // ctx.setLineJoin('miter')
    // ctx.setMiterLimit(1)
    // ctx.moveTo(10, 10)
    // ctx.lineTo(100, 50)
    // ctx.lineTo(10, 90)
    // ctx.stroke()

    // ctx.beginPath()
    // ctx.setLineWidth(10)
    // ctx.setLineJoin('miter')
    // ctx.setMiterLimit(2)
    // ctx.moveTo(50, 10)
    // ctx.lineTo(140, 50)
    // ctx.lineTo(50, 90)
    // ctx.stroke()

    // ctx.beginPath()
    // ctx.setLineWidth(10)
    // ctx.setLineJoin('miter')
    // ctx.setMiterLimit(3)
    // ctx.moveTo(90, 10)
    // ctx.lineTo(180, 50)
    // ctx.lineTo(90, 90)
    // ctx.stroke()

    // ctx.beginPath()
    // ctx.setLineWidth(10)
    // ctx.setLineJoin('miter')
    // ctx.setMiterLimit(4)
    // ctx.moveTo(130, 10)
    // ctx.lineTo(220, 50)
    // ctx.lineTo(130, 90)
    // ctx.stroke()


    // ctx.moveTo(10,10)
    // ctx.lineTo(100,10)
    // ctx.lineTo(100,100)
    // // ctx.fill()
    // ctx.closePath()
    // ctx.stroke()


  },

  //旋转
  roatate: function () {

    const ctx = wx.createCanvasContext('myCanvas', this)
    ctx.strokeRect(100, 10, 150, 100)
    ctx.rotate(20 * Math.PI / 180)
    ctx.strokeRect(100, 10, 150, 100)
    ctx.rotate(20 * Math.PI / 180)
    ctx.strokeRect(100, 10, 150, 100)
    ctx.draw()
  },
  //缩放
  scale: function(){

    const ctx = wx.createCanvasContext('myCanvas', this)
    ctx.strokeRect(10, 10, 25, 15)
    ctx.scale(2, 2)
    ctx.strokeRect(10, 10, 25, 15)
    ctx.scale(2, 2)
    ctx.strokeRect(10, 10, 25, 15)

    ctx.draw()
  },
  //贝塞尔曲线
  quadraticCurve: function(){
    const ctx = wx.createCanvasContext('myCanvas')

    // Draw points
    ctx.beginPath()
    ctx.arc(20, 20, 2, 0, 2 * Math.PI)
    ctx.setFillStyle('red')
    ctx.fill()

    ctx.beginPath()
    ctx.arc(200, 20, 2, 0, 2 * Math.PI)
    ctx.setFillStyle('lightgreen')
    ctx.fill()

    ctx.beginPath()
    ctx.arc(20, 100, 2, 0, 2 * Math.PI)
    ctx.setFillStyle('blue')
    ctx.fill()

    ctx.setFillStyle('black')
    ctx.setFontSize(12)

    // Draw guides
    ctx.beginPath()
    ctx.moveTo(20, 20)
    ctx.lineTo(20, 100)
    ctx.lineTo(200, 20)
    ctx.setStrokeStyle('#AAAAAA')
    ctx.stroke()

    // Draw quadratic curve
    ctx.beginPath()
    ctx.moveTo(20, 20)
    ctx.quadraticCurveTo(20, 100, 200, 20)
    ctx.setStrokeStyle('black')
    ctx.stroke()

    ctx.draw()
  },
  //三次贝塞尔曲线
  bezierCurve: function(){
    const ctx = wx.createCanvasContext('myCanvas')

    // Draw points
    ctx.beginPath()
    ctx.arc(20, 20, 2, 0, 2 * Math.PI)
    ctx.setFillStyle('red')
    ctx.fill()

    ctx.beginPath()
    ctx.arc(200, 20, 2, 0, 2 * Math.PI)
    ctx.setFillStyle('lightgreen')
    ctx.fill()

    ctx.beginPath()
    ctx.arc(20, 100, 2, 0, 2 * Math.PI)
    ctx.arc(200, 100, 2, 0, 2 * Math.PI)
    ctx.setFillStyle('blue')
    ctx.fill()

    ctx.setFillStyle('black')
    ctx.setFontSize(12)

    // Draw guides
    ctx.beginPath()
    ctx.moveTo(20, 20)
    ctx.lineTo(20, 100)
    ctx.lineTo(150, 75)

    ctx.moveTo(200, 20)
    ctx.lineTo(200, 100)
    ctx.lineTo(70, 75)
    ctx.setStrokeStyle('#AAAAAA')
    ctx.stroke()

    // Draw quadratic curve
    ctx.beginPath()
    ctx.moveTo(20, 20)
    ctx.bezierCurveTo(20, 100, 200, 100, 200, 20)
    ctx.setStrokeStyle('black')
    ctx.stroke()

    ctx.draw()
  },
  //偏移
  translate: function(){
    const ctx = wx.createCanvasContext('myCanvas')
    ctx.strokeRect(10, 10, 150, 100)
    ctx.translate(20, 20)
    ctx.strokeRect(10, 10, 150, 100)
    ctx.translate(20, 20)
    ctx.strokeRect(10, 10, 150, 100)

    ctx.draw()
  },
  //裁剪
  clip: function(){
    const ctx = wx.createCanvasContext('myCanvas')

    wx.downloadFile({
      url: 'http://is5.mzstatic.com/image/thumb/Purple128/v4/75/3b/90/753b907c-b7fb-5877-215a-759bd73691a4/source/50x50bb.jpg',
      success: function (res) {
        ctx.save()
        ctx.beginPath()
        ctx.arc(50, 50, 25, 0, 2 * Math.PI)
        ctx.clip()
        ctx.drawImage(res.tempFilePath, 25, 25)
        ctx.restore()
        ctx.draw()
      }
    })
  },
  fontSize: function(){
    const ctx = wx.createCanvasContext('myCanvas')

    ctx.setFontSize(20)
    ctx.fillText('20', 20, 20)
    ctx.setFontSize(30)
    ctx.fillText('30', 40, 40)
    ctx.setFontSize(40)
    ctx.fillText('40', 60, 60)
    ctx.setFontSize(50)
    ctx.fillText('50', 90, 90)

    ctx.draw()
  },


  //开始触摸
  touchstart: function(e){

    // this.roatate();
    // this.scale();
    // this.quadraticCurve();
    // this.bezierCurve();
    // this.translate();
    // this.clip();
    this.fontSize();
    this.setData({
      hidden: false,
      x: e.touches[0].x,
      y: e.touches[0].y
    })
  },
  //触摸移动
  touchmove: function(e){
    this.setData({
      hidden: false,
      x: e.touches[0].x,
      y: e.touches[0].y
    })
  },

  //触摸结束
  touchend: function(e){
    this.setData({
      hidden: true
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


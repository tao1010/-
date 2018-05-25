// pages/common/contact/contact.js
const recorderManager = wx.getRecorderManager()
const options = {
  duration: 10000,
  sampleRate: 44100,
  numberOfChannels: 1,
  encodeBitRate: 192000,
  format: 'aac',
  frameSize: 50
}

Page({

  /**
   * 页面的初始数据
   */
  data: {

    mapCtx: null,
    longitude: 104.0805566311,
    latitude: 30.6546420303,
    scale: 16,
    width: 375,
    height: 300,
    //标记点用于在地图上显示标记的位置
    markers: [{
    //   iconPath: "../../images/class/love-sel.png",
    //   id: 0,
    //   latitude: 23.099994,
    //   longitude: 113.324520,
    //   width: 50,
    //   height: 50
    }],
    //指定一系列坐标系(从数组的第一项连线到最后一项)
    polyline: [{
      points: [{
        longitude: 104.0797895193,
        latitude: 30.6542497737,
      },{
        longitude: 104.0816885233,
        latitude: 30.6531329875,
        },{
        longitude: 104.0829277039, 
        latitude: 30.6549973672 
      }, { 
        longitude: 104.0823912621, 
        latitude: 30.6552973260 
      }, { 
        longitude: 104.0824180841, 
        latitude: 30.6555234481
      }, {
        longitude: 104.0823161602,
        latitude: 30.6558187904,
      },
      {
        longitude: 104.0824288130,
        latitude: 30.6560264525,
      },{
        longitude: 104.0813398361,
        latitude: 30.6564833075,
      }, {
        longitude: 104.0797573328,
        latitude: 30.6542774625,
      }
      ],
      color: "#FF0000DD",
      width: 4,
      dottedLine: true
    }],
    //指定一系列坐标系(从数组的第一项连线到最后一项)
    // controls: [{
    //   id: 1,
    //   iconPath: '../../images/class/love-sel.png',
    //   position: {
    //     left: 0,
    //     top: 300 - 50,
    //     width: 50,
    //     height: 50
    //   },
    //   clickable: true
    // }]
  },
   /**
   * 生命周期函数--监听页面加载
   */
  onload: function(options){

    //获取当前的地理位置，速度
    wx.getLocation({
      success: function (res) {
        
        longitude = res.longitude
        latitude = res.latitude
        console.log('速度:' + res.speed)
        console.log('精度:' + res.latitude)
      },
    });
    mapCtx.moveToLocation();
  },
  /**
  * 生命周期函数--监听页面初次渲染完成
  */
  onReady: function () {

    console.log('map...');
    this.mapCtx = wx.createMapContext('map');
  },

  startRecord: function(){
    
    recorderManager.start(options);
  },
  stopRecord: function(){

    recorderManager.stop();
  },

  longtap: function(e){

    var self = this;
    console.log(123, e)
    // 缩放
    self.mapCtx.getScale({
      success: function (res) {
        // 视野范围
        self.mapCtx.getRegion({
          success: function (res2) {
            t(res.scale, res2.southwest, res2.northeast);
          }
        });
      }
    }),
  /**
     * 画图
     * 以左下脚为坐标系原点
     * 
     * x 相对于元素的x
     * y 相对于元素的y
     * longitudeArea 经度范围
     * latitudeArea 维度范围
     * scale 缩放比例
     * southwest 西南角的坐标
     * northeast 东北角的坐标
     * logUnits 一单位经度/width
     * latUnits 一单位维度/height
     * log 长按经度
     * lat 长按维度
     */
  function t(scale, southwest, northeast) {
    var x = e.detail.x;
    var y = e.target.dataset.height - e.detail.y;
    console.log('x' + x, 'y' + y);
    var longitudeArea = northeast.longitude - southwest.longitude;
    var latitudeArea = northeast.latitude - southwest.latitude;
    console.log('scale', scale);   
    console.log(`范围: 西南角${JSON.stringify(southwest)} 东北角${JSON.stringify(northeast)}`);
    console.log(`范围：经度${longitudeArea} 维度${latitudeArea}`);  
    var logUnits = longitudeArea / e.target.dataset.width;
    var latUnits = latitudeArea / e.target.dataset.height;
    console.log(`1单位经度${logUnits}`)
      console.log(`1单位维度${latUnits}`)
      var log = logUnits * x + southwest.longitude;
    var lat = latUnits * y + southwest.latitude;
    console.log('点击经度' + log);
    console.log('点击维度' + lat);
    test(southwest, northeast, log, lat);
  }

    // 测试
    function test(southwest, northeast, log, lat) {
    var list = [/*southwest, northeast,*/ {
      longitude: log,
      latitude: lat
    }];
    var markers = self.data.markers;
    var i = list.length;
    while (i--) {
      var item = list[i];
      var newLength = markers.push({
        id: 0,
        latitude: item.latitude,
        longitude: item.longitude,
        width: 50,
        height: 50
      });
      markers[newLength - 1].id = newLength
    }
    self.setData({
      markers: markers
    });
  }
  },


  bindregionchange: function(){

    console.log('视野发生变化时触发...')
  },
  bindcallouttap: function(){

    console.log('点击标记点对应的气泡时触发...')
  },
  bindtap: function(){

    console.log('点击地图时触发...')
  },
  bindupdated: function(){

    console.log('在地图渲染更新完成时触发...')
  },
  bindcontroltap: function(){

    console.log('点击控件时触发...')
  },
  bindmarkertap: function(){

    console.log('点击标记点时触发...')
  },
  

})
recorderManager.onStart(() => {
  console.log('recorder start')
})
recorderManager.onStop((res) => {
  console.log('recorder stop', res)
  const { tempFilePath } = res
})
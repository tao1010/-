// pages/parents/device/device.js
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
  getSystemInfo: function(){

    // wx.getSystemInfo({
    //   success: function(res) {
    //     console.log(res)
    //   },
    // })
    try{
      var res = wx.getSystemInfoSync()
      console.log(res)
    }catch(e){
      console.log(e)
    }
  },
  caniUse: function(){

    if (wx.canIUse('openBluetoothAdapter')){
      console.log('I can')
    }else{
      console.log("You can't")
    }
  },
  networkingStatus: function(){
    wx.getNetworkType({
      success: function(res) {
        console.log(res)
      },
    })
    wx.onNetworkStatusChange(function(res){
      console.log(res)
    })
  },
  vibrateLong: function(){
    wx.vibrateLong({
      
      success: function(res){
          console.log('手机长振动了')
          
          wx.onUserCaptureScreen(function(res){
            
            console.log('用户截屏了：' + res)
          })
      }
    })
  },
  screenBrightness: function(){

    wx.setScreenBrightness({
      value: 1,
      success: function(res){
        console.log(res)
      }
    })

    wx.getScreenBrightness({

      success: function(res){
        console.log(res)

      }    
    })
  },
  phone: function(){
    wx.makePhoneCall({
      phoneNumber: '17629283930',
      success: function(res){
        console.log(res)
      }
    })
  },
  scanCode: function(){
    //允许相册和相机扫描
    wx.scanCode({
      success: function(res){
        console.log(res)
      }
    })
    //只允许相机
    wx.scanCode({
      onlyFromCamera: true,
      success: function(res){
        console.log(res)
      }
      
    })
  },
  clipBoard: function(){

    //获取剪贴板的内容
    wx.getClipboardData({
      success: function(res){
        console.log(res)
      }
    })
    //设置剪贴板的内容
    wx.setClipboardData({
      data: '设置剪贴板内容...',
      success: function(res){
        console.log(res)
      }
    })
  },
  contact: function(){
    wx.addPhoneContact({
      firstName: 'AAAAAA',
      mobilePhoneNumber: '10086',
      success: function(res){
        console.log(res)
      }
    })
  },
  wifi: function(){
    wx.startWifi({
      success: function(res){
        console.log('success:' + res)
      },
      fail: function(res){
        console.log('fail:' + res)
      },
      complete: function(res){
        console.log('complete:' + res)
      }
    }),
    wx.stopWifi({
      success: function (res) {
        console.log('success:' + res)
      },
      fail: function (res) {
        console.log('fail:' + res)
      },
      complete: function (res) {
        console.log('complete:' + res)
      }
    }),
    wx.onGetWifiList(function(res){
      console.log('onGetWifiList:' + res)
    }),
    wx.getWifiList({
      success: function (res) {
        console.log('success:' + res)
      },
      fail: function (res) {
        console.log('fail:' + res)
      },
      complete: function (res) {
        console.log('complete:' + res)
      }
    }),
    wx.onWifiConnected(function(res){
      console.log('onWifiConnected:' + res)
    }),
    wx.getConnectedWifi({
      success: function (res) {
        console.log('success:' + res)
      },
      fail: function (res) {
        console.log('fail:' + res)
      },
      complete: function (res) {
        console.log('complete:' + res)
      }
    }),
    // wx.getHCEState({
    //   success: function (res) {
    //     console.log('success:' + res)
    //   },
    //   complete: function (res) {
    //     console.log('complete:' + res)
    //   }
    // })
    wx.connectWifi({
      SSID: '',
      BSSID: '',
      success: function (res) {
        console.log('connectWifi - success:' + res)
      },
      fail: function (res) {
        console.log('connectWifi - fail:' + res)
      },
      complete: function (res) {
        console.log('connectWifi - complete:' + res)
      }
    })
  },
  accelerometer: function(){

      wx.stopAccelerometer({
        success: function (res) {
          console.log(res)
        }
      }),
      wx.startAccelerometer({
        success: function (res) {
          console.log(res)
        }
      }),
      wx.onAccelerometerChange(function(res){
        console.log(res)
      })
  },
  compass: function(){

    wx.stopCompass({
      success: function(res){
        console.log(res)
      }
    }),

    wx.startCompass({
      success: function (res) {
        console.log(res)
      }
    }),
    
    wx.onCompassChange(function (res) {
      console.log(res)
    })
  },
  ibeacon: function(){

    wx.startBeaconDiscovery({
      uuids: ["28287f6952aaa389e57a884342019129db67c0df"],
      success: function(res){
        console.log(res)
      },
      complete: function(res){
        console.log(res)
      }
    }),
    wx.stopBeaconDiscovery({
      complete: function(res){
        console.log(res)
      }
    }),
    wx.getBeacons({
      success: function (res) {
        console.log('success:' + res)
      },
      fail: function (res) {
        console.log('fail:' + res)
      },
      complete: function (res) {
        console.log('complete:' + res)
      }
    }),
    wx.onBeaconUpdate(function(res){
      console.log(res)
    }),
    wx.onBeaconServiceChange(function(res){
      console.log(res)
    })
  },
  hce: function(){

    wx.getHCEState({
      success: function (res) {
        console.log('success:' + res)
      },
      fail: function (res) {
        console.log('fail:' + res)
      },
      complete: function (res) {
        console.log('complete:' + res)
      }
    }),
    wx.startHCE({
      aid_list: [''],
      success: function (res) {
        console.log('success:' + res)
      },
      fail: function (res) {
        console.log('fail:' + res)
      },
      complete: function (res) {
        console.log('complete:' + res)
      }
    }),
    wx.stopHCE({
      success: function (res) {
        console.log('success:' + res)
      },
      fail: function (res) {
        console.log('fail:' + res)
      },
      complete: function (res) {
        console.log('complete:' + res)
      }
    }),
    wx.onHCEMessage(function(res){
      console.log(res)
    }),
    wx.sendHCEMessage({
      data: ['dasdadasfafd'],
      success: function (res) {
        console.log('success:' + res)
      },
      fail: function (res) {
        console.log('fail:' + res)
      },
      complete: function (res) {
        console.log('complete:' + res)
      }
    })
  },
  bluetooth:function(){
    wx.openBluetoothAdapter({
      success: function(res) {
        console.log(res)
      }
    }),
    wx.closeBluetoothAdapter({
      success: function(res) {
        console.log(res)
      },
    }),
    wx.getBluetoothAdapterState({
      success: function(res) {
        console.log(res)
      },
    }),
    wx.onBluetoothAdapterStateChange(function(res){
      console.log(res)
    }),
    wx.startBluetoothDevicesDiscovery({
      success: function(res) {
        console.log(res)
      },
      complete: function(res){
        console.log(res)
      }
    }),
    wx.stopBluetoothDevicesDiscovery({
      success: function (res) {
        console.log(res)
      },
      complete: function (res) {
        console.log(res)
      }
    }),
    wx.getBluetoothDevices({
      success: function (res) {
        console.log(res)
      },
      complete: function (res) {
        console.log(res)
      }
    }),
    wx.onBluetoothDeviceFound(function(res){
      console.log(res)
    }),
    wx.getConnectedBluetoothDevices({
      services: [''],
      success: function(res) {
        console.log(res)
      },
      complete: function(res){
        console.log(res)
      }
    }),
    wx.createBLEConnection({
      deviceId: 'xxx',
      success: function(res) {
        console.log(res)
      },
    })

  }
})



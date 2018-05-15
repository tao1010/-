//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    userRole: "-1",
    tabBarParent: {
      "color": "#6e6d6b",
      "selectedColor": "#33cbd5",
      "postion": "bottom",
      "backgroundColor": "#fff",
      "borderStyle": "#ccc",
      "list": [
        {
          "pagePath": "/pages/home/home",
          "text": "学校",
          "iconPath": "/pages/images/home.png",
          "selectedIconPath": "/pages/images/home-sel.png",
          // "selectedColor": "#33cbd5",
          "clas": "menu-item",
          active: false
        },
        {
          "pagePath": "/pages/contact/contact",
          "text": "通讯录",
          "iconPath": "/pages/images/contact.png",
          "selectedIconPath": "/pages/images/contact-sel.png",
          // "selectedColor": "#33cbd5",
          "clas": "menu-item",
          active: false
        },
        {
          "pagePath": "/pages/news/news",
          "text": "班级圈",
          "iconPath": "/pages/images/class.png",
          "selectedIconPath": "/pages/images/class-sel.png",
          // "selectedColor": "#33cbd5",
          "clas": "menu-item",
          active: false
        },
        {
          "pagePath": "/pages/parent/parent",
          "text": "我的",
          "iconPath": "/pages/images/my.png",
          "selectedIconPath": "/pages/images/my-sel.png",
          // "selectedColor": "#33cbd5",
          "clas": "menu-item",
          active: false
        }
      ]
    },
    tabBarTeacher: {
      "color": "#6e6d6b",
      "selectedColor": "#33cbd5",
      "postion": "bottom",
      "backgroundColor": "#fff",
      "borderStyle": "#ccc",
      "list": [
        {
          "pagePath": "/pages/home/home",
          "text": "学校",
          "iconPath": "/pages/images/home.png",
          "selectedIconPath": "/pages/images/home-sel.png",
          // "selectedColor": "#33cbd5",
          "clas": "menu-item",
          active: false
        },
        {
          "pagePath": "/pages/contact/contact",
          "text": "通讯录",
          "iconPath": "/pages/images/contact.png",
          "selectedIconPath": "/pages/images/contact-sel.png",
          // "selectedColor": "#33cbd5",
          "clas": "menu-item",
          active: false
        },
        {
          "pagePath": "/pages/news/news",
          "text": "班级圈",
          "iconPath": "/pages/images/class.png",
          "selectedIconPath": "/pages/images/class-sel.png",
          // "selectedColor": "#33cbd5",
          "clas": "menu-item",
          active: false
        },
        {
          "pagePath": "/pages/teach/teach",
          "text": "教师",
          "iconPath": "/pages/images/my.png",
          "selectedIconPath": "/pages/images/my-sel.png",
          // "selectedColor": "#33cbd5",
          "clas": "menu-item",
          active: false
        }
      ]
    },
    tabBarAdmin: {
      "color": "#6e6d6b",
      "selectedColor": "#33cbd5",
      "postion": "bottom",
      "backgroundColor": "#fff",
      "borderStyle": "#ccc",
      "list": [
        {
          "pagePath": "/pages/home/home",
          "text": "学校",
          "iconPath": "/pages/images/home.png",
          "selectedIconPath": "/pages/images/home-sel.png",
          // "selectedColor": "#33cbd5",
          "clas": "menu-item",
          active: false
        },
        {
          "pagePath": "/pages/contact/contact",
          "text": "信箱",
          "iconPath": "/pages/images/contact.png",
          "selectedIconPath": "/pages/images/contact-sel.png",
          // "selectedColor": "#33cbd5",
          "clas": "menu-item",
          active: false
        },
        {
          "pagePath": "/pages/news/news",
          "text": "公告",
          "iconPath": "/pages/images/class.png",
          "selectedIconPath": "/pages/images/class-sel.png",
          // "selectedColor": "#33cbd5",
          "clas": "menu-item",
          active: false
        },
        {
          "pagePath": "/pages/admin/admin",
          "text": "中心",
          "iconPath": "/pages/images/my.png",
          "selectedIconPath": "/pages/images/my-sel.png",
          // "selectedColor": "#33cbd5",
          "clas": "menu-item",
          active: false
        }
      ]
    }
  }, 
  //家长端 
  updateTabBarWithParent: function () {
    var _curPageArr = getCurrentPages();
    var _curPage = _curPageArr[_curPageArr.length - 1];
    var _pagePath = _curPage.__route__;
    if (_pagePath.indexOf('/') != 0) {
      _pagePath = '/' + _pagePath;
    }
    var tabBar = this.globalData.tabBarParent;
    for (var i = 0; i < tabBar.list.length; i++) {
      tabBar.list[i].active = false;
      if (tabBar.list[i].pagePath == _pagePath) {
        tabBar.list[i].active = true;//根据页面地址设置当前页面状态    
      }
    }
    _curPage.setData({
      tabBar: tabBar
    });
  },
  //教师端 
  updateTabBarWithTeacher: function () {
    var _curPageArr = getCurrentPages();
    var _curPage = _curPageArr[_curPageArr.length - 1];
    var _pagePath = _curPage.__route__;
    if (_pagePath.indexOf('/') != 0) {
      _pagePath = '/' + _pagePath;
    }
    var tabBar = this.globalData.tabBarTeacher;
    for (var i = 0; i < tabBar.list.length; i++) {
      tabBar.list[i].active = false;
      if (tabBar.list[i].pagePath == _pagePath) {
        tabBar.list[i].active = true;//根据页面地址设置当前页面状态    
      }
    }
    _curPage.setData({
      tabBar: tabBar
    });
  },
   //管理中心  
  updateTabBarWithAdmin: function () {
    var _curPageArr = getCurrentPages();
    var _curPage = _curPageArr[_curPageArr.length - 1];
    var _pagePath = _curPage.__route__;
    if (_pagePath.indexOf('/') != 0) {
      _pagePath = '/' + _pagePath;
    }
    var tabBar = this.globalData.tabBarAdmin;
    for (var i = 0; i < tabBar.list.length; i++) {
      tabBar.list[i].active = false;
      if (tabBar.list[i].pagePath == _pagePath) {
        tabBar.list[i].active = true;//根据页面地址设置当前页面状态    
      }
    }
    _curPage.setData({
      tabBar: tabBar
    });
  }
})
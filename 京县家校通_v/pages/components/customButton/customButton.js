// pages/components/customButton/customButton.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

    title: {
      type: String,
      value: '教师姓名'
    },
    src: {
      type: String,
      value: '图片资源地址'
    }
    // customButton: {
      
      // customButtonTitle: String,
      // customButtonImage: Object,
      // src: String,//图片资源
      // title: String,//按钮标题
    // }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    
    clickButton: function(){
      this.triggerEvent('clickButton');
    }
    // clickButton: function(){
    //   var myEventDetail = {}
    //   var myEventOption = {}
    //   this.triggerEvent('myevent', myEventDetail, myEventOption)

    // }
  } 
})

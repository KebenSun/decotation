//index.js
//获取应用实例
const app = getApp()

Page({
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '智能净水机0元搬回家',
      path: 'pages/index/index',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },
  data: {
    motto: 'Hello World',
    userInfo: {
      headerUrl: '../image/header.png',
      sp1: '../image/sp1.jpg',
      sp2: '../image/sp2.jpeg',
      sp3: '../image/sp3.jpg',
      sp4: '../image/sp4.jpg',
      contact: '../image/contact.jpg',
      phone: '../image/phone.jpg',
      love: '../image/love.jpg'
    },
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  calling: function () {
    wx.makePhoneCall({
      phoneNumber: '18763257699',   
      success: function () {
        console.log("拨打电话成功！")
      },
      fail: function () {
        console.log("拨打电话失败！")
      }
    })
  },
  addressMap: function () {
    wx.openLocation({
      latitude: Number(35.077464), //坐标纬度（从地图获取坐标）
      longitude: Number(117.164636), //坐标经度（从地图获取坐标）
      name: "威尼斯3区", //打开后显示的地址名称
      address: "枣庄市滕州市大同南路50号" //打开后显示的地址汉字
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})

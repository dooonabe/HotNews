const app = getApp()
var util = require('../../utils/util.js')


// pages/china/china.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    time: {},
    baiduData: [],
    contentList:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getTime(this);
    this.getBaiduData();
  },
  /**
   * 时钟
   */
  getTime: function(that) {
    var today = new Date();
    var nowTime = {}
    nowTime["hour"] = today.getHours();
    nowTime["minute"] = today.getMinutes();
    nowTime["second"] = today.getSeconds();
    that.setData({
      time: nowTime
    })
    setInterval(function() {
      var today = new Date();
      var nowTime = {}
      nowTime["hour"] = today.getHours();
      nowTime["minute"] = today.getMinutes();
      nowTime["second"] = today.getSeconds();
      that.setData({
        time: nowTime
      })
    }, 1000)
  },
  /**
   * 获取百度热点数据
   */
  getBaiduData: function() {
    var that = this;
    var url = app.globalData.hotNewsUrl + "/api/v1/sites/baidu";
    util.httpGet(url, function(data) {
      if (data.data["site"]["subs"] instanceof Array) {
        that.setData({
          baiduData: data.data["site"]["subs"][0]["items"]
        });
      } else if (data.data["site"]["subs"].hasOwnProperty("hot")) {
        that.setData({
          baiduData: data.data["site"]["subs"]["hot"]["items"]
        });
      } else {

      }
    });
  },


  // /**
  //  * 隐藏modal 
  //  */
  // hideModal: function(){
  //   this.setData({
  //     modalHiddden: true
  //   })
  // },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    this.getBaiduData();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    this.getBaiduData();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})
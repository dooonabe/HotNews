const app = getApp()
const sdk = require('../../utils/nc.js')
// pages/today/today.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date:'',
    events:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    sdk.getSDK();
    var today = new Date();
    var month = today.getMonth() + 1 < 10 ? "" + today.getMonth()+1 : today.getMonth() + 1;
    var day = today.getDate() < 10 ? "0" + today.getDate() : today.getDate();
    this.setData({
      date: today.getFullYear()+"-"+month+"-"+day
    });
    this.getEvents(this.fillUrl(app.globalData.todayUrl, month), month, day);
  },

  fillUrl: function(url, month){
    return url +"/cms/home/eventsOnHistory/" + month +".json";  
  },

  getEvents: function(url, month, day){
    var that = this;
    wx.request({
      url: url,
      method: 'GET',
      success: function(response){
        var result = response.data[month][month + "" + day];
        result.forEach(function(item){
          item["title"] = item["title"].replace(/(<\/?a.*?>)|(<\/?span.*?>)/g, '');
        })
        that.setData({
          events: response.data[month][month+""+day]
        })
      }
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
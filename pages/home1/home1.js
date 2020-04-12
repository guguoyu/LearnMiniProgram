// pages/home1/home1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num: 0
  },
  // 处理input 事件绑定
  handleInput(e) {
    // console.log(e.detail.value)
    // this.data.num = e.detail.value 错误的写法
    // 给num 赋值
    this.setData({
      num: e.detail.value
    })
  },
  // 处理button 事件绑定
  handletap(e) {
    // 获取传入的参数
    const operNum = e.currentTarget.dataset.operation
    this.setData({
      num:this.data.num + operNum
    })
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

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
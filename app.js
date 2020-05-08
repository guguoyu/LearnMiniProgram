App({
  // 1. 第一次启动的时候会触发
  onLaunch() {
    // 一般用于用户第一次启动的时候，获取用户的个人信息
    console.log("onLaunch");
    // aaa
  },

  // 用户看到时触发
  onShow() {
    // 可以对页面或者数据 进行重置
    console.log("onShow");
  },

  // 应用被隐藏了
  onHide(){
    console.log("onHide");
  },
  // 出错的时候触发
  onError(err){
    //可以把出错的内容发送到后台
    console.log("onError");
    console.log(err);
  },

  // 页面找不到就会触发
  // 引用第一次启动的时候，如果找不到第一个入口页面 才会触发
  onPageNotFound(){
    // 如果页面不存在 通过js的方式重新跳转页面，重新跳转到第二个页面
    wx.navigateTo({
      url: '/pages/image/image'
    });
    console.log("onPageNotFound");
  }
})
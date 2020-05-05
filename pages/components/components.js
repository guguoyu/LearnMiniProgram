// pages/components/components.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [{
      id: 0,
      name: '首页',
      isActive: true
    },
    {
      id: 1,
      name: '原创',
      isActive: false
    },
    {
      id: 2,
      name: '分类',
      isActive: false
    },
    {
      id: 3,
      name: '关于',
      isActive: false
    }

    ]
  },

  handleItemChange(e) {
    const { choseIndex } = e.detail;
    let { items } = this.data;
    // 遍历数组
    items.forEach((v, i) =>
      i === choseIndex ? v.isActive = true : v.isActive = false
    );
    this.setData({
      items
    })
  }
})
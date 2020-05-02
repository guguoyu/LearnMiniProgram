// components/tabs/tabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
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

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 1.components中 绑定点击事件 需要在methods 中绑定
     * 2.获取被点击的索引
     * 3.获取原数组
     * 4.对数组循环
     *  4.1 给当前索引项的加激活选中效果，其他的选中效果都为false
     * 
     */
    handleTap(e) {
      console.log(e)
      // 获取点击的索引
      let choseIndex = e.currentTarget.dataset.index;
      // 获取原数组
      let { items } = this.data;
      // 遍历数组
      items.forEach((v, i) => i === choseIndex ? v.isActive = true : v.isActive = false);

      this.setData({
        items
      })
    }
  }
})
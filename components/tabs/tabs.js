// components/tabs/tabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //要接受的数据名称
    // aaa: {
    //   // type 要接受的数据类型
    //   type: String,
    //   // value 默认值
    //   value: ""
    // }

    items: {
      type: Array,
      value: []
    }
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
    /**
     * 1.components中 绑定点击事件 需要在methods 中绑定
     * 2.获取被点击的索引
     * 3.获取原数组
     * 4.对数组循环
     *  4.1 给当前索引项的加激活选中效果，其他的选中效果都为false
     * 
     */
    handleTap(e) {
      // 获取点击的索引
      let choseIndex = e.currentTarget.dataset.index;

      // 点击时间触发的时候
      // 触发父组件中的自定义事件 同时传递数据 给父组件
      // this.triggerEvent("父组件自定义事件的名称",要传递的参数)
      this.triggerEvent("itemChange",{choseIndex});
      
      // 获取原数组
      // let { items } = this.data;
      // // 遍历数组
      // items.forEach((v, i) => i === choseIndex ? v.isActive = true : v.isActive = false);

      // this.setData({
      //   items
      // })
    }
  }
})
// custom-tab-bar/custom-tab-bar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    now: {
      type: String,
      value: 'index2'
    },
    cartNum: {
      type: Number,
      value: 0,
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [{
      pagePath: "/pages/index/index2",
      iconPath: "/images/icon_component.png",
      selectedIconPath: "/images/icon_component_HL.png",
      text: "专业"
    }, {
      pagePath: "/pages/index/index3",
      iconPath: "/images/icon_API.png",
      selectedIconPath: "/images/icon_API_HL.png",
      text: "职业"

    
    },{
      pagePath: "/pages/index/index4",
      iconPath: "/images/icon_API.png",
      selectedIconPath: "/images/icon_API_HL.png",
      text: "能力"

    
    }
  ]
    

  },

  /**
   * 组件的方法列表
   */
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({ url })
      this.setData({
        selected: data.index
      })
    }
  }
})
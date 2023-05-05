// components/page_top/page_top.js
Component({
    options: {
        styleIsolation: 'apply-shared'
      },
    /**
     * 组件的属性列表
     */
    properties: {
        page:String
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    lifetimes:{
        attached: function() {
           console.log(this.data.page);
          },
    },
    
    /**
     * 组件的方法列表
     */
    methods: {

    }
})

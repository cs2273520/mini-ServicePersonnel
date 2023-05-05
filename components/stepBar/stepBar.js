// components/stepBar.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        index:Number,
        stepDescription:Array
    },
    /**
     * 动态监听父组件的下标
     */
    observers: {
        'index'(data){  // canvasUrl: 父组件传递过来的值
            this.setData({
                currentindex:this.properties.index,
            })
        }
      },

    /**
     * 组件的初始数据
     */
    data: {
        currentindex:0,//当前步骤
        stepDescription:[],//步骤描述
    },

    /**
     * 组件的方法列表
     */
    methods: {

    },
    attached: function () { 
        this.setData({
            currentindex:this.properties.index,
        })
    },
})

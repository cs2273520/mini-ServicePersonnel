var app = getApp()
Component({
    data: {
        selected: 0,
        color: "black",
        selectedColor: "#1aad19",
        tabBarShow: false,
        list: [{
                pagePath: "/tabbar_page/index/index",
                iconPath: "/image/tabbar/index.png",
                selectedIconPath: "/image/tabbar/index_s.png",
                text: "首页"
            },
           
            {
                pagePath: "/tabbar_page/order/order",
                iconPath: "/image/tabbar/order.png",
                selectedIconPath: "/image/tabbar/order_s.png",
                text: "订单"
            }, 
            {
                pagePath: "/tabbar_page/middle/middle",
                iconPath: "/image/tabbar/middle.png",
                selectedIconPath: "/image/tabbar/middle_s.png",
                text: ""
            },
            {
                pagePath: "/tabbar_page/allservice/allservice",
                iconPath: "/image/tabbar/server.png",
                selectedIconPath: "/image/tabbar/server_s.png",
                text: "工作日程"
            },

            {
                pagePath: "/tabbar_page/center/center",
                iconPath: "/image/tabbar/center.png",
                selectedIconPath: "/image/tabbar/center_s.png",
                text: "我的"
            }
        ]
    },
    attached() {},

    methods: {
        switchTab(e) {
            const data = e.currentTarget.dataset
            const url = data.path
            wx.switchTab({
                url
            })
            this.setData({
                selected: data.index
            })
        }
    },

})
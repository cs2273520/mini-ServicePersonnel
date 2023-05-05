// tabbar_page/middle/middle.js
Component({
    pageLifetimes: {
        show() {
            if (typeof this.getTabBar === 'function' &&
                this.getTabBar()) {
                this.getTabBar().setData({
                    selected: 2
                })
            }
        }
    },
    /**
     * 页面的初始数据
     */
    data: {
        value: 3,
    },
    attached() {
        this.getTabBar().setData({
            tabBarShow: true,
        })
    },
    
})
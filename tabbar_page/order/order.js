Component({
    pageLifetimes: {
      show() {
        if (typeof this.getTabBar === 'function' &&
          this.getTabBar()) {
          this.getTabBar().setData({
            selected: 1
          })
        }
      }
    },
    data: {

       


        tabPanelstyle: 'display:flex;justify-content:center;align-items:center;min-height: 120px',
      },
      methods:{
        
          /**
           * 跳转订单详情
           */
        toDetail(e){
          
            let state=e.currentTarget.dataset.state;
                  if(state=='4'){
                    wx.navigateTo({
                        url: '/pages/orderDetail/orderDetail?orderid='+state
                      })
                  }else{
                    wx.navigateTo({
                        url: '/pages/orderDetail/orderDetail'
                      })
                  }
      
        },
        onTabsChange(event) {
            console.log(`Change tab, tab-panel value is ${event.detail.value}.`);
          },
        onTabsClick(event) {
            console.log(`Click tab, tab-panel value is ${event.detail.value}.`);
          },
      },
    attached(){
        this.getTabBar().setData({
            tabBarShow:true, 
        })
        wx.setNavigationBarTitle({
            title: '订单'
        })
      },
  })
  
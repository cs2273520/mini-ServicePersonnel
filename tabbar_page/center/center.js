Component({
    pageLifetimes: {
      show() {
        if (typeof this.getTabBar === 'function' &&
          this.getTabBar()) {
          this.getTabBar().setData({
            selected: 4
          })
        }
      }
    },
    
    methods:{
        /**
         * 跳转现金结账
         */
        toSettlement(){
            wx.navigateTo({
              url: '/pages/settlement/settlement',
            })
        },
      /**
       * 跳转我的课程
       */
      checkAll(e){
          console.log(e.currentTarget.dataset);
          if(e.currentTarget.dataset.bindtap=='unbind'){
            wx.navigateTo({
                url: '/pages/myCourse/myCourse?page=unbind',
              })
          }else{
            wx.navigateTo({
                url: '/pages/myCourse/myCourse?page=checkAll',
              }) 
          }
        
      
      },
      
        /**
         * 跳转升级页面
         */
        toUp(){
            wx.navigateTo({
              url: '/pages/upgrade/upgrade',
            })
        },

        // 跳转个人信息编辑页面
    editor(){
        wx.navigateTo({
            url: '/pages/InforEditing/InforEditing'
          })
    },
    },


    attached(){
        this.getTabBar().setData({
            tabBarShow:true, 
        }),
        wx.setNavigationBarTitle({
            title: '个人中心'
        })
      },
      
  })
  
Component({
    data:{
        value: new Date(2022, 1, 15).getTime(),
        minDate: new Date(2022, 1, 1).getTime(),
        maxDate: new Date(2022, 12, 31).getTime(),
        format(day) {
            const { date } = day;
            const year = date.getFullYear();
            const month = date.getMonth() + 1;
            const curDate = date.getDate();
      
            day.suffix = '';
            // prefix  极速
            // suffix 包月
            if (year === 2022) {
              if (month === 2) {
                const map = {
                  1: '包月',
                  2: '包月',
                  3: '包月',
                  13: '包月',
                };
                const map1 = {
                    1: '极速',
                    11: '极速',
                    12: '极速',
                    13: '极速',
                  };
                if (curDate in map) {
                //   day.prefix = '';
                  day.suffix = map[curDate];
                  day.className = 'is-holiday';
                }
                if (curDate in map1) {
                    
                    day.prefix = map1[curDate];
                    day.className = 'is-holiday';
                  }
              }
            }
      
            return day;
          },
    },
    options: {
        styleIsolation: 'shared'
    },
    pageLifetimes: {
        show() {
          if (typeof this.getTabBar === 'function' &&
            this.getTabBar()) {
            this.getTabBar().setData({
              selected: 3
            })
          }
        }
      },
    methods: {
        /**
         * 选择某天
         */
      handleSelect(e) {
        const { value, entireValue } = e.detail;
        console.log(e);
        wx.navigateTo({
          url: '/pages/workArrangement/workArrangement',
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
  });
  
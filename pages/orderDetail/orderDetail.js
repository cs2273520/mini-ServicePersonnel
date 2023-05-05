// pages/orderDetail/orderDetail.js
Page({
    
    /**
     * 页面的初始数据
     */
    data: {
        state:'',//订单状态   1接单 2拒单 3进行时 4完成时
        dialogKey: '',
        showWithInput: false,
        showTextAndTitleWithInput: false,
        items: [
            { name: '打扫清洁', value: '打扫清洁' },
            { name: '做饭', value: '做饭',},
            { name: '外出陪伴', value: '外出陪伴' },
            { name: '其它', value: '其它' },
          ],
          value: 3,
    },
    /**
     * 去申诉
     */
    toAppeal(){
        wx.navigateTo({
          url: '/pages/fillTheReason/fillTheReason?page=appeal',
        })
    },
    onChange(e) {
      const { value } = e.detail;
      this.setData({
        value,
      });
    },
    showDialog(e) {
        const { key } = e.currentTarget.dataset;
        this.setData({ [key]: true, dialogKey: key });
       
      },
      /**
       * 检验服务码
       */
      closeDialogAndCheckCode(){
        this.setData({
            state:3,
            showWithInput:false
        })

        console.log(this.data.state);
      },
    /**
     * 点击结束服务按钮
     */
      endService(){
        wx.switchTab({
          url: '/tabbar_page/order/order',
        })

      },


      closeDialog() {
        const { dialogKey } = this.data;
        this.setData({ [dialogKey]: false });
      },
    /**
     * 点击开始服务
     */
    startService(){
        this.setData({
            showWithInput:true
        })
    },
    /**
     * 拒单
     */
    toReject(){
        let orderid=2;
        wx.navigateTo({
            url: '/pages/fillTheReason/fillTheReason?page=rejectReason',
          })
    },
    /**
     * 接单
     */
    toReceive(){
        let orderid=1;
        wx.navigateTo({
            url: '/pages/orderReceiveState/orderReceiveState?orderid='+orderid,
          })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.setData({
            state:options.orderid
        })
        console.log(this.data.state);
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {
      
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})
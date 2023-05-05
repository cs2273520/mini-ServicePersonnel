// pages/fillTheReason/fillTheReason.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        page:'',
        index:0,
        stepDescription:['上传申诉内容','平台审核','申诉成功'],
        reasons: [
            {value: '时间原因', name: '时间原因'},
            {value: '距离原因', name: '距离原因'},
            {value: '服务类型原因', name: '服务类型原因'},
            {value: '其他', name: '其他'},
          ]
    },
    /**
     * 提交
     */
    toSubmit(){
        if(this.data.page=='rejectReason'){
            wx.navigateTo({
                url: '/pages/orderReceiveState/orderReceiveState?orderid=2',
              }) 
        }
        if(this.data.page=='appeal'){
            let index1=this.data.index
            index1++;
            if(index1>=2){
                index1=2
            }
            this.setData({
                index:index1
            })
        }
     
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        console.log(options.page);
        if(options.page=='rejectReason'){
            wx.setNavigationBarTitle({
                title: '拒单申请',
            
              })
              this.setData({
                page:'rejectReason',
              })
        }
        if(options.page=='appeal'){
            wx.setNavigationBarTitle({
                title: '申诉',
          
              })
              this.setData({
                page:'appeal',
                stepDescription:['上传申诉内容','平台审核','申诉成功']
              })
        }

       
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
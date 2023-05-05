// pages/myCourse/myCourse.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        value: 3,//评分
        pageName:'',
        items: [
            {value: '有条件更好的机构邀请', name: '有条件更好的机构邀请'},
            {value: '不合适', name: '不合适'},
            {value: '没有原因', name: '没有原因'},
            {value: '其他', name: '其他'},
          ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.setData({
            pageName:options.page
        })
        console.log(this.data.pageName);
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
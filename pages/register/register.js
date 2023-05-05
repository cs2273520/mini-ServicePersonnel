// pages/register/register.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        index:0,//步骤条下标
        stepDescription:['完善基本信息','绑定','完成注册']//步骤描述
    },
    /**
     * 跳转登录
     * */ 
    toLogin(){
        wx.navigateTo({
          url: '/pages/login/login',
        })
    },
    /**
     * 点击下一步
     */
    nextButton(){
        let index1=this.data.index
        if(index1>=2){
            index1=2
        }else{
            index1++
        }
        this.setData({
            index:index1
        })
    },
    /**
     * 点击上一步
     */
    preButton(){
        console.log(2);
        let index1=this.data.index
        if(index1<=0){
            index1=0
        }else{
            index1--
        }
        this.setData({
            index:index1
        })
    },


    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

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
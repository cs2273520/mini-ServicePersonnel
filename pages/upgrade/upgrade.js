// pages/upgrade/upgrade.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        Experience:['有经验','无经验'],
        chooseExperience:0,
        index:0,//步骤条下标
        stepDescription:['上传证书','平台审核','升级成功']//步骤描述
    },
    /**
     * 确认上传
     */
    next(){
        let index1=this.data.index;
        
        if(index1>=2){
          index1=2
        }else{
            index1++
            this.setData({
                index:index1
            })
        }
    },
    // 点击有经验和无经验
    chooseExperience(e){
        this.setData({
            chooseExperience:e.currentTarget.dataset.index
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
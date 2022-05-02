// pages/treeInfo/treeInfo.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        treeName: 'treeName',
        treeInfo: ({
            id: '',
            name: '',
            words: '',
            imgURL: '',
        })
    },



    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        console.log(options)
        this.setData({
            treeName: options.id
        })
        console.log(this.data.treeName)
        var name = this.data.treeName;
        switch (name) {
            case 'apple':
                this.setData({
                    treeInfo: ({
                        id: 'tree1',
                        name: '苹果',
                        imgURL: 'https://img.cikian.cn/donTree/apple.jpg',
                        environment: '苹果适合的环境',
                        cycle: '苹果生长周期',
                        life: '苹果寿命',
                        words: '这是大苹果这是大苹果这是大苹果这是大苹果这是大苹果这是大苹果这是大苹果这是大苹果这是大苹果这是大苹果这是大苹果这是大苹果这是大苹果',

                    })
                })
                break;
            case 'peach':
                this.setData({
                    treeInfo: ({
                        id: 'tree1',
                        name: '桃',
                        imgURL: 'https://img.cikian.cn/donTree/peach.jpg',
                        environment: '桃子适合的环境',
                        cycle: '桃子生长周期',
                        life: '桃子寿命',
                        words: '这是大桃子这是大桃子这是大桃子这是大桃子这是大桃子这是大桃子这是大桃子这是大桃子这是大桃子这是大桃子这是大桃子这是大桃子这是大桃子',

                    })
                })
                break;
        };

        console.log(this.data)
        console.log(this.data.treeInfo)
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
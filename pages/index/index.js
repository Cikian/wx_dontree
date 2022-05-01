// index.js
Page({

  data: {
    treeName: 'Hello World',
  },
  onclick1() {
    this.setData({
      treeName: 'Hello boy'
    })
  },
  onclick2() {
    this.setData({
      treeName: 'Hello girl'
    })
  },
})

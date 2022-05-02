// index.js
Page({

  data: {
    apple: ({
      id: 'tree1',
      name: '苹果',
      words: 'word1',
      imgURL: 'https://img.cikian.cn/donTree/apple.jpg',
    }),

    peach: ({
      id: 'tree1',
      name: '桃',
      words: 'word1',
      imgURL: 'https://img.cikian.cn/donTree/peach.jpg',
    })


  },
  toTreeInfo(event) {
    wx.navigateTo({
      url: '/pages/treeInfo/treeInfo?id=' + event.target.id,
    })
  },
})

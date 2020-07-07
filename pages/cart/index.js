

Page({

  data: {
    address:{},
    cart:[],
    allChecked:false,
    totalPrice:0,
    totalNum:0
  },


  onShow: function (options) {
    // 获取缓存中的收货信息
    // const address = wx.getStorageSync('address');
    //获取缓存中的购物车数据
    const cart = wx.getStorageSync('cart') || [];
    console.log(cart);
    this.setData({
      cart
    })
  },
  
})

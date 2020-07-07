import {request} from "../../request/index";
import regeneratorRuntime, { async } from '../../lib/runtime/runtime';
Page({
  /**
   * 页面的初始数据
   */
  data: {
    leftMenuList:[],
    rightContent:[],
    currentIndex:0,
    scrollTop: 0
  },
  //接口返回的数据
  Cates:[],

  onLoad:function(options){
    const Cates = wx.getStorageSync('cates')
    //判断
    if (!Cates) {
      this.getCates()
    }else{
      //有local数据 定义过期时间
      if (Date.now() - Cates.time > 1000 * 10 ) {
        //重新请求
        this.getCates()
      } else {
        this.Cates=Cates.data;
        let leftMenuList = this.Cates.map(v=>v.cat_name);
        let rightContent = this.Cates[0].children;
        this.setData({
          leftMenuList,
          rightContent
        })
        console.log(rightContent);
        
      }

    }
    this.getCates()
  },
      //拿到分类数据
    async getCates() {
      const res = await request({time:Date.now(), url:"/categories"})
      this.Cates=res;
      
      //保存在本地存储
      wx.setStorageSync('cates',{ data: this.Cates})  
      //构造左边的大菜单数据
      let leftMenuList = this.Cates.map(v=>v.cat_name);
      //构造右边的数据
      let rightContent = this.Cates[0].children;
      this.setData({
        leftMenuList,
        rightContent
      })
      // console.log(rightContent);
      
    },
    handleItemTap(e){
     const {index}  = e.currentTarget.dataset;

     let rightContent = this.Cates[index].children;

     this.setData({
       currentIndex:index,
       rightContent,
       scrollTop:0
     })
    }

})
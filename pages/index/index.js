import {request} from "../../request/index.js"

Page({
  data:{
    //轮播数据
    swiperList:[],
    catesList:[],
    floorList:[]
  },
  onLoad:function(options){
    this.getSwiperList();
    this.getCateList(); 
    this.getFloorList();   
  },
  getSwiperList(){
    request({
      url:'/home/swiperdata'
    }).then(result =>{
      this.setData({
        swiperList: result        
      })
      // console.log(result);
      
    })   
  },
  getCateList(){
    request({ url: '/home/catitems' })
    .then(result => {
      this.setData({
        catesList: result
      })      
      // console.log(result);
    })
  },
  getFloorList(){
    request({ url: "/home/floordata" })
    .then(result => {
      this.setData({
        floorList: result
      })
      console.log(result);    
    })
  }
})
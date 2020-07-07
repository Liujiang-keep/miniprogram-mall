// 同事发送异步代码的次数
let ajaxTimes = 0;

ajaxTimes++;
// wx:wx.showLoading({
//   title: '加载中',
//   mask: true,
// })
export const  request=(params)=>{

    let header={...params.header}

    //定义公共的url
    const baseUrl = "https://api-hmugo-web.itheima.net/api/public/v1";
    return new Promise((resolve,reject)=>{
        wx.request({
            ...params,
            header: header,
            url: baseUrl+params.url,
            success: (result) => {
                resolve(result.data.message);
            },
            fail: (err) => {
                reject(err)
            },
            complete: () => {
                ajaxTimes--;
                if(ajaxTimes===0){
                    //  关闭正在等待的图标
                    wx.hideLoading();
                  }
            }
        });
          
    })
}
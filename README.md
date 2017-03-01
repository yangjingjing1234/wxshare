# wxshare
###微信自定义分享图片,title这是我们平时用的最多的功能，网上所大部分说的也已经过时，不能用了，必须要用微信自带的接口来设置,[API](https://mp.weixin.qq.com/wiki/7/aaa137b55fb2e0456bf8dd9148dd613f.html)接口文档写的也很清除，我也附带了一份我所用到的js.

* 想要自己搞，首先你要有一微信认证过的[公众号](https://mp.weixin.qq.com/)，个人可以申请个订阅号，企业可以申请服务号，认证每个月300块大洋，否则不享受这块的功能，
* 然后你就有一个 appid,appsecrect ,前台很简单，当前网页地址传给后台，一些保密性的数据最好放到后台去获取，后台根据appid,appsecrect获取access_token，然后根据这个获取api_ticket ,api_ticket是用于调用微信卡券JS API的临时票据，有效期为7200 秒,这一堆解释不管怎么难以考究,微信都有给出相应的后台代码，因此也不算难。之后后台返回以下数据给前台初始化设置
* 其实在页面中的第一句话，还有第一张符合尺寸的图片会默认成为分享标题，和图片，但是经过测试不太稳当，有时候是破裂的图片，和网址展现，还是自己用接口设置一下比较稳定

```
wx.config()
...
//这块初始话设置也是必须的

timestamp: data.data.timestamp,
nonceStr: data.data.nonceStr,//可以前后台协议写死都行
signature: data.data.signature,
jsApiList: [
   // 所有要调用的 API 都要加到这个列表中
            'onMenuShareAppMessage',
            'onMenuShareTimeline',
            'onMenuShareQQ',
            'onMenuShareWeibo',
            'onMenuShareQZone'
]
...

//在后台返回数据之后调用即可
wx.ready()

//调用接口，自定义图片地址,title 即可
```
### 其他功能暂未用到，用到以后在增加
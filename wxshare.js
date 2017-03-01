var share_desc = '聚天下之贤，策天下之号';
var share_title = '翼龙贷--寻找特别的你';
var share_link = "http://webfront.eloancn.com/zhaopin/index.html";
var share_image = "http://webfront.eloancn.com/zhaopin/image/shareimg.png";
var url=window.location.href;
var params={
	'base':'{}',
	'body':JSON.stringify({
		'url':url,
	})
}
$.post('http://webfront.eloancn.com/h5/wx/sign',params,function(data){
	wx.config({
		debug: false,
	    appId: 'wx2610a2bb461261ae',
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
	});
	wx.ready(function () { 
                // 在这里调用 API
            wx.onMenuShareAppMessage({
                title: share_title, // 分享标题
                desc: share_desc, // 分享描述
                link: share_link, // 分享链接
                imgUrl: share_image, // 分享图标
                type: '', // 分享类型,music、video或link，不填默认为link
                dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                success: function () {
                    // 用户确认分享后执行的回调函数
                    alert('分享分享给朋友成功1');

                },
                cancel: function () {
                    // 用户取消分享后执行的回调函数
                }
            });

            wx.onMenuShareTimeline({
                title: share_title, // 分享标题
                desc: share_desc, // 分享描述
                link: share_link, // 分享链接
                imgUrl: share_image, // 分享图标
                success: function () {
                    // 用户确认分享后执行的回调函数
                    alert('分享到朋友圈2');


                },
                cancel: function () {
                    // 用户取消分享后执行的回调函数


                }
            });
            wx.onMenuShareQZone({
			    title: share_title, // 分享标题
			    desc: share_desc, // 分享描述
			    link : share_link,
				imgUrl: share_image, // 分享图标
			    success: function () { 
			        // 用户确认分享后执行的回调函数
			    	 alert('分享成功');
			    },
			    cancel: function () { 
			        // 用户取消分享后执行的回调函数
			    	alert('已取消');
			    }
			});
			wx.onMenuShareQQ({
			    title: share_title, // 分享标题
			    desc: share_desc, // 分享描述
			    link : share_link,
				imgUrl: share_image, // 分享图标
			    success: function () { 
			        // 用户确认分享后执行的回调函数
			    	 alert('分享成功');
			    },
			    cancel: function () { 
			        // 用户取消分享后执行的回调函数
			    	alert('已取消');
			    }
			});
			wx.onMenuShareWeibo({
			    title: share_title, // 分享标题
			    desc: share_desc, // 分享描述
			    link : share_link,
				imgUrl: share_image, // 分享图标
			    success: function () { 
			        // 用户确认分享后执行的回调函数
			    	 alert('分享成功');
			    },
			    cancel: function () { 
			        // 用户取消分享后执行的回调函数
			    	alert('已取消');
			    }
			});
  });
	wx.checkJsApi({
	    jsApiList: ['onMenuShareAppMessage',
	                'onMenuShareTimeline',
	                'onMenuShareQQ',
	                'onMenuShareWeibo',
	                'onMenuShareQZone'], // 需要检测的JS接口列表，所有JS接口列表见附录2,
	    success: function(res) {
	        // 以键值对的形式返回，可用的api值true，不可用为false
	        // 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
	        console.log(res)
	    }
	});
	wx.error(function(res){
		console.log(res);
	})
});

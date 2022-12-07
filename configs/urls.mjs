/*
 * Note that the HTTPS URLs must NOT have any path portions.
 *
 * For example:
 * - Wrong: https://example.com/abc/*
 * - Right: https://example.com/*
 */


// The HTTP headers of these URLs will be modified.
export const HEADER_URLS = [
  'http://*.ssports.com/*',
  'http://ssports.com/*',
  'http://ssports.smgbb.cn/*',
  'https://pstream.api.mgtv.com/*',
  'http://kandian.com/player/getEpgInfo*',
];


// These URLs will not go through proxy servers.
export const PROXY_BYPASS_URLS = [
  'http://bangumi.bilibili.com/index/ding-count.json',
];


// These URLs will be proxied.
export const PROXY_URLS = [
  'https://dmd-fifajs-h5-ikuweb.youku.com/*',
  'https://dmd-fifa-h5-ikuweb.youku.com/*',
  'http://acs.youku.com/*',
  'https://acs.youku.com/*',
  // 'http://v.youku.com/player/*',
  'http://pl-ali.youku.com/*',
  'http://list.youku.com/category/*',
  'http://api.youku.com/player/*',
  'http://play.youku.com/play/get.json*',
  'http://play-dxk.youku.com/play/get.json*',
  'http://play-ali.youku.com/play/get.json*',
  'http://list.youku.com/show/module?*',
  'http://list.youku.com/show/point?*',
  'http://list.youku.com/show/episode?*',
  'http://v.youku.com/page/playlist*',
  'http://ups.youku.com/ups/get.json*',
  'https://ups.youku.com/',
  'https://ac.qq.com/*',
  'http://player.aplus.pptv.com/*',
  'http://api.aixifan.com/plays/*',
  'http://www.acfun.cn/video/getVideo*',
  'https://www.acfun.cn/*',
  // 'https://v.youku.com/*',
  // 'http://v2.tudou.com/*',
  'http://video.tudou.com/v/*',
  'http://www.tudou.com/a/*',
  'http://www.tudou.com/v/*',
  'http://www.tudou.com/outplay/goto/*',
  'http://www.tudou.com/tvp/alist.action*',
  'http://s.plcloud.music.qq.com/fcgi-bin/p.fcg*',
  'http://i.y.qq.com/*/fcg-bin/*',
  'http://i.y.qq.com/*/fcgi-bin/*',
  'http://c.y.qq.com/*/fcg-bin/*',
  'http://c.y.qq.com/*/fcgi-bin/*',
  'https://c.y.qq.com/*',
  'http://api.unipay.qq.com/cgi-bin/get_pay_info.fcg?*',
  'https://api.unipay.qq.com/*',
  'http://hot.vrs.sohu.com/*',
  'https://hot.vrs.sohu.com/*',
  'http://live.tv.sohu.com/live/player*',
  'http://pad.tv.sohu.com/playinfo*',
  'http://my.tv.sohu.com/play/m3u8version.do*',
  'http://hot.vrs.letv.com/*',
  'http://api.le.com/mms/out/video/*',
  'http://player.pc.le.com/mms/out/video/*',
  'http://player-pc.le.com/mms/out/video/*',
  // 'http://g3.letv.cn/*',
  'http://data.video.qiyi.com/*',
  'http://data.video.iqiyi.com/*',
  'https://data.video.qiyi.com/*',
  'https://data.video.iqiyi.com/*',
  // 'http://nl.rcd.iqiyi.com/apis/urc/*',
  'http://cache.vip.qiyi.com/*',
  'http://cache.video.qiyi.com/*',
  'http://cache.vip.iqiyi.com/*',
  'http://cache.video.iqiyi.com/*',
  'https://cache.video.iqiyi.com/*',
  'http://iplocation.geo.qiyi.com/cityjson*',
  'http://iplocation.geo.iqiyi.com/cityjson*',
  'http://*.cupid.iqiyi.com/*',
  'http://v.api.hunantv.com/player/video*',
  'http://mobile.api.hunantv.com/v5/video/getSource*',
  'http://v.api.mgtv.com/player/video*',
  'https://v.api.mgtv.com/*',
  'http://pcweb.api.mgtv.com/player/video*',
  'https://pcweb.api.mgtv.com/*',
  'http://acc.music.qq.com/base/fcgi-bin/getsession*',
  'http://182.254.116.117/*',

  'http://api.appsdk.soku.com/*',

  'http://app.bilibili.com/bangumi/*',
  'http://bangumi.bilibili.com/*',

  'http://122.72.82.31/*',
  'http://211.151.158.155/*',

  // 'http://tt.video.qq.com/get*',
  // 'http://ice.video.qq.com/get*',
  // 'http://tjsa.video.qq.com/get*',
  // 'http://a10.video.qq.com/get*',
  // 'http://xyy.video.qq.com/get*',
  // 'http://vcq.video.qq.com/get*',
  // 'http://vsh.video.qq.com/get*',
  // 'http://vbj.video.qq.com/get*',
  // 'http://bobo.video.qq.com/get*',
  // 'http://flvs.video.qq.com/get*',
  // 'http://bkvv.video.qq.com/get*',
  // 'http://h5vv.video.qq.com/get*',
  'http://*.video.qq.com/get*',
  'http://*.video.qq.com/fcgi-bin/*',
  'https://*.video.qq.com/*',
  'http://info.zb.qq.com/?*',
  'https://info.zb.qq.com/*',
  'http://info.zb.video.qq.com/?*',
  'https://info.zb.video.qq.com/*',
  'http://qzs.qq.com/tencentvideo_v1/*',
  'https://qzs.qq.com/*',
  'http://vd.l.qq.com/*',
  'https://vd.l.qq.com/*',
  'http://vi.l.qq.com/*',
  'https://vi.l.qq.com/*',

  'http://dispatcher.video.sina.com.cn/*',
  'http://geo.js.kankan.com/*',
  'http://web-play.pptv.com/*',
  'http://v.pptv.com/show/*',
  'https://ppi.api.pptv.com/*',
  'http://web-play.pplive.cn/*',
  'http://tools.aplusapi.pptv.com/get_ppi?*',
  'http://live.pptv.com/api/subject_list?*',
  // 'http://c1.pptv.com/*',
  'http://dyn.ugc.pps.tv/*',
  'http://v.pps.tv/ugc/ajax/aj_html5_url.php*',
  'http://inner.kandian.com/*',
  'http://ipservice.163.com/*',
  'http://so.open.163.com/open/info.htm*',
  'http://zb.s.qq.com/*',
  'https://zb.s.qq.com/*',
  'http://ip.kankan.com/*',
  'http://vxml.56.com/json/*',

  'http://music.sina.com.cn/yueku/intro/*',
  // 'http://ting.baidu.com/data/music/songlink*',
  // 'http://ting.baidu.com/data/music/songinfo*',
  // 'http://ting.baidu.com/song/*/download*',
  'http://music.sina.com.cn/radio/port/webFeatureRadioLimitList.php*',
  'http://play.baidu.com/data/music/songlink*',

  'http://v.iask.com/v_play.php*',
  'http://v.iask.com/v_play_ipad.cx.php*',
  'http://tv.weibo.com/player/*',
  'http://wtv.v.iask.com/*.m3u8*',
  'http://wtv.v.iask.com/mcdn.php',
  'http://video.sina.com.cn/interface/l/u/getFocusStatus.php*',
  'http://wtv.v.iask.com/player/ovs1_idc_list.php*',

  // 'http://kandian.com/player/getEpgInfo*',  // !!!
  // 'http://cdn.kandian.com/*',
  'http://www.yinyuetai.com/insite/*',
  'http://www.yinyuetai.com/main/get-*',
  'http://www.kugou.com/interface/geoip/*',
  'http://www.kuwo.cn/yy/PlayCheckIp?callback=checkIpCallback&_=*',
  'http://antiserver.kuwo.cn/anti.s?*',
  'http://ipcheck.kuwo.cn/ip_check.kuwo*',
  'http://*.dpool.sina.com.cn/iplookup*',
  'http://api.letv.com/streamblock*',
  'http://api.letv.com/mms/out/video/play*',
  'http://api.www.letv.com/mms/out/video/playJson?*',
  'http://*.letv.com/mms/out/video/play*',
  'http://api.letv.com/mms/out/common/geturl*',
  'http://api.letv.com/geturl*',
  'http://api.letv.com/api/geturl*',
  'http://st.live.letv.com/live/*',
  'http://live.gslb.letv.com/gslb?*',
  'http://live.g3proxy.lecloud.com/gslb?*',
  'http://api.live.letv.com/crossdomain.xml',
  'http://static.itv.letv.com/api*',
  'http://ip.apps.cntv.cn/js/player.do*',
  'http://vdn.apps.cntv.cn/api/get*',
  'http://vdn.live.cntv.cn/api2/*',
  'http://cctv1.vtime.cntv.cloudcdn.net/cache/*',
  'http://cctv5.vtime.cntv.cloudcdn.net/cache/*',
  'http://cctv5plus.vtime.cntv.cloudcdn.net/cache/*',
  'http://cctv13.vtime.cntv.cloudcdn.net/cache/*',
  'http://sports1pull.live.wscdns.com/live/aoyun2',
  'http://vip.sports.cntv.cn/check.do*',
  'http://vip.sports.cntv.cn/play.do*',
  'http://vip.sports.cntv.cn/servlets/encryptvideopath.do*',
  'http://211.151.157.15/*',

  'http://www.tudou.com/programs/view/*',
  'http://www.tudou.com/albumplay/*',
  'http://www.tudou.com/listplay/*',

  'http://www.youku.com/show_page/*',
  'http://v.youku.com/v_show/*',
  'http://www.soku.com/search_video/*',
  'http://search.api.3g.youku.com/*',
  'http://search.api.3g.tudou.com/*',
  'http://*.api.tv.itc.cn/*',
  'http://api.tv.sohu.com/*',
  'http://ac.qq.com/Comic*',
  'http://ac.qq.com/Jump*',
  'http://live.api.hunantv.com/pc/getSourceById*',
  'http://mobile.api.hunantv.com/*',
  'http://www.qie.tv/*',
  'http://www.bilibili.com/video/*',
  'https://www.bilibili.com/*',
  'http://api.bilibili.com/*',
  'https://api.bilibili.com/*',
  'http://interface.bilibili.com/*',
  'https://interface.bilibili.com/*',
  'http://bangumi.bilibili.com/api/*',
  'https://bangumi.bilibili.com/*',
  // 'http://live-play.acgvideo.com/live/*',
  'http://m10.music.126.net/*', // for the testing of netease music

  'http://douban.fm/*',
  'https://douban.fm/*',
  'http://www.xiami.com/*',
  'http://lixian.xunlei.com/*',
  'http://lixian.vip.xunlei.com/*',
  'http://dynamic.cloud.vip.xunlei.com/*',
  'http://cloud.vip.xunlei.com/*',
  // 'http://vod.lixian.xunlei.com/*',
  'http://www.iqiyi.com/dongman/',
  'https://www.iqiyi.com/',
  
  'http://www.tuishujun.com/',
  'https://www.tuishujun.com/',

  // LETV https://github.com/Unblocker/Unblock-Youku/issues/590
  'http://36.110.222.105/*',
  'http://36.110.222.119/*',
  'http://36.110.222.146/*',
  'http://36.110.222.156/*',
  'http://123.125.89.6/*',
  'http://123.125.89.101/*',
  'http://123.125.89.102/*',
  'http://123.125.89.103/*',
  'http://123.125.89.157/*',
  'http://123.125.89.159/*',
  'http://123.126.32.134/*',
  'http://123.59.122.75/*',
  'http://123.59.122.76/*',
  'http://123.59.122.77/*',
  'http://123.59.122.104/*',
  'http://111.206.208.36/*',
  'http://111.206.208.37/*',
  'http://111.206.208.38/*',
  'http://111.206.208.61/*',
  'http://111.206.208.62/*',
  'http://111.206.208.163/*',
  'http://111.206.208.164/*',
  'http://111.206.208.166/*',
  'http://111.206.211.145/*',
  'http://111.206.211.146/*',
  'http://111.206.211.147/*',
  'http://111.206.211.148/*',
  'http://111.206.211.129/*',
  'http://111.206.211.130/*',
  'http://111.206.211.131/*',
  'http://220.181.153.113/*',
  'http://14.152.77.32/*',
  'http://14.152.77.26/*',
  'http://14.152.77.25/*',
  'http://14.152.77.22/*',
  'http://183.232.229.22/*',
  'http://183.232.229.21/*',
  'http://183.232.229.25/*',
  'http://183.232.229.32/*',
  'http://115.182.200.51/*',
  'http://115.182.200.50/*',
  'http://115.182.200.54/*',
  'http://115.182.200.53/*',
  'http://115.182.200.52/*',
  'http://115.182.63.51/*',
  'http://115.182.63.93/*',
  'http://*.letv.cn/vod/v2/*',
  'http://ark.letv.com/s*',
  'http://search.lekan.letv.com/*',

  // 'http://live.video.sina.com.cn/room/*',
  // 'http://edge.v.iask.com/*',  // may be large files

  'http://pay.youku.com/buy/redirect.html*',
  'http://pay.tudou.com/buy/redirect.html*',
  'http://aid.video.qq.com/fcgi-bin/userip?*',
  'http://aidbak.video.qq.com/fcgi-bin/userip?*',
  'http://pay.video.qq.com/fcgi-bin/paylimit*',
  'http://paybak.video.qq.com/fcgi-bin/paylimit*',
  'https://*.l.qq.com/*',
  'http://chrome.2345.com/dianhua/index.php?m=call&f=check&*',

  'http://music.163.com/eapi/*',

  // 'http://play.baidu.com/*',
  // 'http://zhangmenshiting.baidu.com/*',
  // 'http://music.baidu.com/box*',
  // 'http://music.baidu.com/data/service/sum*',
  // 'http://music.baidu.com/data/music/songlink*',
  // 'http://music.baidu.com/data/music/songinfo*',
  // 'http://music.baidu.com/data/music/fmlink*',
  // 'http://music.baidu.com/song/*/download*',
  // 'http://fm.baidu.com/*',
  // 'http://www.kugou.com/*',
  // 'http://music.baidu.com/data/user/collect*',

  // 'http://d.dxy.cn/*',
  // 'http://ac.qq.com/*/v/cid/*',
  // 'http://v.pptv.com/show/*.html',
  // 'http://www.songtaste.com/*',
  // 'http://songtaste.com/*',
  // 'http://www.yyets.com/*',
  // 'http://mainv2.img.duomi.com/*',
  // 'http://imanhua.com/comic/*',
  // 'http://www.imanhua.com/comic/*',
  // 'http://imanhua.com/v2*',
  // 'http://www.imanhua.com/v2*',

  // for development purposes
  'http://flask-test-iwauxcyxjb.cn-hangzhou.fcapp.run/*',
  'https://flask-test-iwauxcyxjb.cn-hangzhou.fcapp.run/*',
];

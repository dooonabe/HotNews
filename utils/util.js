const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function httpGet(url, callBack) {
  wx.request({
    url: url,
    method: 'GET',
    header: {
      "Content-Type": "application/json",
      "Cookie": "PSTM=1502069738; BIDUPSID=B203CDFB0CDA0EDAC302C2CF8F3C6532; BAIDUID=C577568014F8C0386C07E450F9729C72:SL=0:NR=10:FG=1; MSA_WH=1536_719; BD_UPN=12314753; ispeed_lsm=2; sug=3; sugstore=0; ORIGIN=0; bdime=0; delPer=0; BD_HOME=0; BD_CK_SAM=1; H_PS_645EC=f79diiKMFyEbTa29WfYV8oDggqxPmJxeGLri5m17YfjFKcFJY8N1%2FSTzNpQ; H_WISE_SIDS=127979_124610_128701_127270_129070_128069_127488_128453_120206_129240_123018_129115_118882_118867_118842_118837_118797_128039_128363_107317_126996_129179_127772_129087_127768_117334_128448_117428_128450_128402_129036_127026_128789_129009_128442_128968_128246_128805_127797_126720_129027_129145_127764_128939_124030_110085_123290_127700_128762_126683_128604_127417_129250_128961; SE_LAUNCH=5%3A25812569; BDORZ=AE84CDB3A529C0F8A2B9DCDD1D18B695; BDRCVFR[C0p6oIjvx-c]=I67x6TjHwwYf0; PSINO=5; BDSVRTM=106; H_PS_PSSID=",
    },
    success: function (res) {
      callBack(res.data);
    },
    fail: function (error) {
      console.log(error)
    }
  })
}

/**
 * 将html转化为对象
 */
function transBaiduZiXun2List(html){
  var contentList = [];
  return contentList;
}


module.exports = {
  formatTime: formatTime,
  httpGet: httpGet,
  transBaiduZiXun2List: transBaiduZiXun2List,
}

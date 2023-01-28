function InitTime(endtime) {
  var dd,
    hh,
    mm,
    ss = null;
  var time = new Date(endtime).getTime() - new Date().getTime();
  if (time <= 0) {
    return "活动已结束";
  } else {
    var dd = Math.floor(time / 1000 / 60 / 60 / 24);
    var hh = Math.floor((time / 1000 / 60 / 60) % 24);
    var mm = Math.floor((time / 1000 / 60) % 60);
    var ss = Math.floor((time / 1000) % 60);
    var str = "活动倒计时：" + dd + "天" + hh + "小时" + mm + "分" + ss + "秒";
    return str;
  }
}
// base64解密
var  _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="; 
function decode (input) {  
  var output = "";  
  var chr1, chr2, chr3;  
  var enc1, enc2, enc3, enc4;  
  var i = 0;  
  input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");  
  while (i < input.length) {  
      enc1 = _keyStr.indexOf(input.charAt(i++));  
      enc2 = _keyStr.indexOf(input.charAt(i++));  
      enc3 = _keyStr.indexOf(input.charAt(i++));  
      enc4 = _keyStr.indexOf(input.charAt(i++));  
      chr1 = (enc1 << 2) | (enc2 >> 4);  
      chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);  
      chr3 = ((enc3 & 3) << 6) | enc4;  
      output = output + String.fromCharCode(chr1);  
      if (enc3 != 64) {  
          output = output + String.fromCharCode(chr2);  
      }  
      if (enc4 != 64) {  
          output = output + String.fromCharCode(chr3);  
      }  
  }  
  output = _utf8_decode(output);  
  return output;  
}
function  _utf8_decode(utftext) {  
  var string = "";  
  var i = 0;  
  var c = 0;  
  var c2 = 0;
  var c3 = 0;
  while ( i < utftext.length ) {  
      c = utftext.charCodeAt(i);  
      if (c < 128) {  
          string += String.fromCharCode(c);  
          i++;  
      } else if((c > 191) && (c < 224)) {  
          c2 = utftext.charCodeAt(i+1);  
          string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));  
          i += 2;  
      } else {  
          c2 = utftext.charCodeAt(i+1);  
          c3 = utftext.charCodeAt(i+2);  
          string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));  
          i += 3;  
      }  
  }  
  return string;  
}  
export {InitTime,decode};
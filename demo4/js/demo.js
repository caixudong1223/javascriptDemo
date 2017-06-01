// 阻止事件冒泡
function stopPP(e) {
    var evt = e || window.event;
    evt.stopPropagation ? evt.stopPropagation() : (evt.cancelBubble = true); //IE用cancelBubble=true来阻止而FF下需要用stopPropagation方法
}

// 编写一个方法 求一个字符串的字节长度
// 假设：一个英文字符占用一个字节，一个中文字符占用两个字节

// charCodeAt(i)>255是用来判断非常规字符的。如中文、日文。这些字符一个占用2个字节。所以加2。如果是常规字符，一个占用一个字节
function getBytes(str) {
    var len = str.length;
    var bytes = len;
    var i = 0;
    for (; i < len; i++) {
        if (str.charCodeAt(i) > 255) {
            bytes++;
        }
    }
    return bytes;
}   
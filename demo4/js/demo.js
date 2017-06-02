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


// JavaScript深度克隆
function cloneObject(o) {
    if (!o || 'object' !== typeof o) {  //判断o是否为对象
        return o;
    }

    var c = 'function' === typeof o.pop ? [] : {};
    var p, v;
    for (p in o) {
        if (o.hasOwnProperty(p)) {
            v = o[p];
            if (v && 'object' === typeof v) {
                c[p] = Ext.ux.clone(v);
            }
            else {
                c[p] = v;
            }
        }
    }
    return c;
}

function clone(obj) {
    var o;
    if (typeof obj === "object") {
        if (obj === null) {
            o = null;
        }
        else {
            if (obj instanceof Array) {
                o = [];
                for (var i = 0, len = obj.length; i < len; i++) {
                    o.push(clone(obj[i]));
                }
            }
            else {
                o = {};
                for (var j in obj) {
                    o[j] = clone(obj[j])
                }
            }
        }
    }
    else {
        o = obj;
    }
    return o;
}

//请实现ECMAScript 5中的Object.getPrototypeOf() 函数

function proto(object) {
    return !object ? null : "__proto__" in object ? object.__proto__ : object.constructor.prototype;
}


// 如何实现Array.prototype.forEach？
if (!Array.prototype.forEach) {
    Array.prototype.forEach = function (fn) {
        for (var i = 0; i < this.length; i++) {
            fn(this[i], i, this);
        }
    }
}

["a", "b", "c"].forEach(function (value, index, array) {
    assert(value, "Is in position " + index + " out of " + (array.length - 1));
});


//如何获取光标的水平位置？
function getX(e) {
    e = e || window.event;
    //先检查非IE浏览器，在检查IE的位置
    return e.pageX || e.clientX + document.body.scrollLeft;
}


var foo = 'hello';
(function () {
    var foo = foo || 'world';
    console.log(foo);// world
})();


// 请给出异步加载js方案
function loadScript(url, callback) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    if (script.readyState) { //IE
        script.onreadystatechange = function () {
            if (script.readyState == "load" || script.readyState == "complete") {
                script.onreadystatechange = null;
                callback();
            }
        }
    } else {
        //firefox,safari,chrome,opera
        script.onload = function () {
            callback();
        }
    }
    script.src = url;
    document.body.appendChild(script);
}

//函数记忆,判断是不是质数.
//method1:
function isPrime(n) {
    if (n < 3) {
        return true;
    } else {
        for (var i = 2; i < Math.sqrt(n); i++) {
            if (n % i == 0) {
                return false;
            }
        }
        return true;
    }
}
//method2
var isPrime2 = (function () {//hash
    var hash = {};
    return function (n) {
        if (n <= 3) { return true }
        else if (hash[n] !== undefined) {
            return hash[n];
        } else {
            for (var i = 2; i < Math.sqrt(n); i++) {
                if (n % i == 0) { return hash[n] = false }
            }
            return hash[n] = true;
        }
    }
})();


var request = new XMLHttpRequest();
request.onreadystatechange = function () {
    if (request.readyState === 4) { //成功完成
        //判断响应结果
        if (request.status === 200) {
            // 成功，通过responseText拿到响应的文本:
        } else {
            //失败，根据响应码判断失败原因:
        }
    } else {
        // HTTP请求还在继续...
    }
}

request.open("POST", url, true);
request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
request.send();
// readyState值说明
// 0,初始化,XHR对象已经创建,还未执行open
// 1,载入,已经调用open方法,但是还没发送请求
// 2,载入完成,请求已经发送完成
// 3,交互,可以接收到部分数据

// status值说明
// 200:成功
// 404:没有发现文件、查询或URl
// 500:服务器产生内部错误


//数组去重
function method1(arr) { //遍历数组法
    var newarr = [];
    for (var i = 0; i < arr.length; i++) {
        if (newarr.indexOf(arr[i]) != -1) {
            newarr.push(arr[i]);
        }
    }
    return newarr;
}


function method2(arr) { // hash 去重法
    var _arr = [],
        hash = {}
    for (var i = 0; i < arr.length; i++) {
        var item = arr[i];
        var key = typeof (item) + item; // 对象的键值只能是字符串, typeof(item) + item来去分1和'1'的情况
        console.log(key);
        if (hash[key] !== 1) {
            _arr.push(item);
            hash[key] = 1;
        }
    }
    return _arr;
}

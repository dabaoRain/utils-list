import { getQueryFromUrl } from './url'
export {
    getQueryFromUrl
}

export const add = function (a, b) {
    return a + b
}

export const isArray = function (data) {
    if (Array.isArray) {
        //Array.isArray是ES5新增的方法，兼容IE9和IE9以上浏览器。IE9以下浏览器是不支持的
        return Array.isArray(data)
    } else {
        //Object.prototype.toString.call()方法是ES3语法，兼容性强，所有浏览器都支持
        return typeof data === 'object' &&
            Object.prototype.toString.call(data) === '[object Array]'
    }
}
//判断数字类型 （正整数、负整数、正小数、负小数、0）***不包含字符串数字***
export const isPureNumber = function (num) {
    return (
        typeof num === "number" &&
        Object.prototype.toString.call(num) === "[object Number]"
    );
}

//判断数字类型 （正整数、负整数、正小数、负小数、0）***包含字符串数字***
export const isNumber = function (num) {
    //因为下面的正则在校验num为数组类型并且有值时返回的结果是true，
    //即reg.test([1])为true
    //所以在这里添加拦截
    if (isArray(num)) {
        return false
    }
    let reg = /^[+-]?[0-9]+\.?[0-9]*$/
    return reg.test(num)
}

//数字千分位formate
export const formatThousandth = function (num) {
    if (isNumber(num)) {
        //https://blog.csdn.net/moli8314/article/details/83211929
        if (num.indexOf(".") === -1) {
            num += ".";
        }
        return num
            .replace(/(\d)(?=(\d{3})+\.)/g, function ($0, $1) {
                return $1 + ",";
            })
            .replace(/\.$/, "");
    } else {
        throw new Error("请传入数字类型");
    }
}

export const formArrayGetIds = function (data) {
    let result = ""
    if (isArray(data)) {
        data.forEach((v, k) => {
            result += v.id + ","
        })
    } else {
        throw new Error("请传入数组类型");
    }
    result = result.substring(0, result.length - 1)
    return result
}


//简易版
//（这个将符合手机号前两位数规则的手机号进行了验证，后面的9位数字没有校验）
//该方法适用于只对手机号格式校验的情况
export const isTelPhone = function (tel) {
    let reg = /^1[3-9]\d{9}$/;
    return reg.test(tel);
}
//严格版(汇总现实中真实存在的手机号,这个是需要实时更新的)
//该方法适用于不只对手机号格式校验的情况，还对手机号的真实性进行校验
export const isStrictTelPhone = function (tel) {
    //所有手机号码所属平台以及最新手机号码 https://learnku.com/articles/31543
    let reg = /^1(3\d|4[5-9]|5[0-35-9]|6[2567]|7[0-8]|8\d|9[0-35-9])\d{8}$/;
    return reg.test(tel);
}


//判断是否为字符串
export const isString = function (str) {
    return (typeof str == 'string') && str.constructor == String;
}
//驼峰转连字符即 fontSize转font-size
export const humpToHyphen = function (str) {
    if (isString(str)) {
        return str.replace(/([A-Z])/g, "-$1").toLowerCase();
    } else {
        throw new Error("请传入字符串类型");
    }
}
//文本（部分文本）高亮
export const highLightWord = function (word, separator, style) {
    let styleStr = "";
    //将css样式对象转换为字符串
    if (style && Object.keys(style).length > 0) {
        for (let i in style) {
            styleStr += `${humpToHyphen(i)}:${style[i]};`;
        }
    }
    return word
        .split(separator)
        .join(`<span style="${styleStr}">${separator}</span>`);
}


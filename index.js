
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

//判断数字类型 （正整数、负整数、正小数、负小数、0）
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
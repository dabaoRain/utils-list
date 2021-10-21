import qs from 'qs'

//判断是否为对象类型（不包含数组、函数）
export const isObject = function (obj) {
    return typeof obj === 'object' &&
        Object.prototype.toString.call(obj) === '[object Object]'
}
//序列化对象 {a:1,b:2,c:3} ====> a=1&b=2&c=3
export const formateObjectStringify = function (params) {
    if (!this.isObject(params)) {
        throw new Error("请传入对象类型的数据");
    }
    //对象(参数)序列化
    return qs.stringify(params)
}

/* 
该方法用于获取哈希和history两种模式url参数（注意：url参数，不是路由参数）
http://localhost:8080/?a=1&b=2&c=3#/login
http://localhost:8080/?a=1&b=2&c=3
上面两种形式的url都可以获取到url参数对象
{a:1,b:2,c:3} 也可以通过key值来指定获取对应的属性值、
*/
export const getQueryFromUrl = function (key) {
    //key值表示获取对应的url参数对象属性值
    let parseUrl = location.search;
    let query = qs.parse(parseUrl, { ignoreQueryPrefix: true });
    //ignoreQueryPrefix把url上面的?过滤掉
    if (key) {
        if (!query[key]) throw new Error(`url参数对象不存在${key}属性的值`);
        return query[key];
    }
    //如果没有传入key值就返回整个url参数对象
    return query;
}
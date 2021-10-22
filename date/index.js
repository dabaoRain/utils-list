import { isPureNumber } from "../index.js";
//判断是否为日期类型
export const isDateType = function (date) {
    return (
        typeof date === "object" &&
        Object.prototype.toString.call(date) === "[object Date]"
    );
}
//日期格式化
export const formatDate = function (date, type = "YYYY-MM-DD HH:mm") {
    if (!date) {
        return dayjs(new Date()).format(type);
    }
    if (this.isDateType(date)) {
        return dayjs(date).format(type);
    } else {
        throw new Error("请传入日期类型");
    }
}
//获取当前日期几天前或者几天后的日期YYYY-MM-DD
export const getOneDayFromDate = function (dayNo) {
    //这里dayno需要时纯数字类型
    if (isPureNumber(dayNo)) {
        let date = new Date();
        date.setDate(date.getDate() + dayNo);
        return dayjs(date).format("YYYY-MM-DD");
    } else {
        throw new Error("请传入纯数字类型");
    }
},
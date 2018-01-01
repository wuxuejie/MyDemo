import { unescape, escape } from 'querystring';

// 清除cookie
export const clearCookie = (): void => {
    var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
    if (keys) {
        var exp = new Date();
        exp.setTime(exp.getTime());
        for (var i = keys.length; i--;) {
            document.cookie = keys[i] + '=0;expires=' + exp.toUTCString() + ';path=/';
        }
    }
};
// 设置cookie
export const setCookie = (name: string, value: {}, time: string): void => {
    let cookieVal: string;
    if (typeof value !== 'string') {
        cookieVal = JSON.stringify(value);
    } else {
        cookieVal = value;
    }
    var strsec = getsec(time);
    var exp = new Date();
    exp.setTime(exp.getTime() + strsec * 1);
    document.cookie = name + '=' + escape(cookieVal) + ';expires=' + exp.toUTCString() + ';path=/';
};

// 读取cookies
// tslint:disable-next-line:no-unused-expression
export const getCookieString = (name: string): string => {
    try {
        const reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
        let arr: RegExpMatchArray | null;
        if (arr = document.cookie.match(reg)) {
            return unescape(arr[2]);
        } else {
            return '';
        }
    } catch (e) {
        return '';
    }
};
// 读取cookies
// tslint:disable-next-line:no-unused-expression
export const getCookie = <T>(name: string): T => {
    try {
        const reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
        let arr: RegExpMatchArray | null;
        if (arr = document.cookie.match(reg)) {
            const cookieVal: {} = unescape(arr[2]);
            return <T> cookieVal;
        } else {
            return <T> {};
        }
    } catch (e) {
        return <T> {};
    }
};

function getsec(str: string): number {
    // tslint:disable-next-line:radix
    const str1: number = parseInt(str.substring(1, str.length)) * 1;
    const str2: string = str.substring(0, 1);
    if (str2 === 's') {
        return str1 * 1000;
    } else if (str2 === 'h') {
        return str1 * 60 * 60 * 1000;
    } else if (str2 === 'd') {
        return str1 * 24 * 60 * 60 * 1000;
    }
    throw '参数错误';
}
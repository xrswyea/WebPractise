let str =
    "大牛子小牛子牛子牛子牛牛牛牛大牛子小牛子牛子牛子牛牛牛牛大牛子小牛子牛子牛子牛牛牛牛大牛子小牛子牛子牛子牛牛牛牛大牛子小牛子牛子牛子牛牛牛牛大牛子小牛子牛子牛子牛牛牛牛大牛子小牛子牛子牛子牛牛牛牛大牛子小牛子牛子牛子牛牛牛牛大牛子小牛子牛子牛子牛牛牛牛";
console.log(str.match(/牛子/g));
str = str.replace(/牛子/g, function (match) {
    return "**";
});
console.log(str);

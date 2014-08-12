/**
 * Created by a2014 on 14-8-11.
 */
var util = {
    createEl: function (domName, cfg) {
        var el = document.createElement(domName);
        this.recursion(el, cfg);
        return el;
    },
    //递归函数
    recursion: function (dom, o) {
        for (var i in o) {
            if (Object.prototype.toString.call(o[i]) == '[object Object]') {
                this.recursion(dom[i], o[i]);
            } else {
                dom[i] = o[i];
            }
        }
    },
    randomColor: function () {
        return 'rgb(' + Math.ceil(Math.random() * 10000 % 255) + ',' + Math.ceil(Math.random() * 10000 % 255) + ',' + Math.ceil(Math.random() * 10000 % 255) + ')';
    }
}
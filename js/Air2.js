/**
 * Created by a2014 on 14-8-12.
 */
function Air2(opt) {
    this.delayTime = 0;
    this.source = opt.source || {x: 100, y: 30};
    this.parent = opt.parent || document.body;
    this.init();
}
Air2.prototype = {
    init: function () {
        var me = this;
        this.el = util.createEl('div', {
            className: 'air',
            style: {
                top: me.source.y + 'px',
                left: me.source.x + 'px',
                transform: 'rotate(180deg)',
                webkitTransform: 'rotate(180deg)'
            }
        });
        this.parent.appendChild(this.el);
    },
    fire: function () {
        var me = this;
        setTimeout(function () {
            console.log(window.screen.availHeight - me.source.y);
            new Bullet({
                x: me.source.x,
                y: window.screen.height - me.source.y - 120,
                color: 'green'
            }).move(-100);
            me.timeout = setTimeout(function () {
                me.delay(0).fire();
            }, 100)
        }, me.delayTime)
        return this;
    },
    delay: function (time) {
        this.delayTime = time;
        return this;
    },
    destroy: function (delay) {
        var me = this;
        setTimeout(function () {
            clearTimeout(me.timeout);
            me.parent.removeChild(me.el);
        }, me.delayTime)
    }
}
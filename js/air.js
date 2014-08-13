/**
 * Created by a2014 on 14-8-12.
 */
function Air(opt) {
    this.delayTime = 0;
    this.source = opt.source || {x: 100, y: 30};
    this.parent = opt.parent;
    this.bullet = opt.bullet;
    this.opt = opt;
    this.init();
    this.addEvent();
}
Air.prototype = {

    init: function () {
        var me = this;
        this.el = util.createEl('div', {
            className: 'air',
            style: {
                bottom: me.source.y + 'px',
                left: me.source.x + 'px'
            }
        });
        this.parent.appendChild(this.el);
    },
    addEvent: function () {
        var me = this;
        this.parent.addEventListener('touchmove', function (event) {
            event.preventDefault();
            var position = event.touches[0];
            var x = position.clientX, y = window.screen.height - position.clientY + 10;
            me.el.style.left = x + 'px';
            me.el.style.bottom = y + 'px';
            me.source.x = x;
            me.source.y = y;
        })
    },
    delay: function (time) {
        this.delayTime = time;
        return this;
    },
    fire: function () {
        var me = this;
        setTimeout(function () {
            new Bullet({
                x: me.source.x,
                y: me.source.y,
                color: me.opt.bulletTheme
            }).move(window.screen.availHeight + 200);

            setTimeout(function () {
                me.delay(0).fire();
            }, 200)
        }, me.delayTime)

    }

}
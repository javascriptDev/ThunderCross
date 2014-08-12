/**
 * Created by a2014 on 14-8-12.
 */
function Air(opt) {
    this.source = opt.source || {x: 100, y: 30};
    this.parent = opt.parent;
    this.bullet = opt.bullet;
    this.init();
    this.addEvent();
    this.fire();
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
    fire: function () {
        var me = this;

        new Bullet({
            x: me.source.x,
            y: me.source.y
        }).move();

        setTimeout(function () {
            me.fire();
        }, 100)
    }

}
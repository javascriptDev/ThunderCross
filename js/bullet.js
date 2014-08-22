/**
 * Created by a2014 on 14-8-12.
 */
function Bullet(o) {
    this.opt = o;
    this.mpers = 100;
    this.init();
}

Bullet.prototype = {
    init: function () {
        var me = this;
        this.el = util.createEl('div', {
            className: 'bullet ' + me.opt.bulletTheme,
            style: {
                bottom: me.opt.y + 40 + 'px',
                left: me.opt.x + 15 + 'px'
            }
        })
        document.body.appendChild(this.el);
    },
    move: function (target) {
        var me = this;
        var distance = window.screen.height - me.opt.y;
        var s = this.el.style;
        s.webkitTransition = 'all ' + distance / this.mpers + 's cubic-bezier(.05,.75,.05,.76)';
        this.el.addEventListener('webkitTransitionEnd', function () {
            me.destroy();
        })
        setTimeout(function () {
            s.bottom = target + 'px';
        }, 16)
    },
    destroy: function () {
        this.el.parentNode.removeChild(this.el);
    }
}
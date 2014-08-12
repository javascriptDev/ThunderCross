/**
 * Created by a2014 on 14-8-12.
 */
function Bullet(o) {
    this.position = o;
    this.mpers = 100;
    this.init();
}

Bullet.prototype = {
    init: function () {
        var me = this;
        this.el = util.createEl('div', {
            className: 'bullet',
            style: {
                height: '10px',
                width: '10px',
                borderRadius: '5px',
                background: 'red',
                bottom: me.position.y + 40 + 'px',
                left: me.position.x + 15 + 'px',
                position: 'absolute'
            }
        })
        document.body.appendChild(this.el);
    },
    move: function () {
        var me = this;
        var distance = window.screen.height - me.position.y;
        var s = this.el.style;
        s.webkitTransition = 'all ' + distance / this.mpers + 's cubic-bezier(.05,.75,.05,.76)';
        this.el.addEventListener('webkitTransitionEnd', function () {
            me.destroy();
        })
        setTimeout(function () {
            s.bottom = window.screen.availHeight + 100 + 'px';
        }, 16)
    },
    destroy: function () {
        this.el.parentNode.removeChild(this.el);
    }
}
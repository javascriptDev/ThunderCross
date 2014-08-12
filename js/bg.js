/**
 * Created by a2014 on 14-8-11.
 */

function BG(o) {
    this.height = o.height;
    this.init();
}
BG.prototype = {
    init: function () {
        var me = this;
        this.el = util.createEl('div', {
            className: 'bg-c',
            style: {
                backgroundColor: util.randomColor(),
                height: me.height + 'px'
            }
        })
    },
    destroy: function () {
        this.el.parentNode.removeChild(this.el);
    }

}
(function(window) {

    iQuery.fn.extend({
        attr: function(name, value) {
            if (value === undefined) {
                return this[0].getAttribute(name);
            } else {
                return this.each(function() {
                    this.setAttribute(name, value);
                });
            }
        },
        text: function(text) {
            if (text === undefined) {
                return this[0].innerText;
            } else {
                return this.each(function() {
                    this.innerText = text;
                });
            }
        },
        html: function(html) {
            if (html === undefined) {
                return this[0].innerHTML;
            } else {
                return this.each(function() {
                    this.innerHTML = html;
                });
            }
        }
    });


})(window);

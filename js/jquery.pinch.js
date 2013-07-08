(function($) {

    $.fn.pinchReset = function() {
        this.data('pinch', {scale: 1, x: 0, y: 0});
        this.find('.pinch-inner').css('transform', '');
        return this;
    };


    $.fn.pinch = function(event) {
        var origin = this.data('pinch'),
            delta = {
                scale: origin.scale * event.gesture.scale,
                x: origin.x + event.gesture.deltaX,
                y: origin.y + event.gesture.deltaY
            };
        this.data('pinch-delta', delta);
        this.find('.pinch-inner').css(
            'transform',
                'translate3d(' + delta.x + 'px, ' + delta.y + 'px, 0)' +
                'scale3d('+ delta.scale + ','+ delta.scale + ',1) '
        );
        return this;
    };

}(jQuery));

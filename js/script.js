$(document).ready(function () {

    $(document).hammer().on('transform drag', '.pinch', function (event) {
        if (event.gesture.touches.length > 1) {
            $(this).pinch(event);
            event.gesture.preventDefault();            
        }
    });


    $(document).hammer().on('release', '.pinch', function (event) {
        if (event.gesture.touches.length > 1) {
            var delta = $(this).data('pinch-delta');
            $(this).data('pinch', delta);
            event.gesture.preventDefault();
        }
    });


    $(document).hammer().on('tap', '.pinch', function (event) {
        $(this).pinchReset();
        event.gesture.preventDefault();

    });


    $('.pinch').each(function () {
        $(this).pinchReset();
    });

});

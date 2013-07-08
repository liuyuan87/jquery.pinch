$(document).ready(function () {

    // Transfrom and Drag the .pinch element
    $(document).hammer().on('transform drag', '.pinch', function (event) {
        if (event.gesture.touches.length > 1) {
            $(this).pinch(event);
            event.gesture.preventDefault();            
        }
    });

    // Store the changes in .pinch[data-pinch] on Release
    $(document).hammer().on('release', '.pinch', function (event) {
        if (event.gesture.touches.length > 1) {
            var delta = $(this).data('pinch-delta');
            $(this).data('pinch', delta);
            event.gesture.preventDefault();
        }
    });

    // Reset the .pinch on tap
    $(document).hammer().on('tap', '.pinch', function (event) {
        $(this).pinchReset();
        event.gesture.preventDefault();
    });

});

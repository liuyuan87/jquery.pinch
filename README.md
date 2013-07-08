# jquery.pinch.js

Pinch Zoom specific elements while the rest of the page stays unaffected.

## Dependencies

- [jQuery](https://github.com/jquery/jquery)
- [Hammer.js](https://github.com/EightMedia/hammer.js)
- [jquery.hammer.js](https://github.com/EightMedia/hammer.js/blob/master/plugins/jquery.hammer.js)

## Get on with it.

### Markup (html)
    
    <div class='pinch'>
        <div class='media text-center pinch-inner'>
            <img class='img' src='http://placekitten.com/g/512'>
        </div>
    </div>

### Listeners (js)

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

### Stylesheet (css)
    
    .pinch {
        overflow: hidden;
    }
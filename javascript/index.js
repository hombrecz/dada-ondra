$(document).ready(function() {
    $('#navigation').affix({
        offset: {
            top: function() { return $('header').height(); }
        }
    });
});


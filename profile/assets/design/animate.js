$(document).ready(function() {

    $(window).scroll(function() {
        $('.hideme').each(function(i) {
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if (bottom_of_window > bottom_of_object) {
                $(this).animate({
                    'opacity': '1'
                }, 200);
            }
        });

    });

    var col_bar = "<div class='color-bar-1' />";
    var col_bar_padding = "<div class='color-bar-1 col-bar-spacing' />";

    $('.top-color-bar').prepend(col_bar);
    $('.top-color-bar-padding').prepend(col_bar_padding);
    $('.bottom-color-bar').append(col_bar);
    $('.bottom-color-bar-padding').append(col_bar_padding);


    jQuery('.scrollbar-external').scrollbar({
        "autoScrollSize": false,
        "scrollx": $('.external-scroll_x'),
        "scrolly": $('.external-scroll_y')
    });

    var offset = 250;
    var duration = 1000;
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.back-to-top').fadeIn(duration);
        } else {
            jQuery('.back-to-top').fadeOut(duration);
        }
    });



    jQuery('.back-to-top').click(function(event) {
        event.preventDefault();
        jQuery('html, body').animate({
            scrollTop: 0
        }, duration);
        return false;
    })

    // var height = $( ".col-padding" ).height();
    // $(".column").css("height",height);

    var idArray = [];
    $('.col-padding').each(function() {
        idArray.push("#" + this.id);
    })
    if (idArray.length < 5) {
        console.log("hello")
        $(".column").css("visibility", "hidden");
    }

    $(".middle-right").click(function() {
        $("div").animate({
            scrollLeft: '+=316'
        }, 800);
    });
    $(".middle-left").click(function() {
        $("div").animate({
            scrollLeft: 0
        }, 800);
    });

    $(".listContentItem").hover(function() {
        $(".listContentItem:hover a").removeClass("hidden");
        $(".listContentItem:hover a").css("display", "");
    }, function() {
        $(".listContentItem a").css("display", "none");
    })

    $(".nav-item").hover(function() {
        $(this).addClass("open");
        console.log("hello")
    }, function() {
        $(this).removeClass("open");
    })

    $(".dropdown-item").hover(function() {
        $(this).css("background", "var( --active-nav-text-bakground-color)");;
    }, function() {
        $(this).css("background", "");
    })


});

function spanClick() {
    $(document).ready(function() {
        $("#producet .col-lg-3").css("display", "");
        $("#producet-details").fadeOut("slow");
    })
}
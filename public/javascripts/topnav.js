$(document).ready(function () {
    // Stick the #nav to the top of the window
    var nav = $("#nav");
    var navHomeY = nav.offset().top;
    var isFixed = false;
    var $w = $(window);
    var windowWidth = $("#nav").width();
    var navButtonsWidth = $("#homeButton").width() +
        $("#blogButton").width() +
        $("#teamsButton").width() +
        $("#sponsorsButton").width() +
        $("#calendarButton").width() +
        $("#contactButton").width();
    // console.log(windowWidth + "-" + navButtonsWidth + "=" + (windowWidth-navButtonsWidth));
    $("#navGap").css("width", (windowWidth-navButtonsWidth)*0.75 + "px");
    $w.scroll(function () {
        // Scrolling handler
        var scrollTop = $w.scrollTop();
        var shouldBeFixed = scrollTop > navHomeY;
        if (shouldBeFixed && !isFixed) {
            nav.css({
                position: "fixed",
                top: 0,
                left: nav.offset().left,
                width: nav.width()
            });
            isFixed = true;
        } else if (!shouldBeFixed && isFixed) {
            nav.css({
                position: "static"
            });
            isFixed = false;
        }
        // console.log("fixed");
    });
});
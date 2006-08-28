var win = $(window);

fxel = $('nav'), eloffset = fxel.offset().top;
contentTwo = $(".content-two");
win.scroll(function () {
    
    if (eloffset < win.scrollTop()) {
        contentTwo.css("height", "45px");
        fxel.addClass("fixed");
        $(".arrow-up").css("padding-top", "50px");
        $("#brand-name").css("display", "table-cell");
    } else {

        fxel.removeClass('fixed');
        contentTwo.css("height", "6%");
        console.log(contentTwo.css("height"));
        $(".arrow-up").css("padding-top", "15px");
        $("#brand-name").css("display", "none");
        
    }
});

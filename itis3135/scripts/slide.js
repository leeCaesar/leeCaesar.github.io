$(function() {
    var pics =[
        ["images/Pic0.jpg"],
        ["images/Pic1.jpg"],
        ["images/Pic2.jpg"],
        ["images/Pic3.jpg"],
        ["images/Pic4.jpg"],
        ["images/Pic5.jpg"],
        ["images/Pic6.jpg"],
        ["images/Pic7.jpg"]
    ];

    var count = pics.length;
    var cur = 0;

    var $imgs = new Array();
    for(var i=0;i<count-1;i++) {
        $imgs.push($('<img>').attr('src', pics[i]));
    }

    for(var i=0;i<count-1;i++) {
        var $li = $('<li>').append($imgs[i]);
        $('#slide').append($li);
    }
    $('#N').click(function() {
        $('#' + cur).fadeOut('slow');
        cur += 1;
        $('#' + cur).fadeIn('slow');
    });
    $('#P').click(function() {
        $('#' + cur).fadeOut('slow');
        cur -= 1;
        $('#' + cur).fadeIn('slow')
    })
});
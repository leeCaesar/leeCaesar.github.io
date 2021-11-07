$(document).ready(function() {


        // preload the image for each link
        var pics = [
                ["Activity10_thumbnails/t1.jpg"],
                ["Activity10_thumbnails/t2.jpg"],
                ["Activity10_thumbnails/t3.jpg"],
                ["Activity10_thumbnails/t4.jpg"],
                ["Activity10_thumbnails/t5.jpg"],
                ["Activity10_thumbnails/t6.jpg"],
                ["Activity10_images/h1.jpg"]
        ];

        var $imgs = new  Array();
        for(var i=0;i<pics.length;i++) {
                $imgs.push($('<img>').attr('src', pics[i]));
        }
        for(var j=0;j<pics.length-1;j++) {
                var $li = $('<li>').append($imgs[j]);
                $('#image_list').append($li);
        }
        // set up the event handlers for each link
        $(function () {
                $('#caption').fadeOut(3000).fadeIn(3000);
                $('#image').fadeOut(3000).fadeIn(3000);
                $('#caption').animate( {
                        fontSize: '2em'
                }, 3000);
               // $('#image')

        });
    	// get the image URL and caption for each image and animate the caption
        // cancel the default action of each link


    // move the focus to the first link

}); // end ready
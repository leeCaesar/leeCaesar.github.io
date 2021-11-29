$(document).ready(function(){
  /*  var Url = "http://api.flickr.com/services/feeds/photos_public.gne?" + 
    "id=82407828@N07&format=json&jsoncallback=?&tags=vectacorp";  */
    var Url = "http://api.flickr.com/services/feeds/photos_public.gne?" + 
    "id=82407828@N07&format=json&jsoncallback=?&tags=vectacorpbuilding"
    $.getJSON(Url, function(data) {
        var htm = '';
            $.each(data.items, function(key, value) {
                htm += value.description;
                htm = htm.replace(
                    "<p><a href=\"https:\/\/www.flickr.com\/people\/82407828@N07\/\">zakruvalcaba<\/a> posted a photo:<\/p>", "");
                htm = htm.replace('width=\"240\" height=\"180\"', 'data-lightbox="building" width=\"240\" height=\"180\"');
            });
        $("#new_building").html(htm);
    });
    lightbox.option({
        resizeDuration: 200,
        wrapAround: true
    });
});
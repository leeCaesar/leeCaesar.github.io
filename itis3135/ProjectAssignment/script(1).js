$(document).ready(function() {
    const Url = "https://leecaesar.github.io/itis3135/ProjectAssignment/index.json";
    $.getJSON(Url, function(data) {
        $.each(data, function()  {
            $.each(this, function(key, value) {
                $("#index").append(
                    '<img src="' + value.image + '" alt="placeholder for photo"/><br />' +
                    '<div class="aboutme-links">' + 
                         '<a href="' + value.IG + '" target="_blank">Instagram  </a>' +
                         '<a href="' + value.SC + '" target="_blank">Soundcloud</a>' +
                         '</div>'
                     );
             });
         });
     });
 });
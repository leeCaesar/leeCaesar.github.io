$(document).ready(function() {
    const url = "https://leecaesar.github.io/itis3135/ProjectAssignment/aboutme.json";
    $.getJSON(url, function(data) {
        $.each(data, function()  {
            $.each(this, function(key, value) {
                $("#aboutme").append(
                    '<img src="' + value.image + '" alt="placeholder for photo"><br />' + 
                        '<h2>' + value.Name + '</h2><br />' + 
                        '<h3>' + value.title + '</h3><br />' + 
                        '<p>' + value.about + '</p><br />' +
                        '<div class="aboutme-links">' + 
                        '<a href="' + value.IG + '" target="_blank">Instagram  </a>' +
                        '<a href="' + value.SC + '" target="_blank">Soundcloud</a>' +
                        '</div>'
                    );
            });
        });
    });
});

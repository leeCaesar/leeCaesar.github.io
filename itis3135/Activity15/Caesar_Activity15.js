$(document).ready(function(){
    const Url = "https://leecaesar.github.io/itis3135/Activity15/facultyList.json";

  /*  $.ajax({
        url: Url,
        type: 'get',
        dataType: 'json',
        contentType: 'text/plain',

        beforeSend: function() {
            $("#team").html("Loading...");
        },
        timeout: 10000,
        success: function(data) {
            var List = '';
            var ListAdd = '';
            $.each(data['data']['List'], function(i, item) {
                ListAdd = '<img src="' + item.image + '">\n' + 
                        '<h2>' + item.full_name + '</h2>\n' + 
                        '<h3>' + item.department + '</h3>\n' + 
                        '<p>' + item.bio + '</p>\n';
                List = List+ListAdd;
            });
            $('#faculty').html(List);
        },
        error: function (data) {
            alert("Error while fetching data.");
        }
    });  */
    $.getJSON(Url, function(data) {
        $.each(data, function()  {
            $.each(this, function(key, value) {
                console.log(value);
                $("#faculty").append(
                    '<img src="' + value.image + '"><br />' + 
                        '<h2>' + value.full_name + '</h2><br />' + 
                        '<h3>' + value.department + '</h3><br />' + 
                        '<p>' + value.bio + '</p><br />'
                );
            });
        });
    });
});

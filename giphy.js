
    $(document).ready(function() { 

        $('button').on('click', function() {
            var sport = $(this).data('name');
            var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + sport + "&api_key=ZhjEt1f21j0sc7vPnptYYCzsAONailCM&limit=10";
    
            $.ajax({
                url: queryURL,
                method: 'GET'
            })
                .then(function(response) {
    
    
    
                    var results = response.data;
    
                    for (var i = 0; i < results.length; i++) {
    
                        var sportDiv = $('<div/>');
    
                        var p =$('<p/>');
    
                        p.text(results[i].rating);
    
                        var sportImage = $('<img/>');
    
                        sportImage.addClass('spImg')
    
                        sportImage.attr('src', results[i].images.fixed_height.url);
    
                        sportImage.attr('data-still', results[i].images.fixed_height_still.url)
    
                        sportImage.attr('data-animate', results[i].images.fixed_height.url)
    
                        .attr('data-state', 'still');
    
                        sportDiv.append(p);
    
                        sportDiv.append(sportImage);
    
                        sportDiv.prependTo($('#gifs'));
                    }
    
                    $('.spImg').on('click', function() {
                
                        var state = $(this).attr('data-state'); 
    
                        if (state == 'still') {
                        
                        $(this).attr('src', $(this).data('animate'));
                        
                        $(this).attr('data-state', 'animate');
    
                        } else {
                                
                        $(this).attr('src', $(this).data('still'));
                        
                        $(this).attr('data-state', 'still');
                        }      
                    });
                });
        });
    
        var sport = [''];
    
        
        //Adding the new sport    
    
            $('#theButton').on('click', function(){ 
                var sportButton = $("#gif-input").val();
                var newButton = $("<button/>").addClass( "btn btn-info sport").attr('data-name',sportButton).html(sportButton).css({'margin': '5px', 'background-color': 'rgb(33, 53, 145)'});
                
                $("#sportButtons").append(newButton);
    
                queryURL = "https://api.giphy.com/v1/gifs/search?q=" + sportButton + "&api_key=dc6zaTOxFJmzC&limit=10";
    
                $.ajax({
                url: queryURL,
                method: 'GET'
                })
    
                .done(function(response) {
    
                var results = response.data;
    
                    for (var i = 0; i < results.length; i++) {
    
                        var sportDiv = $('<div/>');
    
                        var p =$('<p/>');
    
                        p.text(results[i].rating);
    
                        var sportImage = $('<img/>');
    
                        sportImage.addClass('anImg');
    
                        sportImage.attr('src', results[i].images.fixed_height_still.url);
    
                        sportImage.attr('data-still', results[i].images.fixed_height_still.url);
    
                        sportImage.attr('data-animate', results[i].images.fixed_height.url)
    
                        .attr('data-state', 'still');
    
                        sportDiv.append(p);
    
                        sportDiv.append(sportImage);
    
                        sportDiv.prependTo($('#gifs'));
                    }
    
                    $('.anImg').on('click', function() {
                
                        var state = $(this).attr('data-state'); 
    
                        if (state == 'still') {
                        
                        $(this).attr('src', $(this).data('animate'));
                        
                        $(this).attr('data-state', 'animate');
    
                        } else {
                                
                        $(this).attr('src', $(this).data('still'));
                        
                        $(this).attr('data-state', 'still');
                        }      
                    });
                });
    
                $("#gif-input").val("");
                return false;
            })
      
    });

   
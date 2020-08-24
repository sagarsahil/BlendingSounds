function update(){
    $('#homepageItems').val("");
    $('#indicators').val("");
    var allwords = $('#inputTextArea').val();
    if (allwords=="") return;
    
    allwordssplit=allwords.split("\n")
   
    var response='';
    var indicator='';
    for (var i = 0; i < allwordssplit.length; i++) {
        var str = allwordssplit[i];
        var arr;
        if(str.indexOf("-")==-1)
        {
            arr = str.split("");
        }
        else
        {
            arr = str.split("-");
        }
        
        var chars;
        response += '<div class="item btn-toolbar"> ';
        for (chars = 0; chars < arr.length; chars++) {
            if(chars==1)
            {
                response += '<button type="button" class="btn-warning btn-lg">'+arr[chars] + "</button>";
            }
            else
            {
                response += '<button type="button" class="btn-primary btn-lg">'+arr[chars] + "</button>";    
            }
            
            }
        response +=' </center></div>';
        indicator += '<li data-target="#myCarousel" data-slide-to="'+i+'"></li>';
    }
    $('#homepageItems').html(response);
    $('#indicators').html(indicator);
    $('.item').first().addClass('active');
    $('.carousel-indicators > li').first().addClass('active');
    $("#myCarousel").carousel({
        keyboard: true,
        wrap: false
      });
    hide();
 };

 function hide(){
    if($('#btnhide').text()=="Hide")
    {
        $('#inputTextArea').hide();
        $('#btngenerate').hide()
        $('#instructions').hide()
        
        $('#btnhide').text("Show")
    }
    else
    {
        $('#inputTextArea').show();
        $('#btngenerate').show();
        $('#instructions').show();
        $('#btnhide').text("Hide");
    }
 }

 $(document).bind('keyup', function(e) {
    if(e.which == 39){
        $("#myCarousel").carousel('next');
    }
    else if(e.which == 37){
        $("#myCarousel").carousel('prev');
    }
});
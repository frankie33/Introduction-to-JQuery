$(document).ready(function(){    
    $(".testPage").hover(function(){
        $(this).css("font-size", "45px");
    }, function(){
        $(this).css("font-size", "25px");
    });
});

$(document).ready(function(){    
    $("h1").dblclick(function(){
        $(this).css("color", "blue");
    });
});
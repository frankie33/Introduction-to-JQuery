/*EXAMPLE 1

This will change the css when a user hovers over an area with a class of 'p1'. 
Since we are using hover, we have to invoke both mouseenter and mouseleave by 
having two functions inside the hover() method. When the mouse enters the .p1 area,
it will change to Times New Roman, and when it leaves, it will change back to what it was originally, which is Georgia.

$(document).ready(function(){    
    $(".p1").hover(function(){
        $(this).css("font-family", "Times New Roman");
    }, function(){
        $(this).css("font-family", "Georgia");
    });
});*/

/*EXAMPLE 2

If you noticed, there is a button in your HTML that currently doesn't do anything.
If you add the code below, when you click on the button, it will hide all the pets with the class of `.pets`.

$(document).ready(function(){    
    $("button").click(function(){
        $(".pets").hide();
    });
});*/

/*EXAMPLE 3

When a user double clicks on an element with an id of 'rainbows', an alert will appear saying "You double clicked me!".

$(document).ready(function(){    
    $("#rainbows").dblclick(function(){
        alert("You double clicked me!");
    });
});*/

/*EXAMPLE 4

This will change the background color of the inputs to lightblue after the user clicks into an input.

$(document).ready(function(){    
    $("input").focus(function(){
       $(this).css("background-color", "lightblue");
    });
});*/

/*EXAMPLE 4

This will change the font color to red after you have released a key that was pressed.
You can hold the key down for as long as you would like, but the color won't change until you release it.
Once you release it, all letters will be red.*/

$(document).ready(function(){
    $("input").keyup(function(){
        $(this).css("color", "red");
    });
});

/*Samples

$(document).ready(function(){    
    $("p").click(function(){
        $(this).hide();
    });
});
(Add code into your jquery.js file within your starter project that targets all <div> tags
 and uses the .hide() method. When you run it, if you click on any <div> on your webpage, 
it should disappear. Every animal listed is wrapped in a div tag.)*/ 

/*$(document).ready(function(){    
    $("p").click(function(){
        $(this).addClass("blue");
    });
});

Add similar jQuery code to your jQuery starter project, so when you click on any h1 tag,
the class blue will be added to it. The class of blue is already added to your CSS file.*/

/*$(document).ready(function(){    
    $("p").click(function(){
        $(this).css("color", "orange");
    });
});

Add similar code to the above jQuery to your starter project so if you click on the header tag, 
the "Adopt A Pet" text will change to purple.*/
"use strict";
$(document).ready(function(){ 
    $('.backtotop').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 300); 
        return false; 
    }); 
});
var active = false;
$(document).ready(function(){ 
    
    if (active == false) {
        $('.banner, .barActive').mouseenter(function(){ 
            $(".barActive").show(); 
        }).mouseleave(function(){
            if (active != true) {
                $(".barActive").hide(); 
            }
        });
    }

    $('.banner').click(function(){
        if ($('.barActive').css("visibility") != "hidden" && active == false) {
            $(".barActive").show(); 
            active = true;
            
        } else {
            $(".barActive").hide(); 
            active = false;
        }
        
    });
    $( window ).resize(function() {
        var windowWidth = $(window).width();
        if (windowWidth >= 580*.98) {
            $(".barActive").hide(); 
        }
    });
});
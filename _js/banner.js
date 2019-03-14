"use strict";
$(document).ready(function(){ 
    $('.banner, .barActive').mouseenter(function(){ 
        $(".barActive").show(); 
        return false; 
    }).mouseleave(function(){
        $(".barActive").hide(); 
        return false; 
    }); 
});

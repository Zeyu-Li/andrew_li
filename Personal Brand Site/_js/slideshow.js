$(document).ready(function() {
    
    var x;
    var y = false;
    var go = true;
    
    function turn() {
        
       if (x == null) {
           
           x=0;
           
       } 
        
        if (x == 0) {
            
            $(".slideshow").fadeTo(200,1);
            $(".slideshow").attr({src: "../_images/artwork1.png", title: "Vector Planets"}).delay(2300);
            while (y) {;}
            $(".slideshow").fadeTo(200,.6);
            

            $(".wButton").eq(3).css({"background-color": ""});
            $(".wButton").eq(x).css({"background-color": "#fff"}).fadeIn();

            x++;
            
        } else if (x==1) {
            
            
            $(".slideshow").fadeTo(200,1).attr({src: "../_images/artwork2.png", title: "3D Wrieframe"}); 
            $(".slideshow").delay(2300);
            while (y) {;}
            $(".slideshow").fadeTo(200,.6);
                        
            $(".wButton").eq(x-1).css({"background-color": ""});
            $(".wButton").eq(x).css({"background-color": "#fff"}).fadeIn();
            
            x++;
            
        } else if (x == 2) {
            
            $(".slideshow").attr({src: "../_images/artwork3.png", title: "3D Taris Render"}); 
            $(".slideshow").fadeTo(200,1).delay(2300);
            while (y) {;}
            $(".slideshow").fadeTo(200,.6);
                        
            $(".wButton").eq(x-1).css({"background-color": ""});
            $(".wButton").eq(x).css({"background-color": "#fff"}).fadeIn();
            
            x++;
            
        } else if (x == 3) {
            
            $(".slideshow").attr({src: "../_images/artwork4.png", title: "Website Building"}); 
            $(".slideshow").fadeTo(200,1).delay(2300);
            while (y) {;}
            $(".slideshow").fadeTo(199,.6);
            
            
            $(".wButton").eq(x-1).css({"background-color": ""});
            $(".wButton").eq(x).css({"background-color": "#fff"}).fadeIn();
            
            x = 0;
            
            clearInterval(timer);
            
        }
        
    }
    
    turn();
    
    function temp() {
        while (go) {
            timer = setTimeout(turn, 2700);
        }
    }
    
    temp();
    
//    $(function() {
//        
//        $(".slideshow").hover(pause, unpause)
//        
//    })
//    
//    $(function() {
//        
//        $(".slideshow").on("mouseleave", unpause)
//        
//    })
//    
//    function pause () {
//        
//        y = true;
//        
//    }
//    
//    function unpause () {
//        
//        y = false;
//        
//    }
    
                  
});
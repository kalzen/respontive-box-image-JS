function resize()
{   
    document.getElementById("img").style.marginTop = "0px";
    document.getElementById("img").style.marginheight = "0px";
     document.getElementById("img").style.width  = "auto";
     document.getElementById("img").style.height  = "auto";
          document.getElementById("left-detailpost").style.width  = "auto";
       document.getElementById("left-detailpost").style.height  = "auto";
    var minheight =  $(window).height()*50/100;
    var maxWidth = $(window).width() - 400;
    var minWidth = 600;
    var maxHeight =$(window).height()*90/100;
     if ($('#img').height() < minheight)
     {
         document.getElementById("img").style.height = minheight +"px";
         if ( $('#img').width() > maxWidth )
         {
              document.getElementById("img").style.width = maxWidth +"px";
         }
         if ( $('#img').width() < 600 )
         {
            document.getElementById("left-detailpost").style.width = "600px";
             document.getElementById("img").style.marginRight =( 600 - $('#img').width())/2 + "px";
         }
          document.getElementById("box-detailpost").style.height = minheight +"px";
          document.getElementById("right-detailpost").style.height = minheight +"px";
     }
     else if ($('#img').height() > minheight )
     {
         if ( $('#img').width() < 600 )
         {
            document.getElementById("left-detailpost").style.width = "600px";
             document.getElementById("img").style.marginRight =( 600 - $('#img').width())/2 + "px";
         }
         if ($('#img').height() < $(window).height()*90/100){
           document.getElementById("box-detailpost").style.height = $('#img').height() +"px";
          document.getElementById("right-detailpost").style.height = $('#img').height() +"px";
          document.getElementById("left-detailpost").style.height = $('#img').width() +"px";
          }
          else
          {
         document.getElementById("box-detailpost").style.height = $(window).height()*90/100 +"px";
          document.getElementById("right-detailpost").style.height = $(window).height()*90/100 +"px";
          document.getElementById("left-detailpost").style.height = $(window).height()*90/100 +"px";
           document.getElementById("img").style.height =$(window).height()*90/100 +"px";
          if ($('#img').width() > maxWidth)
          {
            
          document.getElementById("img").style.width = maxWidth +"px";
          }
         }
     }

     else
     {
         document.getElementById("box-detailpost").style.height = $('#img').height() +"px";
          document.getElementById("right-detailpost").style.height = $('#img').height() +"px";
     }
          if ($(window).height() > $('#box-detailpost').height())
     {
        document.getElementById("box-detailpost").style.marginTop =( $(window).height() - $('#box-detailpost').height())/2 + "px";
    }
    else
    {
         document.getElementById("box-detailpost").style.height =  $(window).height()*70/100;
        document.getElementById("box-detailpost").style.marginTop = "40px";
    }
            document.getElementById("box-detailpost").style.marginLeft =( $(window).width() - $('#box-detailpost').width())/2 + "px";
        document.getElementById("right-detailpost").style.height = $('#box-detailpost').height() +"px";
    
     if ($('#left-detailpost').width() < maxWidth  && $('#left-detailpost').height() < maxHeight)
     {
     //
     document.getElementById("left-detailpost").style.height  = $('#img').height()+"px";
    document.getElementById("right-detailpost").style.height  = $('#left-detailpost').height()+"px";
     }
     else if ($('#left-detailpost').width() > maxWidth)
     {
       document.getElementById("left-detailpost").style.width  = maxWidth+ "px";
   
     }
      else if ($('#left-detailpost').height() > maxHeight)
     {
       document.getElementById("left-detailpost").style.height  = maxHeight+ "px";
    
     } 
     else
    {
        // nothing
     } 
     
     // this code will make your box detail will resize with per size image and take it show center screen

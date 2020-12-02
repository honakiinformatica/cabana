  
  $(document).ready(function(){
 
 //slider

    if(window.location.href.indexOf('index')> 1){

	     $('.bxslider').bxSlider({
             mode: 'fade',
             captions: true,
             slideWidth: 750
   });
}
//botones de fondo
    
          var theme = $('#theme');

	     $('#to-green').click(function(){

	 	     theme.attr('href', 'css/green.css');
	    })

	    $('#to-red').click(function(){

	 	    theme.attr('href', 'css/red.css');
	    })

	    $('#to-blue').click(function(){

	 	   theme.attr('href', 'css/blue.css');
	   })
	    

//scroll arriba

    $('.subir').click(function(){
        
        $('html, body').animate({
        	scrollTop:0
        },900)
    });	

    if(window.location.href.indexOf('about')> 1){
         
         $('#acordeon').accordion();
    } 

   if(window.location.href.indexOf('contacto')> 1){
      
      $("#calendario").calendarDW();

        $.validate({
        	lang: 'es'
       });

   }

})


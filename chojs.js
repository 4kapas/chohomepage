$(function(){
//    $('.mainimg').hide();
    $('.box2').hide();
    $('.content2').hide();
    
    $('.main1').click(function(){
        
        $('.mainimg').fadeIn(); 
        $('.box2').fadeOut();
        $('.content2').fadeOut();
    })
    $('.subsong').click(function(){
        $('.mainimg').fadeOut(); 
         $('.content2').fadeOut();
        $('.box2').fadeIn();
    })
    $('.content3').click(function(){
//        $('.mainimg').fadeOut(); 
        $('.box2').fadeOut();
        $('.content2').fadeIn();
         $('.mainimg').fadeOut(); 
        
    })
})
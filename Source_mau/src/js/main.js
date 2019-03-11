$(document).ready(function(){
    $('.slideshow').slick({   
        dots:true
    });
    /////////////////
    $('.list_item_content').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
      });
      ///////////////////
    $('#lightgallery').lightGallery();
  });
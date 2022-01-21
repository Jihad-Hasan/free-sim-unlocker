

jQuery(function ($) {

    $(".active").css("display", "block");
    $(".accordion-content").css("display", "none");
  
    $(".accordion-title").click(function () {
  
      $(".accordion-title").not(this).removeClass("open");
  
      $(".accordion-title").not(this).next().slideUp(300);
  
      $(this).toggleClass("open");
  
      $(this).next().slideToggle(300);
    });
  });
  // $( document ).ready(function() {
     
  // });
  
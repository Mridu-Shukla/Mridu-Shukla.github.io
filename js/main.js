var preloader = document.getElementById("loader-wrapper");
// var banner =/ document.
             function myfunction(){
                 preloader.style.display = 'none';
             }
var mybtn = document.getElementById("gototop");
var header = document.getElementById("default-header");
var scrolled =0;
$(document).ready(function(){
   var w= $(window).width();
   var h = $(window).height();
   console.log(h);
  $(window).on('resize',function(){
     if($(window).height()< h-200 || $(window).height() > h+100 || $(window).width() > w +100 || $(window).width() < w -100){
       h = $(window).height();
       w = $(window).width();
    //    console.log(w);
       location.reload();
     }
    });

  $(window).scroll(function(){
    if(document.body.scrollTop>100 ||  document.documentElement.scrollTop >100){
      mybtn.style.display = "block";
    }
    else{
      mybtn.style.display = "none";
    }
  })
  
  $("#gototop").on("click",function(){
    scrolled = scrolled-300;
    $('html, body').animate({
      scrollTop: scrolled
    })
  })
  $(".default-header").sticky({topSpacing:0});

  if(document.getElementById("default-select")){
       $('select').niceSelect();
 };
   
  $("a").on("click",function(e){
    if(this.hash !== ""){
      e.preventDefault();

      var hash = this.hash;
       
       $('html, body').animate({
         scrollTop: $(hash).offset().top-50
       }, 1000, function(){
         window.location.hash= hash;
       })
    }
  })
})
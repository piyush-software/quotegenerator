$(document).ready(function(){
  if(location.protocol=='https:'){
    alert("Please switch to http.");
  }
  var size=$(window).width();
  if(size<800){
    alert("Please operate in landscape mode in mobile for better view.");
  }
  var backcolor=["#FFFFFF"];
  $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&key=XXXXX&format=jsonp&jsonp=?&lang=en", function(a) {
  $("#text").html(" "+a.quoteText+" ");
  $("#author").html("\n-"+a.quoteAuthor);
  $("#author").css("text-align","right");
});
  $(".quote").click(function(){
     var x=Math.floor(Math.random()*10);
     $("body").css("background-color",backcolor[x]);
     $(".quote-pad").css("color",backcolor[x]);
     $(this).css("color",backcolor[x]);
     $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&key=XXXXX&format=jsonp&jsonp=?&lang=en", function(a) {
  $("#text").text(" "+a.quoteText+" ");
  $("#author").html("\n-"+a.quoteAuthor);
  $("#author").css("text-align","right");
     });
     });
 });

$(document).ready(function(){
	console.log("abcddd");
  $(".myImageClass").mouseover(function(){
	 $(".hiddenClass").css("visibility", "visible");
  });
  $(".myImageClass").mouseleave(function(){
	 $(".hiddenClass").css("visibility", "hidden");
  });
  $(".copyTagClass").mouseover(function(){
	 $("#copyContact").css("visibility", "visible");
  });
  $(".copyTagClass").mouseleave(function(){
	 $("#copyContact").css("visibility", "hidden");
  });
  $('.copyTagClass').mousedown(function(event) {
    switch (event.which) {
        case 1:
            console.log("abcdddd");
            var $variable = $('#hiddenContact').select();
            var $temp = $("<input>");
            $("body").append($temp);

            $temp.val($('#hiddenContact').text()).select();
            document.execCommand("copy"); 
            $temp.remove();
            break;
    }
  });
  
});
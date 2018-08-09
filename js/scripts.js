$(document).ready(function(){
  $("button").click(function(event) {

    var a = parseInt($("#side1").val());
    var b = parseInt($("#side2").val());
    var c = parseInt($("#side3").val());
    var triangle = true;

    //Hide old results
    $(".result div").hide();

    //Is it a triangle
    if (a + b <= c || a + c <= b || b + c <= a) {
          triangle = false;
      }

    //What happens with the results
    if (triangle) {
      if (a === b && a === c){
        $("#equilateral").show();
      } else if (a === b || a === c || b === c) {
        $("#isosceles").show();
      } else {
        $("#scalene").show();
      }
    } else {
      $("#notTriangle").show();
    };

    event.preventDefault();

  });
});

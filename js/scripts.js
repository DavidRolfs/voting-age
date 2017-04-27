$(document).ready(function(){

  var age = prompt("enter your age");

  if(age >= 18){
    $("#over").show();
  }
  else{
    $("#under").show();
  }


});

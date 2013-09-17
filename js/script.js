$(document).ready(function(){
  console.log(':)')
  $("li a").on("click", function(){
    $(this).children(":first").addClass("active");
  })
})

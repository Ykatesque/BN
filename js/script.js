$(document).ready(function(){
  console.log(':)')
  $("li a").on("click", function(){
    $(this).children(":first").addClass("active");
  })

  $("li a").on("click", function (event) {
      event.preventDefault();
      // hide all elements under crate
      $('#active').children().hide();

      // now show the element clicked...
      child_element_name = $(this).data("target");
      console.log($(this).data("target"));
      $(child_element_name).fadeToggle();
  });

  $("li a").hover(function () {
      $(this).next().fadeToggle();
  });

})

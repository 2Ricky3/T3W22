$(document).ready(function () {
  console.log("Hello");

  //Home Page

  //when the hero image loads, animate it upwards
  $(".hero-image").animate({ top: "-=100px" });

  //Browse Page
  $("#descriptionText").hide();
});

//When the card is clicked
$(".card").click(function () {
  ///Toggle the price and description text
  $("#priceText").toggle();
  $("#descriptionText").toggle();

  ///Resize the image to fit
  $(".car-img-top").toggleClass("small");
});
$(document).ready(function () {
  $(".remove-btn").click(function () {
    $(this).closest("tr").remove();
  });
});

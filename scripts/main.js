//Plants array//

const arrPlants = [
  {
    name: "Ficus tree",
    price: 350,
    description: "Cool Plant",
    image: "plant1.png",
  },
  {
    name: "Parlour Palm",
    price: 400,
    description: "Nice Plant",
    image: "plant2.png",
  },
];

$(document).ready(function () {
  console.log("Hello");

  //Home Page

  //when the hero image loads, animate it upwards
  $(".hero-image").animate({ top: "-=100px" });

  //Browse Page
  $("#descriptionText").hide();
  loadPlants();
});
//Load all plants

function loadPlants() {
  //Loop through the list of plants
  for (let i = 0; i < arrPlants.length; i++) {
    const plant = arrPlants[i];

    console.log(plant);

    // 1: Select the plants container and the current array to it
    $("#plantsContainer").append($("#plantCardTemplate").html());

    //2: Create a variable that contains the most recently added card
    let currentChild = $("#plantsContainer").children().eq(i);
    console.log(currentChild);

    //3: Set the content for the current plant card from the plant list of array
    $(currentChild).find("#nameText").text(plant.name);
    $(currentChild).find("#priceText").text(plant.price);
    $(currentChild).find("#descriptionText").text(plant.description);
    $(currentChild)
      .find(".card-img-top")
      .attr("src", "assets/" + plant.image);
    //4:Hide the description text
    $(currentChild).find("#descriptionText").hide();
  }
}
//When the card is clicked
$("#plantsContainer").on("click", ".card", function () {
  ///Toggle the price and description text
  $(this).find("#priceText").toggle();
  $(this).find("#descriptionText").toggle();

  ///Resize the image to fit
  $(".car-img-top").toggleClass("small");
});
$(document).ready(function () {
  $(".remove-btn").click(function () {
    $(this).closest("tr").remove();
  });
});

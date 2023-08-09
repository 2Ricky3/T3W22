//Plants array//

const arrPlants = [
  {
    name: "Ficus tree",
    price: 320,
    description: "Cool Plant",
    image: "plant1.png",
    lightAmount: "low",
    addedDate: "2023-03-25",
  },
  {
    name: "Parlour Palm",
    price: 400,
    description: "Nice Plant",
    image: "plant2.png",
    lightAmount: "high",
    addedDate: "2023-03-27",
  },
  {
    name: "Pam",
    price: 450,
    description: "Just like from the office",
    image: "plant3.png",
    lightAmount: "high",
    addedDate: "2023-03-29",
  },
];
let appliedFilter = "";
let appliedSort = "date added";

$(document).ready(function () {
  console.log("Hello");

  //Home Page

  //when the hero image loads, animate it upwards
  $(".hero-image").animate({ top: "-=100px" });

  //Browse Page
  $("#descriptionText").hide();
  loadPlants(arrPlants);
});
//Load all plants

function loadPlants(plantsToShow) {
  $("#plantsContainer").empty();
  //Loop through the list of plants
  for (let i = 0; i < plantsToShow.length; i++) {
    const plant = plantsToShow[i];


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

//When a filter or sort is clicked
$("input[name='filterRadio']").click(function () {
  appliedFilter = $(this).attr("value");

  console.log(appliedFilter);
});
$("input[name='sortRadio']").click(function () {
  appliedSort = $(this).attr("value");

  console.log(appliedSort);
});

function filterSortPlants() {
  let filteredSortedArrPlants = [];

  //Filter Plants
  if (appliedFilter) {
    filteredSortedArrPlants = arrPlants.filter(
      plant => plant.lightAmount == appliedFilter
    )
  } else {
    filteredSortedArrPlantS = arrPlants;
  }

  //sort plants
if (appliedSort == "low to high"){
  //sort the plants form lowest to highest
  filteredSortedArrPlants = filteredSortedArrPlants.sort((a,b) =>{
    return a.price - b.price;
  });
} else if (appliedSort =="date sorted") {filteredSortedArrPlants == filteredSortedArrPlants.sort((a,b) => 
  let da = new Date(a.addedDate);
  let db = new Date(b.addedDate);

  return db - da;
  )}


  loadPlants(filteredSortedArrPlants);


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

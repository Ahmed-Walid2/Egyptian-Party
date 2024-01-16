// Open Navbar

$("#openNav").on("click", function () {
  $("#sideNav").animate({ width: "150px" }, 1000);
  $("#home .homeContent").animate({ marginLeft: "150px" }, 1000);
});

// Close Navbar

$("#closeBtn").on("click", function () {
  $("#sideNav").animate({ width: "0px" }, 1000);
  $("#home .homeContent").animate({ marginLeft: "0px" }, 1000);
});

// Move to section
$("#sideNav a").on("click", function (e) {
  const sectionId = $(e.target).attr("href");
  const sectionPlace = $(sectionId).offset().top;
  $("html, body").animate({ scrollTop: sectionPlace }, 1000);
});

// Slider Toggle

$("#slider .openOne").on("click", function () {
  $(".main").slideToggle(500);
  $(".two, .three, .four").slideUp(500);
});
$("#slider .openTwo").on("click", function () {
  $(".two").slideToggle(500);
  $(".main, .three, .four").slideUp(500);
});
$("#slider .openThree").on("click", function () {
  $(".three").slideToggle(500);
  $(".main, .two, .four").slideUp(500);
});
$("#slider .openFour").on("click", function () {
  $(".four").slideToggle(500);
  $(" .main , .two, .three").slideUp(500);
});

// Counter

function getDate() {
  let partyDate = new Date("23 january 2024 10:00:00");
  // convert date from milli seconds to seconds
  partyDate = partyDate.getTime() / 1000;

  let currentTime = new Date();
  // convert date from milli seconds to seconds

  currentTime = currentTime.getTime() / 1000;

  timeDifference = partyDate - currentTime;

  let days = Math.trunc(timeDifference / (24 * 60 * 60));
  let hours = Math.trunc((timeDifference - days * (24 * 60 * 60)) / 3600);
  let mins = Math.trunc(
    (timeDifference - days * (24 * 60 * 60) - hours * 3600) / 60
  );
  let secs = Math.trunc(
    timeDifference - days * (24 * 60 * 60) - hours * 3600 - mins * 60
  );

  $(".days").text(`${days} days`);
  $(".hours").text(`${hours} hours`);
  $(".mins").text(`${mins} min`);
  $(".secs").text(`${secs} sec`);
}

getDate();

setInterval(() => {
  getDate();
}, 1000);

// textarea max chars

let maxChar = 100;
$("textarea").on("keyup", function () {
  let textChar = $("textarea").val().length;
  let leftChar = maxChar - textChar;
  if (textChar <= maxChar) {
    $("#chars").text(leftChar);
  } else {
    $("#chars").text("0");
  }
});

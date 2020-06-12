//filter btn
$("#kariera").on("click", function (e) {
  e.preventDefault();
  $(".kariera-1").show();
  $("#tehnologija-1, #data-science-1, #marketing-1, .dizajn-1, .impact-1").hide()
});

$("#tehnologija").on("click", function (e) {
  e.preventDefault();
  $("#tehnologija-1").show();
  $(".kariera-1, #data-science-1, #marketing-1, .dizajn-1, .impact-1").hide()
});

$("#data-science").on("click", function (e) {
  e.preventDefault();
  $("#data-science-1").show();
  $(".kariera-1, #tehnologija-1, #marketing-1, .dizajn-1, .impact-1").hide()
});

$("#marketing").on("click", function (e) {
  e.preventDefault();
  $("#marketing-1").show();
  $(".kariera-1, #tehnologija-1, #data-science-1, .dizajn-1, .impact-1").hide()
});

$("#dizajn").on("click", function (e) {
  e.preventDefault();
  $(".dizajn-1").show();
  $(".kariera-1, #tehnologija-1, #data-science-1, #marketing-1, .impact-1").hide()
});

$("#impact").on("click", function (e) {
  e.preventDefault();
  $(".impact-1").show();
  $(".kariera-1, #tehnologija-1, #data-science-1, #marketing-1, .dizajn-1").hide()
});

$("#site").on("click", function (e) {
  e.preventDefault();
  $(".kariera-1, #tehnologija-1, #data-science-1, #marketing-1, .dizajn-1, .impact-1").show()
});


// // counter for sliders

$('.carousel').on('slid.bs.carousel', function () {
  var carouselData = $(this).data('bs.carousel');
  var currentIndex = carouselData.getItemIndex(carouselData.$element.find('.item.active'));
  var total = carouselData.$items.length;
  var text = (currentIndex + 1) + " / " + total;
  $('#carousel-index').text(text);
});


// let kariera = document.getElementById("kariera");
// let tehnologija = document.getElementById("tehnologija");
// let dataScience = document.getElementById("data-science");
// let marketing = document.getElementById("marketing");
// let dizajn = document.getElementById("dizajn");
// let impact = document.getElementById("impact");
// let site = document.getElementById("site");

// let tehnologija1 = document.getElementById("tehnologija-1");
// let dataScience1 = document.getElementById("data-science-1");
// let marketing1 = document.getElementById("marketing-1");
// let dizajn1 = document.querySelectorAll(".dizajn-1");
// let impact1 = document.querySelectorAll(".impact-1");
// let kariera1 = document.querySelectorAll(".kariera-1");

// console.log(dizajn);

// kariera.addEventListener("click", function (e) {
//   e.preventDefault();
//   tehnologija1.style.display = "none";
//   dataScience1.style.display = "none";
//   marketing1.style.display = "none";

//   for (i = 0; i < dizajn1.length; i++) {
//     dizajn1[i].style.display = "none";
//   }

//   for (i = 0; i < impact1.length; i++) {
//     impact1[i].style.display = "none";
//   }

//   for (k = 0; k < kariera1.length; k++) {
//     kariera1[k].style.display = "block";
//   }
// });

// tehnologija.addEventListener("click", function (e) {
//   e.preventDefault();
//   tehnologija1.style.display = "block";
//   dataScience1.style.display = "none";
//   marketing1.style.display = "none";

//   for (d = 0; d < dizajn1.length; d++) {
//     dizajn1[d].style.display = "none";
//   }

//   for (p = 0; p < impact1.length; p++) {
//     impact1[p].style.display = "none";
//   }

//   for (k = 0; k < kariera1.length; k++) {
//     kariera1[k].style.display = "none";
//   }
// });

// dataScience.addEventListener("click", function (e) {
//   e.preventDefault();
//   dataScience1.style.display = "block";
//   marketing1.style.display = "none";
//   tehnologija1.style.display = "none";

//   for (d = 0; d < dizajn1.length; d++) {
//     dizajn1[d].style.display = "none";
//   }

//   for (p = 0; p < impact1.length; p++) {
//     impact1[p].style.display = "none";
//   }

//   for (k = 0; k < kariera1.length; k++) {
//     kariera1[k].style.display = "none";
//   }
// });

// marketing.addEventListener("click", function (e) {
//   e.preventDefault();
//   marketing1.style.display = "block";
//   dataScience1.style.display = "none";
//   tehnologija1.style.display = "none";
//   for (d = 0; d < dizajn1.length; d++) {
//     dizajn1[d].style.display = "none";
//   }

//   for (p = 0; p < impact1.length; p++) {
//     impact1[p].style.display = "none";
//   }

//   for (k = 0; k < kariera1.length; k++) {
//     kariera1[k].style.display = "none";
//   }
// });

// dizajn.addEventListener("click", function (e) {
//   e.preventDefault();
//   marketing1.style.display = "none";
//   dataScience1.style.display = "none";
//   tehnologija1.style.display = "none";

//   for (d = 0; d < dizajn1.length; d++) {
//     dizajn1[d].style.display = "block";
//   }

//   for (p = 0; p < impact1.length; p++) {
//     impact1[p].style.display = "none";
//   }

//   for (k = 0; k < kariera1.length; k++) {
//     kariera1[k].style.display = "none";
//   }
// });

// impact.addEventListener("click", function (e) {
//   e.preventDefault();
//   marketing1.style.display = "none";
//   dataScience1.style.display = "none";
//   tehnologija1.style.display = "none";

//   for (d = 0; d < dizajn1.length; d++) {
//     dizajn1[d].style.display = "none";
//   }

//   for (p = 0; p < impact1.length; p++) {
//     impact1[p].style.display = "block";
//   }

//   for (k = 0; k < kariera1.length; k++) {
//     kariera1[k].style.display = "none";
//   }
// });

// site.addEventListener("click", function (e) {
//   e.preventDefault();
//   marketing1.style.display = "block";
//   dataScience1.style.display = "block";
//   tehnologija1.style.display = "block";

//   for (d = 0; d < dizajn1.length; d++) {
//     dizajn1[d].style.display = "block";
//   }

//   for (p = 0; p < impact1.length; p++) {
//     impact1[p].style.display = "block";
//   }

//   for (k = 0; k < kariera1.length; k++) {
//     kariera1[k].style.display = "block";
//   }
// });





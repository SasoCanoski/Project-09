// COWORKING- mestata se rasprodadeni
let btnCoworking = document.getElementById("btnCoworking");
let h3Coworking = document.getElementById("h3Coworking");

btnCoworking.addEventListener("click", function () {
  h3Coworking.innerHTML = "Местата се распродадени.";
  h3Coworking.style.backgroundColor = "#fcd232";
  h3Coworking.style.color = "black";
  h3Coworking.style.width = "58%";
  h3Coworking.style.padding = "2%";
  h3Coworking.style.border = "1px solid";
  h3Coworking.style.borderRadius = "25px";
});

// EDUKACIJA I KOMPANII

let education = document.getElementById("education");
let company = document.getElementById("company");
let btnCompany = document.getElementById("btnCompany");
let btnAcademy1 = document.getElementById("btnAcademy-1");

btnCompany.addEventListener("click", function () {
  education.style.display = "none";
  company.style.display = "block";
});

btnAcademy1.addEventListener("click", function () {
  company.style.display = "none";
  education.style.display = "block";
});




// forma partnerstvo
$("#btn-form").on("click", function () {
  if ($("#name1").val() === "") {
    console.log("error");
    $("#error-p").text("Внесете Име и Презиме");
  } else {
    $("#error-p").hide();
  }

  if ($("#number1").val() === "") {
    console.log("error");
    $("#error-p2").text("Внесете Телефонски Број");
  } else {
    $("#error-p2").hide();
  }
});
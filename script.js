var submit = document.querySelector(".submit");
submit.addEventListener("click", function () {
  var firstMain = document.querySelector(".first-main");
  firstMain.remove();
  var secondMain = document.querySelector(".thankyou");
  secondMain.style.display = "flex";
});
const rates = document.querySelectorAll(".rating-btn");
var ratingPoint = document.getElementById("rating-point");

rates.forEach((rate) => {
  rate.addEventListener("click", function () {
    var rating = rate.innerHTML;
    ratingPoint.innerHTML = rating;
  });
});

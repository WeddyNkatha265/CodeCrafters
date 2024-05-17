document.addEventListener("DOMContentLoaded", function () {
  const quoteSection = document.getElementById("quote");
  const getQuoteBtn = document.querySelector(".btn-container .btn");

  getQuoteBtn.addEventListener("click", function () {
    quoteSection.classList.toggle("expanded");
  });
});

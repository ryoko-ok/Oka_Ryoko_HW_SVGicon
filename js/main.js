// this is a self-invoking anonymous function
// also called an IIFE
//also called a module

(() => {
  // print("some message");

  console.log("some message - from JavaScript");

  // find the button element on the page by its ID with JavaScript
  let theHeading = document.querySelector('h1'),
      //svgImage = document.querySelector("#svgGraphic"),
      allSVGs = document.querySelectorAll(".svg")
;

  // this function changes the heading text
  function changeText() {
    theHeading.textContent = "Hello there from the console";
  }

  // log the id of the svg to the console when a user hovers on it
  function logSVG() {
    console.log(this.id);
  }

  //theButton.addEventListener("click", changeText);
  //svgImage.addEventListener("click", logSVG);
  //svgImage2.addEventListener("click", logSVG);

  allSVGs.forEach(item => item.addEventListener('click', logSVG));
  //document.querySelector('h1').textContent = "Hello there from the console";
})();

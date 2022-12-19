function themeChange() {
  let elementBody = document.body;
  elementBody.classList.toggle("dark-mode");
}

let inConfig = false;

function configMenu() {
  if (inConfig) {
    document.querySelector("#configMenu").style.width = "8vmin";
    inConfig = false;
  }
  else {
    document.querySelector("#configMenu").style.width = "40vmin";
    document.querySelector("#configMenu").style.boxShadow = "0 0.4vmin 0.8vmin 0 rgba(0, 0, 0, 1), 0 0 2vmin 1vmin rgba(0, 0, 0, 0.7);"
    inConfig = true;
  }
}

let actualPage = 0;

function pageMove(position) {

  const pageContent = document.querySelectorAll(".pageContent");
  const config = document.querySelector("#config");
  const configM = document.querySelector("#configMenu");

  pageContent[actualPage].style.opacity = "0";
  actualPage += position;
  pageContent[actualPage].style.opacity = "1";

  switch (actualPage) {
    case 0:
      console.log("page 0 test")

      config.style.right = "3vmin";
      config.style.bottom = "3vmin";

      configM.style.left = "";
      configM.style.right = "3vmin";
      configM.style.bottom = "3vmin";
      break;

    case 1:
      console.log("page 1 test")

      config.style.right = "-8vmin";
      config.style.bottom = "3vmin";

      configM.style.right = "";
      configM.style.left = "103vmin";
      configM.style.bottom = "3vmin";
      break;

    case 2:
      console.log("page 2 test")

      config.style.right = "3vmin";
      config.style.bottom = "-8vmin";

      configM.style.left = "";
      configM.style.right = "3vmin";
      configM.style.bottom = "-8vmin";
      break;

    case 3:
      console.log("page 3 test")

      config.style.right = "-8vmin";
      config.style.bottom = "-8vmin";

      configM.style.right = "";
      configM.style.left = "103vmin";
      configM.style.bottom = "-8vmin";
      break;
  }

  /* config.style:
   *  fixed at right and bottom, only change the values between positive and
   *  negative for directions adjustments (transition won't work in other way)
   */

  /* configM.style:
   * bottom shift between 3vh and -3vh from up to bottom
   * shift between left and right (to properly set the menu slide direction)
   */
}

//https://stackoverflow.com/questions/58736328/horizontally-scrolling-by-a-full-page-on-key-press
//https://stackoverflow.com/questions/7031268/how-to-scroll-page-elements-with-the-keyboard

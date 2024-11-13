const threeBars = document.querySelector("header .nav i");
console.log(threeBars);
let isActive = false;

threeBars.onclick = function () {
  const liElements = document.querySelectorAll("header .nav .fa:hover + ul li");
  const element = document.querySelector("header .nav .fa + ul");
  if (!isActive) {
    liElements.forEach((item) => {
      item.style.cssText = "margin-bottom: 10px;";
    });
    element.style.cssText = `cursor: pointer;
    padding-top: 10px;
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 72px;
        /* left: -100px; */
        /* text-align: center; */
        right: 0px;
        z-index: 1;
        background-color: #fff3e3;
        width: 50%; 
        font-size: 20px;
        margin-bottom: 10px;
        `;
  } else {
    element.style.cssText = "display:none;";
  }
  isActive = !isActive;
};

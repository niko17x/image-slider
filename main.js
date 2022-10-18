// Todo: Fix carousel dot issue not connecting properly during image sliding.

// Respective carousel dots are selected based on the image presented:

function carouselDotsSelector() {
  // let selectedImg;

  const li = document.querySelectorAll("li");

  li.forEach((element) => {
    if (element.hasAttribute("data-active")) {
      switch (element.id) {
        case "img1":
          document.querySelector("#radio1").setAttribute("checked", "checked");
          break;
        case "img2":
          document.querySelector("#radio2").setAttribute("checked", "checked");
          break;
        case "img3":
          document.querySelector("#radio3").setAttribute("checked", "checked");
          break;
        case "img4":
          document.querySelector("#radio4").setAttribute("checked", "checked");
          break;
        default:

        // nothing.
      }
    }
  });
}

// Check for existing 'checked' attribute in all input elements and remove them if found:

function removeCheckedAtt() {
  const input = document.querySelectorAll("input");

  input.forEach((element) => {
    if (element.hasAttribute("checked")) {
      element.removeAttribute("checked");
    }
  });
}

function arrowBtn() {
  const buttons = document.querySelectorAll("[data-carousel-button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const offset = button.dataset.carouselButton === "next" ? 1 : -1;
      const slides = button
        .closest("[data-carousel]")
        .querySelector("[data-slides");

      const activeSlide = slides.querySelector("[data-active]");
      let newIndex = [...slides.children].indexOf(activeSlide) + offset;
      if (newIndex < 0) {
        newIndex = slides.children.length - 1;
      }
      if (newIndex >= slides.children.length) {
        newIndex = 0;
      }

      slides.children[newIndex].dataset.active = true;
      delete activeSlide.dataset.active;

      removeCheckedAtt();
      carouselDotsSelector();
    });
  });
}

// If user selects a specific radio button id, that image should have the active class on it:

function removeAtt(data) {
  const li = document.querySelectorAll("li");

  li.forEach((att) => {
    if (att.hasAttribute(data)) {
      att.removeAttribute(data);
    }
  });
}

function addDataActiveAtt() {
  const carouselDots = document.querySelectorAll("[data-carousel-dots]");
  carouselDots.forEach((dot) => {
    dot.addEventListener("click", (e) => {
      removeAtt("data-active"); // Remove [data-active] attribute at the beginning.
      switch (e.target.id) {
        case "radio1":
          document.querySelector("#img1").setAttribute("data-active", "");
          break;
        case "radio2":
          document.querySelector("#img2").setAttribute("data-active", "");
          break;
        case "radio3":
          document.querySelector("#img3").setAttribute("data-active", "");
          break;
        case "radio4":
          document.querySelector("#img4").setAttribute("data-active", "");
          break;
        default:

        // do nothing.
      }
      carouselDotsSelector();
    });
  });
}

function render() {
  arrowBtn();
  addDataActiveAtt();
  carouselDotsSelector();
}

render();

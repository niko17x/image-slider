// Todo: Fix carousel dot issue not connecting properly during image sliding.

// Loops over all li element to check if [data-active] attribute is valid => if it is, get the id of that list and corresponding input element should also be checked:
// Get list element id that has the [data-active] attribute on:

function getListElementId() {
  const liAll = document.querySelectorAll("li");
  let result;

  liAll.forEach((item) => {
    if (item.hasAttribute("data-active")) {
      result = item.id;
    }
  });
  return result;
}

// Use the getListElementId() to determine which input element will have the 'checked' attribute:

function addCheckAtt() {
  switch (getListElementId()) {
    case "img1":
      document.querySelector("#radio1").setAttribute("checked", true);
      break;
    case "img2":
      document.querySelector("#radio2").setAttribute("checked", true);
      break;
    case "img3":
      document.querySelector("#radio3").setAttribute("checked", true);
      break;
    case "img4":
      document.querySelector("#radio4").setAttribute("checked", true);
      break;
    default:

    // nothing.
  }
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

const buttons = document.querySelectorAll("[data-carousel-button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    removeCheckedAtt();

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
    addCheckAtt();
  });
});

// If user selects a specific radio button id, that image should have the active class on it:

function removeAtt() {
  const li = document.querySelectorAll("li");

  li.forEach((att) => {
    if (att.hasAttribute("data-active")) {
      att.removeAttribute("data-active");
    }
  });
}

const carouselDots = document.querySelectorAll("[data-carousel-dots]");
carouselDots.forEach((dot) => {
  dot.addEventListener("click", (e) => {
    removeAtt(); // Remove [data-active] attribute at the beginning.
    removeCheckedAtt();

    switch (e.target.id) {
      case "radio1":
        document.querySelector("#img1").setAttribute("data-active", true);
        break;
      case "radio2":
        document.querySelector("#img2").setAttribute("data-active", true);
        break;
      case "radio3":
        document.querySelector("#img3").setAttribute("data-active", true);
        break;
      case "radio4":
        document.querySelector("#img4").setAttribute("data-active", true);
        break;
      default:

      // do nothing.
    }
    addCheckAtt();
  });
});

// window. addEventListener('DOMContentLoaded', () => {
const goHome = () => {
  window.open("https://shopify.com/", "_blank");
};

const goAdmin = () => {
  window.open("https://admin.shopify.com/", "_blank");
};
const goPay = () => {
  window.open("https://shopify.com/pricing/", "_blank");
};
//  SET ARIA LABEL FOR MENU BUTTTONS0
var buttons = document
  .querySelectorAll('button[role="menuitem"]')
  .forEach((btn) => btn.setAttribute("aria-label", btn.textContent.trim()));

// CLOSE TOAST FUNCTION
const remove4rmDom = (e) => (e.parentElement.style.display = "none");

const setupTogBtn = document.querySelector("button.setup");
const setupContWrap = document.querySelector(".setupContentWrapper");
setupTogBtn.addEventListener("click", () => {
  setupTogBtn.classList.toggle("tog");
  setupContWrap.classList.toggle("fullInfo");
});
setupTogBtn.removeEventListener("click", () => {});

//  MODAL VARIABLES
const bellBtn = document.querySelector(".bell");
// console.log(bellBtn);
const alertDropdown = document.querySelector(".alert");
const profileBtn = document.querySelector(".name");
const menuDropdown = document.querySelector("#menu");

// ALERT TOGGLE
bellBtn.addEventListener("click", () => {
  // CHECK AVALABLE MODALS
  if ((menuDropdown.style.display = "block")) {
    menuDropdown.style.display = "none";
  }
  // SET DISPLAY OF ALERT MODAL
  alertDropdown.style.display =
    alertDropdown.style.display === "none" ? "block" : "none";
});
bellBtn.removeEventListener("click", () => {});

// PROFILE TOGGLE
profileBtn.addEventListener("click", () => {
  // CHECK AVALABLE MODALS
  if ((alertDropdown.style.display = "block")) {
    alertDropdown.style.display = "none";
  }
  // SET DISPLAY OF ALERT MODAL
  menuDropdown.style.display =
    menuDropdown.style.display === "none" ? "block" : "none";
});
profileBtn.removeEventListener("click", () => {});

// SETUP GUIDE TOGGLE PANEL
const setupDivs = document.querySelectorAll(
  ".setup .setupContentWrapper .setupContent"
);
setupDivs.forEach((div) => {
  // WHEN CLICKED CHECK WCH HAS THE CLASS
  div.addEventListener("click", () => {
    // CHECK WCH ONE HAS THE ACTIVE CLASS
    var active = document.querySelector(
      ".setup .setupContentWrapper .setupContent.active"
    );
    if (!div.classList.contains("active")) {
      // IF NOT REMOVE THE CLASS FROM AVAIL ND ADD TO THE CLICKED ONE
      active.classList.remove("active");
      div.classList.toggle("active");
    }
    // IF ITS THE ACTIVE ONE DO NOTHING
  });
  div.removeEventListener("click", () => {});
});
// RANGE MODIFER CODE
const checkBoxes = document.querySelectorAll("input.icon");
const rangeCount = document.querySelector(".range > p > span");
const rangeDiv = document.querySelector(".range > .progressBar > div");
var checkedBoxes = [];
checkBoxes.forEach((box, i) => {
  box.addEventListener("click", () => {
    checkBoxes.forEach((box) => box.checked && checkedBoxes.push(box));
    rangeCount.innerHTML = checkedBoxes.length.toString();
    //  Change the Range's width
    rangeDiv.style.width =
      ((100 / checkBoxes.length) * checkedBoxes.length).toString() + "%";
    checkedBoxes = [];
  });
  box.removeEventListener("click", () => {});
});

/*
FINAL SUBMISSION
// Your javascript goes here
const goHome = () => {
  window.open("https://shopify.com/", "_blank");
};

const goAdmin = () => {
  window.open("https://admin.shopify.com/", "_blank");
};
const goPay = () => {
  window.open("https://shopify.com/pricing/", "_blank");
};
//  SET ARIA LABEL FOR MENU BUTTTONS0
var buttons = document
  .querySelectorAll('button[role="menuitem"]')
  .forEach((btn) => btn.setAttribute("aria-label", btn.textContent.trim()));

// CLOSE TOAST FUNCTION
const remove4rmDom = (e) => (e.parentElement.style.display = "none");

const setupTogBtn = document.querySelector("button.setup");
const setupContWrap = document.querySelector(".setupContentWrapper");
setupTogBtn.addEventListener("click", () => {
  setupTogBtn.classList.toggle("tog");
  setupContWrap.classList.toggle("fullInfo");
});
setupTogBtn.removeEventListener("click", () => {});

//  MODAL VARIABLES
const bellBtn = document.querySelector(".bell");
// console.log(bellBtn);
const alertDropdown = document.querySelector(".alert");
const profileBtn = document.querySelector(".name");
const menuDropdown = document.querySelector("#menu");

// ALERT TOGGLE
bellBtn.addEventListener("click", () => {
  // CHECK AVALABLE MODALS
  if ((menuDropdown.style.display = "block")) {
    menuDropdown.style.display = "none";
  }
  // SET DISPLAY OF ALERT MODAL
  alertDropdown.style.display =
    alertDropdown.style.display === "none" ? "block" : "none";
});
bellBtn.removeEventListener("click", () => {});

// PROFILE TOGGLE
profileBtn.addEventListener("click", () => {
  // CHECK AVALABLE MODALS
  if ((alertDropdown.style.display = "block")) {
    alertDropdown.style.display = "none";
  }
  // SET DISPLAY OF ALERT MODAL
  menuDropdown.style.display =
    menuDropdown.style.display === "none" ? "block" : "none";
});
profileBtn.removeEventListener("click", () => {});

// SETUP GUIDE TOGGLE PANEL
const setupDivs = document.querySelectorAll(
  ".setup .setupContentWrapper .setupContent"
);
setupDivs.forEach((div) => {
  // WHEN CLICKED CHECK WCH HAS THE CLASS
  div.addEventListener("click", () => {
    // CHECK WCH ONE HAS THE ACTIVE CLASS
    var active = document.querySelector(
      ".setup .setupContentWrapper .setupContent.active"
    );
    if (!div.classList.contains("active")) {
      // IF NOT REMOVE THE CLASS FROM AVAIL ND ADD TO THE CLICKED ONE
      active.classList.remove("active");
      div.classList.toggle("active");
    }
    // IF ITS THE ACTIVE ONE DO NOTHING
  });
  div.removeEventListener("click", () => {});
});
// RANGE MODIFER CODE
const checkBoxes = document.querySelectorAll("input.icon");
const rangeCount = document.querySelector(".range > p > span");
const rangeDiv = document.querySelector(".range > .progressBar > div");
var checkedBoxes = [];
checkBoxes.forEach((box, i) => {
  box.addEventListener("click", () => {
    checkBoxes.forEach((box) => box.checked && checkedBoxes.push(box));
    rangeCount.innerHTML = checkedBoxes.length.toString();
    //  Change the Range's width
    rangeDiv.style.width =
      ((100 / checkBoxes.length) * checkedBoxes.length).toString() + "%";
    checkedBoxes = [];
  });
  box.removeEventListener("click", () => {});
});


*/

// window. addEventListener('DOMContentLoaded', () => {
// document.
// ()=>{
// CLOSE TOAST FUNCTION
const remove4rmDom = (e) => (e.parentElement.style.display = "none");

const setupTogBtn = document.querySelector("button.setup");
const setupContWrap = document.querySelector(".setupContentWrapper");
setupTogBtn.addEventListener("click", () => {
  setupTogBtn.classList.toggle("tog");
  setupContWrap.classList.toggle("fullInfo");
});

//  MODAL VARIABLES
const bellBtn = document.querySelector(".bell");
const alertDropdown = document.querySelector(".alert");
const profileBtn = document.querySelector(".name");
const menuDropdown = document.querySelector(".menu");

// ALERT TOGGLE
bellBtn.addEventListener("click", () => {
  // CHECK AVALABLE MODALS
  menuDropdown.style.display = "none";
  // SET DISPLAY OF ALERT MODAL
  alertDropdown.style.display =
    alertDropdown.style.display === "none" ? "block" : "none";
});

// PROFILE TOGGLE

profileBtn.addEventListener("click", () => {
  // CHECK AVALABLE MODALS
  alertDropdown.style.display = "none";
  // SET DISPLAY OF ALERT MODAL

  menuDropdown.style.display =
    menuDropdown.style.display === "none" ? "block" : "none";
});

// };
// )

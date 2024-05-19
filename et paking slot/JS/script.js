const menu_btn = document.querySelector(".hamburger");
const navigation = document.querySelector(".navigation");

menu_btn.addEventListener("click", function () {
  menu_btn.classList.toggle("is-active");
  navigation.classList.toggle("is-active");
});

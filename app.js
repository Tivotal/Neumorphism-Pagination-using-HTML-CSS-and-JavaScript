/* Created by Tivotal */

let items = document.querySelectorAll("li");

items.forEach((item) => {
  item.addEventListener("click", () => {
    //removing active class from previous item
    //which have that class
    document.querySelector(".active").classList.remove("active");

    //adding active class to clicked item
    item.classList.add("active");
  });
});

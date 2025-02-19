document.addEventListener("DOMContentLoaded", () => {
  let navUlLi = document.querySelectorAll("nav ul li");
  let imgs = document.querySelectorAll("img");

  navUlLi.forEach((e) => {
    e.addEventListener("click", () => {
      // let eachLi=document.createElement('li')
      e.classList.add("active");
    });
  });
});

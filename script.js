document.addEventListener("DOMContentLoaded", () => {
  let navUlLi = document.querySelectorAll("nav ul li");
  let imgs = document.querySelectorAll("img");

  navUlLi.forEach((e, idx) => {
    e.addEventListener("click", () => {
      navUlLi.forEach((nav) => {
        nav.classList.remove("active");
      });
      e.classList.add("active");
      imgs.forEach((i) => {
        i.classList.remove("show");
      });
      imgs[idx].classList.add('show')
    });
  });
});

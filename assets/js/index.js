const content = document.getElementById("content");
const work = document.getElementsByClassName("section-header")[0];
const themeToggle = document.getElementById("toggle-switch");
const topScrollButton = document.getElementById("top-scroll");

const setTheme = (val) => val ? content.classList.remove("light") : content.classList.add("light")

const isInViewport = (el) => {
  const boundBox = el.getBoundingClientRect();
  return (
    boundBox.top >= 0 &&
    boundBox.left >= 0 &&
    boundBox.bottom <=
    (window.innerHeight || document.documentElement.clientHeight) &&
    boundBox.right <=
    (window.innerWidth || document.documentElement.clientWidth)
  );
};

themeToggle.addEventListener("change", () => {
  setTheme(themeToggle.checked);
});

work.addEventListener("click", () => {
  work.scrollIntoView({ behavior: "smooth" });
});

topScrollButton.addEventListener("click", () => {
  content.scrollIntoView({ behavior: "smooth" });
});

document.getElementById("year").innerHTML = `© ${new Date().getFullYear()}`;
let scrollContainer = document.querySelector(".js-gallery");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");

let setIntervalId;
function autoSlide() {
  clearInterval(setIntervalId);
  setIntervalId = setInterval(() => {
    const isScrolledToLeft =
      scrollContainer.scrollLeft ===
      scrollContainer.scrollWidth - scrollContainer.clientWidth;
    if (isScrolledToLeft) {
      scrollContainer.scrollLeft -= scrollContainer.scrollWidth + 10;
    } else {
      nextSlide();
    }
  }, 5000);
}

autoSlide();

function mouseWheelScroll() {
  scrollContainer.addEventListener("wheel", (e) => {
    autoSlide();
    e.preventDefault();
    scrollContainer.scrollLeft += e.deltaY;
    scrollContainer.style.scrollBehavior = "auto";
  });
}
mouseWheelScroll();
function nextSlide() {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft += scrollContainer.offsetWidth + 10;
}
nextBtn.addEventListener("click", () => {
  nextSlide();
  autoSlide();
});

function prevSlide() {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft -= scrollContainer.offsetWidth + 10;
}
prevBtn.addEventListener("click", () => {
  prevSlide();
  autoSlide();
});

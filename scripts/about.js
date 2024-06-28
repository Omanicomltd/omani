const mission = document.querySelector(".js-about-mission");
const coreValues = document.querySelector(".js-about-core-values");
const imgCon = document.querySelector(".js-img-con");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const intersectionRatio = entry.intersectionRatio;
        if (intersectionRatio >= 0.5) {
          imgCon.innerHTML = `
          <img
            class="more-about-us-img"
            src="images/hands-reaching-pot.png"
            alt="About images"
          />
        `;
          console.log("Mission element is scrolled 50% of the screen");
        }
      }
    });
  },
  {
    threshold: 0.5
  }
);
observer.observe(mission);
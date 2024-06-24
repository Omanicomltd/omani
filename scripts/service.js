import projects from "./data/portfolioData.js";

const servicePortfolioSection = document.querySelector(".js-service--portfolio-sec");
let projectHTML = '';
projects.forEach(project => {
  const projectImages =  project.images.map(projectImage => {
    return `
      <div class="service--portfolio-img-bx">
        <img
          src="../${projectImage}"
          alt="${project.title}"
          />
      </div>
    `;
  });
  console.log(...projectImages);
  projectHTML += `
    <div class="service--portfolio-con">
        <div class="service--portfolio-title-con">
          <h3 id="${project.id}">${project.title}</h3>
        </div>
        <div class="service--portfolio-img-con">${projectImages.join('')}</div>
      </div>
  `;
});
servicePortfolioSection.innerHTML += projectHTML;

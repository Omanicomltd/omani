import projects from "./data/portfolioData.js";
console.log(projects[0].images[0]);

const imgContainer = document.querySelector('.js-img-con');
imgContainer.innerHTML += `<img src="../${projects[0].images[3]}" alt="project images" />`;
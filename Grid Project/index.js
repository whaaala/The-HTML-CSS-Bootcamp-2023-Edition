const hamburger = document.querySelector(".hamburger");
const firstLine = document.querySelector(".bar1");
const secondLine = document.querySelector(".bar2");
const thirdLine = document.querySelector(".bar3");
const mobileNav  = document.querySelector(".mobileNav")

hamburger.addEventListener("click", ()=>{
    firstLine.classList.toggle("animateBar1");
    secondLine.classList.toggle("animateBar2");
    thirdLine.classList.toggle("animateBar3");
    mobileNav.classList.toggle("openMobileNav");
})
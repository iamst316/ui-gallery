const mobileImg = "./assets/images/illustration-sign-up-mobile.svg";
const desktopImg = "./assets/images/illustration-sign-up-desktop.svg";
const dynamicImg = document.getElementById("dynamic-img");
const graphics = document.getElementsByClassName("graphics")[0];
console.log(dynamicImg.src);

if(window.innerWidth<=375){
    dynamicImg.src = mobileImg;
    dynamicImg.classList.add("mobile");
}
else{
    dynamicImg.src = desktopImg;
    dynamicImg.classList.add("desktop");
}
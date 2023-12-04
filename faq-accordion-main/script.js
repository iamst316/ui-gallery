
const browserImg = "background-image: url(./assets/images/background-pattern-desktop.svg)"
const mobileImg = "background-image: url(./assets/images/background-pattern-mobile.svg)"
const faq = document.getElementsByClassName("faq")[0];
const imgDiv = document.getElementsByClassName("bg-image")[0];
const answers = document.getElementsByClassName("answer");
const toggleBtn = document.getElementsByClassName("toggle-btn");


if (window.innerWidth<=375){
  imgDiv.setAttribute("style",mobileImg)
  faq.setAttribute("style","width: 80%")

}
else{
  imgDiv.setAttribute("style",browserImg)
  faq.setAttribute("style","width: 45%")


}
// console.log(toggleBtn[0].attributes.src);

function toggle(idx){
  if (answers[idx].classList.contains("hidden")){
    answers[idx].classList.replace("hidden","show")
    toggleBtn[idx].attributes.src.value = "./assets/images/icon-minus.svg";
  }
  else if (answers[idx].classList.contains("hide")){
    answers[idx].classList.replace("hide","show")
    toggleBtn[idx].attributes.src.value = "./assets/images/icon-minus.svg";
  }

  else {
    answers[idx].classList.replace("show","hide");
    toggleBtn[idx].attributes.src.value = "./assets/images/icon-plus.svg";
  }
}
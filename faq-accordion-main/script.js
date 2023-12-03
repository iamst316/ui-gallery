
const browserImg = "background-image: url(./assets/images/background-pattern-desktop.svg)"
const mobileImg = "background-image: url(./assets/images/background-pattern-mobile.svg)"
const faq = document.getElementsByClassName("faq")[0];
const plusImg = "";
const minusImg = "";
const imgDiv = document.getElementsByClassName("bg-image")[0];
const answers = document.getElementsByClassName("answer");

if (window.innerWidth<=375){
  imgDiv.setAttribute("style",mobileImg)
  faq.setAttribute("style","width: 80%")

}
else{
  imgDiv.setAttribute("style",browserImg)
  faq.setAttribute("style","width: 45%")


}
// console.log(answers);

function toggle(idx){
  console.log(answers)
  if (answers[idx].classList.contains("hidden")){
    answers[idx].classList.replace("hidden","animate")
  }
  else{
    answers[idx].classList.replace("animate","hidden")
  }
}
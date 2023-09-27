
function Select(num){
    let btn = document.querySelectorAll(".btn");

    for (let i=0;i<btn.length;i++){
        if(i==num){
            btn[num].classList.remove("unselected");
            btn[num].classList.add("selected");
        }
        else{
            btn[i].classList.remove("selected");
            btn[i].classList.add("unselected");
        }
    }

    // console.log(btn[num].classList);

    // btn[num].classList.remove("unselected");
    // btn[num].classList.add("selected");

    // console.log(btn[num].innerText);
    // console.log(btn[num].classList);
}

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
function handleScroll() {
  const animatedDiv = document.getElementsByClassName('work')[0];
  if (isInViewport(animatedDiv)) {
    animatedDiv.classList.add('animate');
    window.removeEventListener('scroll', handleScroll);
  }
}




















window.addEventListener('scroll', handleScroll);
  
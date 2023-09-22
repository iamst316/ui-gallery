
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
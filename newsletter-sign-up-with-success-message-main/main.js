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

function VerifyandSubmit() {
    let email = document.getElementById("user-mail").value;
    // console.log(email)
    let at = 0;
    let dot = 0;
    let errorMessage = document.getElementById("error-message");

    for(let i of email){
        if(i=='.'){
            dot+=1;
        }
        if(i=="@"){
            at+=1;
        }
        console.log(at,dot)
    }

    if(at!=1 || dot!=1){
        errorMessage.innerText = "Valid email required";
        errorMessage.classList.add("shake")
        setTimeout(()=>{
            errorMessage.classList.remove("shake")
        },300)
    }
    else{
        window.location.href = "success.html";
    }
}
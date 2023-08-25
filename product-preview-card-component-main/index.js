



function Res(){
    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;

    let t = document.getElementById("main-img");

    if (screenWidth<1000){
        t.src = "./images/image-product-mobile.jpg";
        t.style.maxWidth = "60%";
        t.style.height = "auto";
    }
    else{
        t.src = "./images/image-product-desktop.jpg";
        t.style.maxWidth = "20%";
        t.style.height = "auto";
    }
    
    // console.log(t)
    // console.log(t.src) ;    
    
}


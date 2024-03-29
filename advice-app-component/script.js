async function generate(){
    let btn = document.getElementsByClassName("btn")[0];
    btn.classList.add("rotate");
    // console.log(btn);
    
    let res = await fetch("https://api.adviceslip.com/advice");
    
    res = await res.json();
    let advice = await res.slip;

    await display(advice);
    btn.classList.remove("rotate");


}

async function display(advice){
    let num = document.getElementsByClassName("title")[0];
    let desc = document.getElementsByClassName("advice")[0];
    
    desc.innerText = advice.advice;
    desc.classList.add("fade-in");

    num.innerText = "Advice # "+advice.id;

    await remove(desc,"fade-in")
    
}

async function remove(element,attr){
    setTimeout(()=>{
        element.classList.remove(attr)

    },1000)
}
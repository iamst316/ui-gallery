async function generate(){
    let res = await fetch("https://api.adviceslip.com/advice");
    
    res = await res.json();
    let advice = await res.slip;

    await display(advice);
}

async function display(advice){
    let num = document.getElementsByClassName("title")[0];
    let desc = document.getElementsByClassName("advice")[0];
    desc.innerText = advice.advice;
    num.innerText = "Advice # "+advice.id;
    // console.log(num);
}
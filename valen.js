function createHeart(idNumber) {

    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.id = `h-${idNumber}`;

    for (let i = 1; i <= 4; i++) {
        const sub = document.createElement('div');
        sub.classList.add('subheart');
        sub.id = `hh-${i}`;
        heart.appendChild(sub);
    }

    return heart;
}
const background=document.getElementById("background");
for(let i=0;i<500;i++){
    background.appendChild(createHeart(i+1));
}
const hearts=document.querySelectorAll('.heart');
let z=-1;
hearts.forEach(heart=>{
    let x=Math.random()*window.innerWidth;
    let y=Math.random()*window.innerHeight;
    let deg=Math.random()*180-45;
    let resize=Math.random()*0.5+0.8;
    heart.style.left=`${x}px`;
    heart.style.top=`${y}px`;
    heart.style.zIndex=z;
    z--;
    console.log(z);
    heart.style.transform=`rotate(${deg}deg) scale(${resize})`;
});
// const popup=document.getElementById("popup");
// let x=window.innerWidth/2;
// let y=window.innerHeight/2;
// popup.style.left=`${x}px`;
// popup.style.top=`${y}px`;
const yes=document.getElementById('btn1');
const no=document.getElementById('btn2');
let yesbool=false;
let nobool=true;
no.addEventListener('mouseenter',()=>{
    if(nobool){
        yesbool=true;
        nobool=false;
        let text=yes.innerText;
        yes.innerText=no.innerText;
        no.innerText=text;
        yes.classList.toggle('btn1');
        yes.classList.toggle('btn2');
        no.classList.toggle('btn2');
        no.classList.toggle('btn1');
    }
});
yes.addEventListener('mouseenter',()=>{
    if(yesbool){
        yesbool=false;
        nobool=true;
        let text=yes.innerText;
        yes.innerText=no.innerText;
        no.innerText=text;
        no.classList.toggle('btn1');
        no.classList.toggle('btn2');
        yes.classList.toggle('btn2');
        yes.classList.toggle('btn1');
    }
});
yes.addEventListener("click",()=>{
    let popup=document.getElementById("parentpopup");
    popup.innerHTML=`
    <div id="newcont">Yayyyy!! Happy Valentine's babyyyy<3<3
    </div>`;
    popup.classList.remove('parentpopup1');
    popup.classList.add('result');
    let result=document.getElementById('newcont');
    result.classList.add('resulttext');
});


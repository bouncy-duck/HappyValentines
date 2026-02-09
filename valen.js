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
const yes=document.getElementById('btn1');
const no=document.getElementById('btn2');
let count=0;
let size=10;
let yesbool=false;
let nobool=true;
let sentences=["Ab maan bhi jao babuu!!","Muahh baby, choose fasttt!!","Say yes babygirl...","Very stubborn huhhh!!!","Aaa!, ab haa bhi kardo..","Chalo cutie haa karoo!","Biryani khilaunga haa kardo;)","Mai ro doonga abb...Fastt","Ab jaan logi kyaaa jii...","Haa kardo naaa...","Bohot pyar karungaaa!!"];
let changeText=()=>{
    if(count%3==0&&size!=0){
        let index=100;
        while(index>=size||index<0){
            index=Math.floor(Math.random()*size);
        }
        document.getElementById('popup').innerText=`${sentences[index]}`;
        sentences.splice(index,1);
        size--;
    }
    else if(size==0&&count%3==0){
        triggerEventx();
    }
    console.log('changeText triggered');
}
no.addEventListener('mouseover',()=>{
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
        count++;
        changeText();
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
        count++;
        changeText();
    }
});
let triggerEventx=()=>{
    let popup=document.getElementById("parentpopup");
    popup.innerHTML=`
    <div id="newcont">Yayyyy!! Happy Valentine's babyyyy<3<3 <span style="font-size:10px;">(ab aur kitna rukuuu)</span>
    </div>`;
    popup.classList.remove('parentpopup1');
    popup.classList.add('result');
    let result=document.getElementById('newcont');
    result.classList.add('resulttext');
};
let triggerEvent=()=>{
    let popup=document.getElementById("parentpopup");
    popup.innerHTML=`
    <div id="newcont">Yayyyy!! Happy Valentine's babyyyy<3<3
    </div>`;
    popup.classList.remove('parentpopup1');
    popup.classList.add('result');
    let result=document.getElementById('newcont');
    result.classList.add('resulttext');
};
yes.addEventListener("click",()=>triggerEvent());
no.addEventListener("click",()=>triggerEvent());


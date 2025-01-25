let first=document.querySelector('#good')
let box1=document.getElementById('0')
let box2=document.getElementById('1')
let box3=document.getElementById('2')
let box4=document.getElementById('3')
let box5=document.getElementById('4')
let box6=document.getElementById('5')
let box7=document.getElementById('6')
let box8=document.getElementById('7')
let box9=document.getElementById('8')
let array1=[0,0,0,0,0,0,0,0,0];
first.firstChild
const computerresult=(array1)=>{

// let number=1;
let mainelement=0;
// while(number!=0){
//     let element=parseInt(Math.random()*7)
//     if(array1[element]==0){
// mainelement=element;
//         number=0;
//     }
// }
let scores=0
if(array1[2]==0 && array1[5]=='X' && array1[8]=='X'){
mainelement=2;
scores=1;
}
else if((array1[2]=='X' && array1[5]==0 && array1[8]=='X')){
mainelement=5;
scores=1;
}
else if(array1[2]=='X' && array1[5]=='X' && array1[8]==0){
    mainelement=8;
    scores=1;
}
else if(array1[6]=='X' && array1[7]=='X' && array1[8]==0){
    mainelement=8;
    scores=1;
}
else if(array1[6]=='X' && array1[7]==0 && array1[8]=='X'){
    mainelement=7;
    scores=1;
}
else if(array1[6]==0 && array1[7]=='X' && array1[8]=='X'){
    mainelement=6;
    scores=1;
}
else if(array1[0]==0 && array1[1]=='X' && array1[2]=='X'){
    mainelement=0;
    scores=1;
}
else if(array1[0]=='X' && array1[1]=='X' && array1[2]==0){
    mainelement=2;
    scores=1;
}
else if(array1[0]=='X' && array1[1]==0 && array1[2]=='X'){
    mainelement=1;
    scores=1;
}
else if(array1[0]==0 && array1[3]=='X' && array1[6]=='X'){
    mainelement=0;
    scores=1;
}
else if(array1[0]=='X' && array1[3]==0 && array1[6]=='X'){
    mainelement=3;
    scores=1;
}
else if(array1[0]=='X' && array1[3]=='X' && array1[6]==0){
    mainelement=6;
    scores=1;
}
else if(array1[0]==0 && array1[4]=='X' && array1[8]=='X'){
    mainelement=0;
    scores=1;
}
else if(array1[0]=='X' && array1[4]==0 && array1[8]=='X'){
    mainelement=4;
    scores=1;
}
else if(array1[0]=='X' && array1[4]=='X' && array1[8]==0){
    mainelement=8;
    scores=1;
}
else if(array1[2]==0 && array1[4]=='X' && array1[6]=='X'){
    mainelement=2;
    scores=1;
}
else if(array1[2]=='X' && array1[4]==0 && array1[6]=='X'){
    mainelement=4;
    scores=1;
}
else if(array1[2]=='X' && array1[4]=='X' && array1[6]==0){
    mainelement=6;
    scores=1;
}
else if(array1[3]==0 && array1[4]=='X' && array1[5]=='X'){
    mainelement=3;
    scores=1;
}
else if(array1[3]=='X' && array1[4]==0 && array1[5]=='X'){
    mainelement=4;
    scores=1;
}
else if(array1[3]=='X' && array1[4]=='X' && array1[5]==0){
    mainelement=5;
    scores=1;
}
else if(array1[1]==0 && array1[4]=='X' && array1[7]=='X'){
    mainelement=1;
    scores=1;
}
else if(array1[1]=='X' && array1[4]==0 && array1[7]=='X'){
    mainelement=4;
    scores=1;
}
else if(array1[1]=='X' && array1[4]=='X' && array1[7]==0){
    mainelement=7;
    scores=1;
}












if(array1[2]==0 && array1[5]=='Y' && array1[8]=='Y'){
    mainelement=2;
    scores=1;
    }
    else if((array1[2]=='Y' && array1[5]==0 && array1[8]=='Y')){
    mainelement=5;
    scores=1;
    }
    else if(array1[2]=='Y' && array1[5]=='Y' && array1[8]==0){
        mainelement=8;
        scores=1;
    }
    else if(array1[6]=='Y' && array1[7]=='Y' && array1[8]==0){
        mainelement=8;
        scores=1;
    }
    else if(array1[6]=='Y' && array1[7]==0 && array1[8]=='Y'){
        mainelement=7;
        scores=1;
    }
    else if(array1[6]==0 && array1[7]=='Y' && array1[8]=='Y'){
        mainelement=6;
        scores=1;
    }
    else if(array1[0]==0 && array1[1]=='Y' && array1[2]=='Y'){
        mainelement=0;
        scores=1;
    }
    else if(array1[0]=='Y' && array1[1]=='Y' && array1[2]==0){
        mainelement=2;
        scores=1;
    }
    else if(array1[0]=='Y' && array1[1]==0 && array1[2]=='Y'){
        mainelement=1;
        scores=1;
    }
    else if(array1[0]==0 && array1[3]=='Y' && array1[6]=='Y'){
        mainelement=0;
        scores=1;
    }
    else if(array1[0]=='Y' && array1[3]==0 && array1[6]=='Y'){
        mainelement=3;
        scores=1;
    }
    else if(array1[0]=='Y' && array1[3]=='Y' && array1[6]==0){
        mainelement=6;
        scores=1;
    }
    else if(array1[0]==0 && array1[4]=='Y' && array1[8]=='Y'){
        mainelement=0;
        scores=1;
    }
    else if(array1[0]=='Y' && array1[4]==0 && array1[8]=='Y'){
        mainelement=4;
        scores=1;
    }
    else if(array1[0]=='Y' && array1[4]=='Y' && array1[8]==0){
        mainelement=8;
        scores=1;
    }
    else if(array1[2]==0 && array1[4]=='Y' && array1[6]=='Y'){
        mainelement=2;
        scores=1;
    }
    else if(array1[2]=='Y' && array1[4]==0 && array1[6]=='Y'){
        mainelement=4;
        scores=1;
    }
    else if(array1[2]=='Y' && array1[4]=='Y' && array1[6]==0){
        mainelement=6;
        scores=1;
    }
    else if(array1[3]==0 && array1[4]=='Y' && array1[5]=='Y'){
        mainelement=3;
        scores=1;
    }
    else if(array1[3]=='Y' && array1[4]==0 && array1[5]=='Y'){
        mainelement=4;
        scores=1;
    }
    else if(array1[3]=='Y' && array1[4]=='Y' && array1[5]==0){
        mainelement=5;
        scores=1;
    }
    else if(array1[1]==0 && array1[4]=='Y' && array1[7]=='Y'){
        mainelement=1;
        scores=1;
    }
    else if(array1[1]=='Y' && array1[4]==0 && array1[7]=='Y'){
        mainelement=4;
        scores=1;
    }
    else if(array1[1]=='Y' && array1[4]=='Y' && array1[7]==0){
        mainelement=7;
        scores=1;
    }
if(scores==0){
   let number=0
   while(number!=1){
    let ty=parseInt(Math.random()*8)
    if(array1[ty]==0){
        mainelement=ty;
        number=1;
    }
   }

}
return mainelement;
}

function draw(array1){
    let countings=0;
    check()
for(let q=0;q<array1.length;q++){
    if(array1[q]==0){
        countings++;
    }
}
    if(countings==0){
        alert('it a draw')
for(let er=0;er<array1.length;er++){
    array1[er]=0
}
box1.innerText=""
box2.innerText=""
 box3.innerText=""
  box4.innerText=""
   box5.innerText=""
    box6.innerText=""
     box7.innerText=""
      box8.innerText=""
       box9.innerText=""
       box1.style.color="white"
      box2.style.color="white"
        box3.style.color="white"
          box4.style.color="white"
            box5.style.color="white"
              box6.style.color="white"
                box7.style.color="white"
                  box8.style.color="white"
                    box9.style.color="white"
counting=0;
return 0;
    }
}
let score=0;
first.addEventListener('click',function(e){
 let t=e.target
 let apply=t.firstElementChild

let stringing=t.firstElementChild.id
if(array1[stringing]==0){
    apply.innerHTML="X"
array1[stringing]='X';
let draws=draw(array1)
console.log(array1)
if(draws!=0){
let element;
check()
setTimeout(()=>{
    check()
 element=computerresult(array1)
 let lp=document.getElementById(`${element}`);
array1[element]='Y';
if(score==0){
    lp.innerHTML="Y"
    }
    else{
        score=0;
    }
check()
    console.log(element)
},1000)
}
}
})



console.log(array1)





function reset(){
    setTimeout(()=>{
        box1.innerText=""
        box2.innerText=""
         box3.innerText=""
          box4.innerText=""
           box5.innerText=""
            box6.innerText=""
             box7.innerText=""
              box8.innerText=""
               box9.innerText=""
               box1.style.color="white"
              box2.style.color="white"
                box3.style.color="white"
                  box4.style.color="white"
                    box5.style.color="white"
                      box6.style.color="white"
                        box7.style.color="white"
                          box8.style.color="white"
                            box9.style.color="white"
    },5000)
   score=0
}
function check(){
if(box1.innerText=='Y' && box2.innerText=='Y' && box3.innerText=='Y'){
    counting=1
    for(let u=0;u<array1.length;u++){
        array1[u]=0               
    }
    box1.style.color="yellow"
    box2.style.color="yellow"
    box3.style.color="yellow"
    setTimeout(()=>{
alert("Y IS WINNER AND GAME IS AGAIN STARTING IN   5 SECOND")
    },1000)
    score=1
    reset()
}
if(box1.innerText=='X' && box2.innerText=='X' && box3.innerText=='X'){
    counting=1
    for(let u=0;u<array1.length;u++){
        array1[u]=0               
    }
    box1.style.color="yellow"
    box2.style.color="yellow"
    box3.style.color="yellow"
    setTimeout(()=>{
alert("X IS WINNER AND GAME IS AGAIN STARTING IN   5 SECOND")
    },1000)
    score=1
    reset()
}
if(box4.innerText=='X' && box5.innerText=='X' && box6.innerText=='X'){
    counting=1
    for(let u=0;u<array1.length;u++){
        array1[u]=0               
    }
    box4.style.color="yellow"
    box5.style.color="yellow"
    box6.style.color="yellow"
    setTimeout(()=>{
alert("X IS WINNER AND GAME IS AGAIN STARTING IN   5 SECOND")
    },1000)
    score=1
    reset()
}
if(box4.innerText=='Y' && box5.innerText=='Y' && box6.innerText=='Y'){
    counting=1
    for(let u=0;u<array1.length;u++){
        array1[u]=0               
    }
    box4.style.color="yellow"
    box5.style.color="yellow"
    box6.style.color="yellow"
    setTimeout(()=>{
alert("Y IS WINNER AND GAME IS AGAIN STARTING IN   5 SECOND")
    },1000)
    score=1
    reset()
}
if(box7.innerText=='Y' && box8.innerText=='Y' && box9.innerText=='Y'){
    counting=1
    for(let u=0;u<array1.length;u++){
        array1[u]=0               
    }
    box7.style.color="yellow"
    box8.style.color="yellow"
    box9.style.color="yellow"
    setTimeout(()=>{
alert("Y IS WINNER AND GAME IS AGAIN STARTING IN   5 SECOND")
    },1000)
    score=1
    reset()
}
if(box7.innerText=='X' && box8.innerText=='X' && box9.innerText=='X'){
    counting=1
    for(let u=0;u<array1.length;u++){
        array1[u]=0               
    }
    box7.style.color="yellow"
    box8.style.color="yellow"
    box9.style.color="yellow"
    setTimeout(()=>{
alert("Y IS WINNER AND GAME IS AGAIN STARTING IN   5 SECOND")
    },1000)
    score=1
    reset()
}
if(box3.innerText=='X' && box6.innerText=='X' && box9.innerText=='X'){
    counting=1
    for(let u=0;u<array1.length;u++){
        array1[u]=0               
    }
    box3.style.color="yellow"
    box6.style.color="yellow"
    box9.style.color="yellow"
    setTimeout(()=>{
alert("X IS WINNER AND GAME IS AGAIN STARTING IN   5 SECOND")
    },1000)
    score=1
    reset()
}
if(box3.innerText=='Y' && box6.innerText=='Y' && box9.innerText=='Y'){
    counting=1
    for(let u=0;u<array1.length;u++){
        array1[u]=0               
    }
    box3.style.color="yellow"
    box6.style.color="yellow"
    box9.style.color="yellow"
    setTimeout(()=>{
alert("Y IS WINNER AND GAME IS AGAIN STARTING IN   5 SECOND")
    },1000)
    score=1
    reset()
}
if(box2.innerText=='X' && box5.innerText=='X' && box8.innerText=='X'){
    counting=1
    for(let u=0;u<array1.length;u++){
        array1[u]=0               
    }
    box2.style.color="yellow"
    box5.style.color="yellow"
    box8.style.color="yellow"
    setTimeout(()=>{
alert("X IS WINNER AND GAME IS AGAIN STARTING IN   5 SECOND")
    },1000)
    score=1
    reset()
}
if(box2.innerText=='Y' && box5.innerText=='Y' && box8.innerText=='Y'){
    counting=1
    for(let u=0;u<array1.length;u++){
        array1[u]=0               
    }
    box2.style.color="yellow"
    box5.style.color="yellow"
    box8.style.color="yellow"
    setTimeout(()=>{
alert("Y IS WINNER AND GAME IS AGAIN STARTING IN   5 SECOND")
    },1000)
    score=1
    reset()
}
if(box1.innerText=='Y' && box4.innerText=='Y' && box7.innerText=='Y'){
    counting=1
    for(let u=0;u<array1.length;u++){
        array1[u]=0               
    }
    box1.style.color="yellow"
    box4.style.color="yellow"
    box7.style.color="yellow"
    setTimeout(()=>{
alert("Y IS WINNER AND GAME IS AGAIN STARTING IN   5 SECOND")
    },1000)
    score=1
    reset()
}
if(box1.innerText=='X' && box4.innerText=='X' && box7.innerText=='X'){
    counting=1
    for(let u=0;u<array1.length;u++){
        array1[u]=0               
    }
    box1.style.color="yellow"
    box4.style.color="yellow"
    box7.style.color="yellow"
    setTimeout(()=>{
alert("X IS WINNER AND GAME IS AGAIN STARTING IN   5 SECOND")
    },1000)
    score=1
    reset()
}
if(box1.innerText=='X' && box5.innerText=='X' && box9.innerText=='X'){
    counting=1
    for(let u=0;u<array1.length;u++){
        array1[u]=0               
    }
    box1.style.color="yellow"
    box5.style.color="yellow"
    box9.style.color="yellow"
    setTimeout(()=>{
alert("X IS WINNER AND GAME IS AGAIN STARTING IN   5 SECOND")
    },1000)
    score=1
    reset()
}
if(box1.innerText=='Y' && box5.innerText=='Y' && box9.innerText=='Y'){
    counting=1
    for(let u=0;u<array1.length;u++){
        array1[u]=0               
    }
    box1.style.color="yellow"
    box5.style.color="yellow"
    box9.style.color="yellow"
    setTimeout(()=>{
alert("Y IS WINNER AND GAME IS AGAIN STARTING IN   5 SECOND")
    },1000)
    score=1
    reset()
}
if(box3.innerText=='Y' && box5.innerText=='Y' && box7.innerText=='Y'){
    counting=1
    for(let u=0;u<array1.length;u++){
        array1[u]=0               
    }
    box3.style.color="yellow"
    box5.style.color="yellow"
    box7.style.color="yellow"
    setTimeout(()=>{
alert("Y IS WINNER AND GAME IS AGAIN STARTING IN  5 SECOND")
    },1000)
    score=1
    reset()
}
if(box3.innerText=='X' && box5.innerText=='X' && box7.innerText=='X'){
    counting=1
    for(let u=0;u<array1.length;u++){
        array1[u]=0               
    }
    box3.style.color="yellow"
    box5.style.color="yellow"
    box7.style.color="yellow"
    setTimeout(()=>{
alert("X IS WINNER AND GAME IS AGAIN STARTING IN  5 SECOND")
    },1000)
    score=1
    reset()
}
}

const canvas = document.querySelector('canvas')
canvas.fillStyle = '#4dff4d';
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var forpoints;
var pos='0';
const x= canvas.width/2;
const y= canvas.height/2 ;
var b=2*x;
var sid=2*x;
var points=0;
var t=y;
var obj1h=y-120;
var pu1h=y-120;
var inv1h=y-120;
var re=y;
var condcheck1=0;
var rand;
var speed=0;
var pu1speed=0;
var oux1=3*x;
var pux1=3*x;
var inx1=3*x;
var countobj1=1;
var countpu1=1;
var countinv1=1;
var realcountobj1=0;
var realcountpu1=1;
var realcountinv1=1;
var obj1check=0;
var inv1check=0;
var pu1check=0;
var chkcondchek=0;
var timeofgame;
var microvertical;  
var vertadd=0;
var pu1checkdouble=0;
 const background = canvas.getContext('2d');
 const player = canvas.getContext('2d');

 // Designing box

 player.fillStyle = 'blue';       // reddish square box with side 50px 
 player.fillRect(x-300,y,50,50);       //posi   
 
 //Designing upper path 


const upperpath = canvas.getContext('2d');
upperpath.fillStyle = '#24248f';
upperpath.fillRect(0,0,2*x,y-121);    //posi

//Designing lower path 

const lowerpath = canvas.getContext('2d');
lowerpath.fillStyle = '#24248f';
lowerpath.fillRect(0,y+51,2*x,y-51);    // posi

//Follow ups of hole 

const holebf = canvas.getContext('2d');
const holebb = canvas.getContext('2d');
const holeuf = canvas.getContext('2d');
const holeub = canvas.getContext('2d');

// if (typeof(Storage) !== "undefined") {
//     localStorage.setItem("highscore_task2"," "); 
//   }                                                                                                     
//   const isStorage = 'undefined' !== typeof localStorage;

var imageobj1=document.createElement("img");
 imageobj1.src="obj12ndchoice.png";
 var imagepu1=document.createElement("img");
 imagepu1.src="slowdown.png";
 var imageinv1=document.createElement("img");
 imageinv1.src="invinsible.png";


 var imageofobj1=canvas.getContext('2d');
var imageofpu1=canvas.getContext('2d');
var imageofinv1=canvas.getContext('2d');

function motion(){
    
if (pos%2=='0'){
        
       if(t==y)
        { 
            Uppertrain();
     
             setTimeout(()=>{pos++;},500)  //prevent mixing of the animate function caused by clicking the mouse before it reaches the other part 
     
          if(pos=='0'){   //start an hole initialization and background music
         
           place('1');   
           speedincreaser=setInterval(()=>{speed+=1;},30000);
        
           microvertical=setInterval(()=>{vertadd+=0.5;},60000);
           forpoints=setInterval(()=>{points++; score.innerHTML="Score :"+points;},1000);
           
           }
        }
        
    }
    else if(pos%2=="1"){
        if(t==y-120)
        {
            Lowertrain();

        setTimeout(()=>{pos++;},500)   //prevent mixing of the animate function caused by clicking the mouse before it reaches the other part 
    }}
}


function Uppertrain(){
    player.clearRect(0,y-121,x*2,171);
    var Uppertrainmotion=requestAnimationFrame(Uppertrain)
        
    player.fillStyle = 'blue';
    player.fillRect(x-300,t,50,50);
 
        t=t-3;   // monitoring speed of motion
       
        
        if((t==y-120)||(t<y-120)){
            cancelAnimationFrame(Uppertrainmotion);
           
        }  
}

function Lowertrain(){
    player.clearRect(0,y-121,x*2,171);
    var Lowertrainmotion=requestAnimationFrame(Lowertrain)
    player.fillStyle = 'blue';
    player.fillRect(x-300,t,50,50);
 
         t=t+3; // monitoring speed of motion
         
        if((t==y)||(t>y)){
            cancelAnimationFrame(Lowertrainmotion);
           
        }  
}


var score = document.getElementById('score');
var hscoretab = document.getElementById('highestscore')
var high_score = localStorage.getItem("highscore_task2");
if ((high_score == null)||(high_score=='')) {
    high_score = 0;
    console.log('Working YAY');
    localStorage.setItem("highscore_task2", JSON.stringify(high_score))
}
else {
    high_score = JSON.parse(high_score);
    hscoretab.innerHTML = "HighScore: " + high_score;
}
function place(zran)
{

    if(zran=='1')
         {
            b=2*x;
            sid= 2*x;
            holebf.fillRect(2*x,y+50,100,y+51);
            drawholebf();
            drawholebb();
                    if((realcountobj1)%2==0)
                    {
                        oux1=3*x;
                     callobj1();
                    }
                    
                    if((realcountinv1)%2==0)
                     {
                        inx1=3*x;
                     callinv1();
                            }
                    
                     if((realcountpu1)%2==0)
                     {
                        pux1=3*x;
                       callpu1();
                            }
                         
                    realcountinv1++;
                    realcountpu1++;
            realcountobj1++;
            
        }
    else if(zran=='2'){
        
        b=2*x;
        sid= 2*x;
        holeuf.fillStyle ='gray';
        holeuf.fillRect(2*x,0,100,y-120)
        drawholeuf();
        drawholeub();

        if((realcountobj1)%2==0)
        {
            oux1=3*x;
         callobj1();
        }
        
        if((realcountinv1)%2==0)
         {
            inx1=3*x;
         callinv1();
                }
        
         if((realcountpu1)%2==0)
         {
            pux1=3*x;
           callpu1();
                }
             
        realcountinv1++;
        realcountpu1++;
realcountobj1++;
            }
}

function drawholebf(){
    
    boxf=requestAnimationFrame(drawholebf);
    holebf.fillStyle= '#fca504';
    holebf.fillRect(b,y+50,200,y+51);
    b-=8;

    check1(x-300,t,b,sid);    
    if((b==0)||(b<0)){
        cancelAnimationFrame(boxf);      
    }
}

function drawholebb(){
    
    boxb=requestAnimationFrame(drawholebb);
    holebb.fillStyle= '#24248f';
    holebb.fillRect(sid+200,y+50,100,y+51);//third input here is painting repeatedly without clear the previous mark so its continuous  
    sid-=8;
    
    if(sid==-200){
        cancelAnimationFrame(boxb);
        rand=Math.floor((Math.random()*2)+1);
        
        place(rand);
    }
}
function drawholeuf(){
    
    boxf=requestAnimationFrame(drawholeuf);
    holebf.fillStyle= '#fca504';
    holeuf.fillRect(b,0,200,y-120);
    b-=8;
    check2(x-300,t,b,sid);
    
    if(b==0){
        cancelAnimationFrame(boxf);
        
    }
}
function drawholeub(){
    
    boxb=requestAnimationFrame(drawholeub);
    holebb.fillStyle= '#24248f';
    holeub.fillRect(sid+200,0,100,y-120);
    sid-=8;
    
    if(sid==-200){
        cancelAnimationFrame(boxb);
       
        rand=Math.floor((Math.random()*2)+1);
       
        place(rand);
    }
}

function check1(bx,by,ox,ox2)
{ 
    if((ox-bx<=50) && (y-by<=2) && (ox2-bx<=0) && (bx-ox<=200)){
      
        cancelAnimationFrame(boxf);
        cancelAnimationFrame(boxb);
        clearInterval(forpoints);
        gameover();
        
    }
    
}
function check2(bx,by,ox,ox2)
{ 
    if((ox-bx<=50)&&(by-(y-120)<=0)&&(ox2-bx<=0)&&(bx-ox<=200)){
        
        cancelAnimationFrame(boxf);
        cancelAnimationFrame(boxb);
        clearInterval(forpoints);
        gameover();
        
    }
    
}


function callobj1(){

    imageofobj1.clearRect(oux1,obj1h,26,26);

    anicallobj1=requestAnimationFrame(callobj1);
    oux1-=(6+speed-pu1speed);
    if((obj1h==(y-120))||(obj1h<(y-120))){
        obj1check=0;
    }
    if((obj1h==(y+23))||(obj1h>(y+23))){
        obj1check=1;
    }
    if(obj1check==0){
        obj1h=obj1h+(1.5+vertadd);
    }
    if(obj1check==1){
        obj1h=obj1h-(1.5+vertadd);
    }
    imageofobj1.drawImage(document.getElementById('frameC'),oux1,obj1h,25,25);
    checkobj1();
    
    if(oux1<=-25){
        cancelAnimationFrame(anicallobj1);
        countobj1++; 
    }
    
}


function callinv1(){

    imageofinv1.clearRect(inx1,inv1h,26,26);
    anicallinv1=requestAnimationFrame(callinv1);
    inx1-=(6+speed-pu1speed);
    if((inv1h==(y-120))||(inv1h<(y-120))){
        inv1check=0;
    }
    if((inv1h==(y+23))||(inv1h>(y+23))){
        inv1check=1;
    }
    if(inv1check==0){
        inv1h=inv1h+(1.5+vertadd);
    }
    if(inv1check==1){
        inv1h=inv1h-(1.5+vertadd);
    }
    imageofinv1.drawImage(document.getElementById('frameE'),inx1,inv1h,25,25);
    checkinv1();
    if(inx1<=-25){
        cancelAnimationFrame(anicallinv1);
        countinv1++; 
    }
    
}

function callpu1(){

    imageofpu1.clearRect(pux1,pu1h,26,26);

    anicallpu1=requestAnimationFrame(callpu1);
    pux1-=(6+speed-pu1speed);
    if((pu1h==(y-120))||(pu1h<(y-120))){
        pu1check=0;
    }
    if((pu1h==(y+23))||(pu1h>(y+23))){
        pu1check=1;
    }
    if(pu1check==0){
        pu1h=pu1h+(1.5+vertadd);
    }
    if(pu1check==1){
        pu1h=pu1h-(1.5+vertadd);
    }
    imageofpu1.drawImage(document.getElementById('frameD'),pux1,pu1h,25,25);
    checkpu1();
    if(pux1<=-25){
        cancelAnimationFrame(anicallpu1);
        countpu1++; 
    }
    
}

function checkobj1()
{ 
    if((x-(450*x/640)<=oux1)&&(oux1-(x-(450*x/640))<=51)&&(obj1h-re<=51)&&(re-obj1h<=26)){
        imageofobj1.clearRect(oux1,obj1h,26,26);
        cancelAnimationFrame(anicallobj1);
        if(chkcondchek==0){
        cancelAnimationFrame(boxf);
        cancelAnimationFrame(boxb);
        clearInterval(forpoints);
        clearInterval(speedincreaser);
        clearInterval(timeofgame);
        clearInterval(microvertical);
        gameover();
    }
    }
    
}
function checkinv1()
{ 
    if((x-(450*x/640)<=inx1)&&(inx1-(x-(450*x/640))<=51)&&(inv1h-re<=51)&&(re-inv1h<=26)){
        imageofinv1.clearRect(inx1,inv1h,26,26);
        if(pu1checkdouble==1){
        clearTimeout(invinsiblepower);
        }
        pu1checkdouble=1;
        chkcondchek=1;
        invinsiblepower=setTimeout(()=>{chkcondchek=0;pu1checkdouble=0;},10000);
        cancelAnimationFrame(anicallinv1);
        
    }
    
}
function checkpu1()
{ 
    if((x-(450*x/640)<=pux1)&&(pux1-(x-(450*x/640))<=51)&&(pu1h-re<=51)&&(re-pu1h<=26)){
        imageofpu1.clearRect(pux1,pu1h,26,26);
        pu1speed=1.5;
        pu1speedcontrol=setTimeout(()=>{pu1speed=0;},5000);
        cancelAnimationFrame(anicallpu1);
        
    }
    
}

function gameover()
{  console.log('Yay we are in ')
     shoutout.style.display = 'visible';
    canvas.style.display = 'none';
    scor.innerHTML = 'Score :' + points;
    
    if(points>high_score){
        high_score = points;
        hscoretab.innerHTML = "Highscore :" + high_score;
        localStorage.setItem("highscore_task2", JSON.stringify(high_score));

    }
    var Highscoreloc=document.getElementById("Highscoreloc");
    Highscoreloc.innerHTML = "HighScore: " + high_score;

}

window.addEventListener('keydown', function (e) {
    key = e.keyCode;
    if(key==32){
    	e.preventDefault();
    	motion();
    }
});


let seconds=0;
let minutes=0;
let hours=0;

let timer=null;
let displaytime=document.getElementById("display");


function stopwatch(){
    seconds++;
    if(seconds==60){
        seconds=0;
        minutes++;
        if(minutes==60){
            minutes=0;
            hours++;
        }
    }
    let h= hours<10 ? "0"+hours:hours;
    let m= minutes<10 ? "0"+minutes:minutes;
    let s= seconds<10 ? "0"+seconds:seconds;
    
    displaytime.innerHTML=`${h}:${m}:${s}`
    displaytime.innerText=`${h}:${m}:${s}`
}


function watchStart(){
    if(timer!=null){
        clearInterval(timer);
    }
    timer=setInterval(stopwatch,1000);
}
function pause(){
  clearInterval(timer);
}
function reset(){
    
        clearInterval(timer)
        seconds=0;
        hours=0;
        minutes=0;
        displaytime.innerText="00:00:00";
       displaytime.innerHTML="00:00:00";
       timer=null;
    
   
   
}


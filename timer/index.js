
 let h = document.getElementById('hour')
let m = document.getElementById('min')
let s = document.getElementById('sec')
let start = document.getElementById('start')
let reset = document.getElementById('reset')
let sec =0;
let min=0;
let hour=0;
var countdownInterval;
var targetTime;


let runFlag = true;


start.addEventListener('click', function(){
if(runFlag){
    runFlag=false;
    
    hour = +h.value;
    min = +m.value;
    sec = +s.value
    targetTime = hour * 3600 + min * 60 + sec;
    countdownInterval= setInterval(runner,100)
console.log(hour,min,sec,targetTime)
}else{

    runFlag=true
    start.innerText='Start Countdown'
    clearInterval(countdownInterval);

}
})

function runner(){

if (targetTime <= 0) {
            clearInterval(countdownInterval);
            document.getElementById("timer").textContent = "00:00:00";
            document.getElementById('hour').value = 0;
            document.getElementById('min').value = 0;
            document.getElementById('sec').value = 0;
        } else {
            const hour = Math.floor(targetTime / 3600);
            const minute = Math.floor((targetTime % 3600) / 60);
            const second = targetTime % 60;
            document.getElementById("timer").textContent = `${pad(hour)}:${pad(minute)}:${pad(second)}`;
            
            start.innerText='Pause Countdown'
            targetTime--;
        }
}

reset.addEventListener('click',function(){
runFlag=true
start.innerText='Start Countdown'

clearInterval(countdownInterval);
document.getElementById("timer").textContent = "00:00:00";
document.getElementById('hour').value = ''
document.getElementById('min').value= ""
document.getElementById('sec').value = ""



})


function pad(number) {
        if(number<10){
            return `0${number}`
        }
        return number
    }



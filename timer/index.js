
let sec=document.getElementById("sacend")
let minit=document.getElementById("minit")
let timer=null;
let displaytime=document.getElementById("display");
let secend=null;
let minits=null;

  if(sec.value != undefined){
   secend=sec.value;
   if(minit.value!=undefined){
    minits=minit.value;
   }
  }
    let new_minit=minits*60;

function sstart(){
    timer=setInterval(starttimer,1000);
    displaytime.innerText=minit+":"+secend;

    
}
function pause(){

}
function reset(){

}
function starttimer(){
    
    secend--;
    if(secend==0){
     secend=0;
        minits--;
        if(minits==0){
            minits=0;
            clearInterval(timer);
        }
    }

}
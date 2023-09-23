let myform=document.querySelector("form");
let first_name=document.getElementById("fname");
let last_name=document.getElementById("lname");
let mobile_number=document.getElementById("Mobile");
let withdrowal_amount=document.getElementById("amount");
let display=document.getElementById("display")

myform.addEventListener("submit",(arr)=>{
    arr.preventDefault();
    
        
const mypromice= new Promise(function(resolve,reject){
    let flag;
    let mainobj=[
        {fname:"Abhinaba",lname:"Jana",mobile:9831206232,balance:5000},
        {fname:"Afsar",lname:"Md",mobile:8235449893,balance:10000},
        {fname:"Yashvanta",lname:"M",mobile:9481726689,balance:20000},
        {fname:"Prasanta",lname:"Jana",mobile:6294085667,balance:30000},
        {fname:"Biswajit",lname:"Shit",mobile:8016426793,balance:50000},
        {fname:"Varat",lname:"gulla",mobile:7430978213,balance:60000},
         ]

            display.innerHTML=null;
            for(let i=0; i<mainobj.length; i++){
                if(first_name.value==mainobj[i].fname && last_name.value==mainobj[i].lname && mobile_number.value==mainobj[i].mobile && Number(withdrowal_amount.value)<=mainobj[i].balance){
                    flag=true
                }
                if(flag){
                    break;
                }
            }
         
         if(flag==true){
            // resolve()
            console.log(first_name.value=="");
            resolve(mainobj,first_name.value,last_name.value,mobile_number.value,withdrowal_amount.value);
            // break; console.log(first_name.value)
        
        
          }
          else{
            reject({massege:`Payment Unseccesfull`})
          }
        
})
      
     

       
    
    mypromice.then(function(obj){
       for(let i=0;i<obj.length;i++){
        if(first_name.value==obj[i].fname && last_name.value==obj[i].lname && mobile_number.value==obj[i].mobile && Number(withdrowal_amount.value)<=obj[i].balance){
            let myimage=document.createElement("img");
            let para3=document.createElement('h2')
            let h2is=document.createElement("h2");
            // let ul1=document.createElement("ul")
            let para1=document.createElement("p");
            let para2=document.createElement("p");
            para3.textContent=`Payment Successful`
            myimage.src="check_mark (1).png"
            
            // if(Number(withdrowal_amount.value)<=obj[i].balance)
            h2is.textContent=  "Your Balance is :- "+withdrowal_amountof(withdrowal_amount,obj[i].balance);
            para1.textContent="Transaction Number is : "+Math.floor(Math.random()*9000)+1000;
            para2.textContent="Amount recive "+withdrowal_amount.value;
            display.append(myimage,para3,h2is,para1,para2);
            first_name.value=""
            last_name.value="";
            mobile_number.value="";
            withdrowal_amount.value=""
        }
       }
    })
    mypromice.catch(function(err){
        let rejectimage=document.createElement("img")
        let div=document.createElement("div")
        let h2=document.createElement("h2");
        let h22=document.createElement("h2")
        rejectimage.src="paymentreject.png"
        h2.textContent="Transaction Id : "+Math.floor(Math.random()*10000)+100;
        h22.textContent=err.massege;
        div.setAttribute("id","paymentdenide");
        div.append(rejectimage,h2,h22);
        display.append(div);
        console.log(err.massege)
    })
})


function withdrowal_amountof(withdrowal_amount,value){
    if(Number(withdrowal_amount.value)<=Number(value)){
        value-=withdrowal_amount.value
        return value;
    }
}





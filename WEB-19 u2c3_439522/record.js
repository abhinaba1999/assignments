// fill in javascript code here

let myfunction=document.querySelector("#parent_all");
let employeeName=document.querySelector("#name");
let emid=document.getElementById("employeeID");
let department=document.querySelector("#department");
let experience=document.querySelector("#exp")
let expemail=document.querySelector("#email");
let expmobile=document.querySelector("#mbl");
let tbody=document.querySelector("tbody");
let arr1=[];
myfunction.addEventListener("submit",function(event){
    event.preventDefault();
    let temp={
        name:employeeName.value,
        employeeId: emid.value,
        department:department.value,
        experience:experience.value,
        email:expemail.value,
        mobile:expmobile.value,
    }
    arr1.push(temp);
    display(arr1);
})
function display(arr1){
    tbody.innerHTML="";
    arr1.map((ele,index)=>{
     let tr=document.createElement("tr");
     let td1=document.createElement("td")
     let td2=document.createElement("td")
     let td3=document.createElement("td")
     let td4=document.createElement("td")
     let td5=document.createElement("td")
     let td6=document.createElement("td")
     let td7=document.createElement("td");
     let td8=document.createElement("td");
     let button1=document.createElement("button");

     td1.innerText=ele.name;
     td2.innerText=ele.employeeId;
     td3.innerText=ele.department;
     td4.innerText=ele.experience;
     td5.innerText=ele.email;
     td6.innerText=ele.mobile;
     let value1=valueapp(ele.experience);
     td7.innerText=value1;
     button1.innerText="Delete"
     button1.style.backgroundColor="green"
     button1.addEventListener("click",function(){
        
        del(ele,index);
    
     })
     let parent_dep=document.querySelector("#parent_dep");
     let department2=document.querySelector("#department2");
     parent_dep.addEventListener("submit",function(a){
              a.preventDefault();
        let depvalue=department2.value;

        let filtered =arr1.filter((ele)=>ele.department===depvalue);
        display(filtered);
     })
     
     td8.append(button1);
     tr.append(td1,td2,td3,td4,td5,td6,td7,td8);
     tbody.append(tr);
    })
    
}

function valueapp(exp){
   if(Number(exp)>5){
    return "Senior"
   }
   else if(Number(exp)>1&&Number(exp)<5){
    return "Junior";
   }
   else if(Number(exp)<=1){
    return "Fresher";
   }
   else{
    return 0;
   }
}
function del(ele,index){
    arr1.splice(index,1);
     display(arr1);
     
  }
  

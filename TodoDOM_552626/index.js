const myfunction=document.querySelector("form");
let inputTask=document.getElementById("task");
let priority=document.getElementById("priority");
let arr=[];
let tbody=document.querySelector("tbody");
myfunction.addEventListener("submit",function(arr1){
  arr1.preventDefault();
  let objc={
    input:inputTask.value,
    priority:priority.value,
  }
  arr.push(objc);
  tbody.innerHTML="";
  arr.map((ele)=>{
    let  trtemp=document.createElement("tr");
    let td1=document.createElement("td");
    let td2=document.createElement("td");
    let td3=document.createElement("td");
    td1.innerText=ele.input;
    td2.innerText=ele.priority;
    if(ele.priority=="High"){
        td3.style.backgroundColor= "red";
        td3.innerText="red";
    }
    else if(ele.priority=="Low"){
        td3.style.backgroundColor="green";
        td3.innerText="green";
    }
    trtemp.append(td1,td2,td3);
    tbody.append(trtemp)
    console.log(td3)
})
})
console.log(arr);

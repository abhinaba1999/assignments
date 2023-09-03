// fill in javascript code here

let myfunction=document.querySelector("form");
let employeeName=document.querySelector("#name");
let emid=document.getElementById("employeeID");
let department=document.querySelector("#department");
let experience=document.querySelector("#exp")
let expemail=document.querySelector("#email");
let expmobile=document.querySelector("#mbl");
let tbody=document.querySelector("tbody");
let arr1=[];
myfunction.addEventListener("submit",function(arr){
    arr.preventDefault();
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
// let name = document.getElementById('name')
// let id = document.getElementById("employeeID")
// let dep = document.getElementById("department")
// let exp = document.getElementById("exp");
// let mail = document.getElementById("email")
// let phone = document.getElementById('mbl')
// let form = document.querySelector("form")
// let body = document.querySelector('tbody')
// let alldata = [];

// form.addEventListener('submit', function(e){
//     e.preventDefault()

//     let data = {
//         id : alldata.length,
//         name : name.value,
//         Eid : id.value,
//         dep : dep.value,
//         exp : exp.value,
//         mail : mail.value,
//         phone : phone.value,
//     }
//     alldata.push(data)
   
    
//     display()
// })


// function display(){
//     body.innerHTML = '';
//     alldata.map((ele,index)=>{
//         const tr = document.createElement('tr')
//         const tname = document.createElement('td')
//         const tid = document.createElement('td')
//         const tdep = document.createElement('td')
//         const texp = document.createElement('td')
//         const tmail = document.createElement('td')
//         const tphone = document.createElement('td')
//         const tform = document.createElement('td')
//         const del = document.createElement('button')
    
//         tname.innerText = ele.name
//         tid.innerText = ele.Eid
//         tdep.innerText = ele.dep
//         texp.innerText = ele.exp
//         tmail.innerText = ele.mail
//         tphone.innerText = ele.phone
//          if(texp.innerText>=5){
//           tform.innerText = 'Senior'
//          }else if(texp.innerText>2&&ele.exp<5){
//           tform.innerText = 'Junior'
//          }else if(texp.innerText<2){
//           tform.innerText = 'Fresher'
//          }
//         del.innerText = "Delete"
    
//         tr.append(tname,tid,tdep,texp,tmail,tphone,tform,del)
//         body.append(tr);
    
//         del.addEventListener('click', function(){
//           deletefun(ele,index);
            
//         });

//     });

//    function deletefun(ele,index){
//     alldata.splice(index,1)
//     // console.log(alldata)
//       display()
//     };
// };

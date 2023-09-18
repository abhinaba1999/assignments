let button =document.getElementById("button-36")
let display=document.getElementById("display");
button.addEventListener("click",function(){
    let time=setTimeout(() => {
        let checkbox_element=document.querySelectorAll(".checkbox");
        let image=document.querySelectorAll("#parent_image img");
        let headidng=document.querySelectorAll("h2");
        let paragraph=document.querySelectorAll("p");

        for(let i=0;i<checkbox_element.length;i++){
            if(checkbox_element[i].checked==true){
                let div=document.createElement("div")
                let createheading=document.createElement("h2")
                let createparagraph=document.createElement("p");
              let newimage=document.createElement("img");
              let orderId=document.createElement("h3")
              createheading.innerText=headidng[i].innerText
              createparagraph.innerText=paragraph[i].innerText;
              newimage.src=image[i].src;
              orderId.innerText="OrderId: "+Math.floor(Math.random()*5000)+1;
              div.setAttribute("id","display_content")
              div.append(orderId,newimage,createheading,createparagraph)
              display.append(div);
              checkbox_element[i].checked=false;
                
            }
        }


    }, Math.floor(Math.random()*10000)+1000);
})


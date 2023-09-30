 let display=document.getElementById("display")
 let sorting=document.querySelector("#sort")
 let form=document.querySelector("form");
 let search=document.getElementById("search")
 let url='https://fakestoreapi.com/products';
 async function fetch_data(url){
  let ele=await fetch(url)
  let data=await ele.json();
  
display.innerHTML=null;
  displayData(data)
//   console.log(data);
  

    
 
       

  
}


    sorting.addEventListener("change",()=>{
        // console.log(data)
        
            if(sorting.value=='jewelery'){
                fetch_data(`https://fakestoreapi.com/products/category/jewelery`)
             }
             else if(sorting.value=="electronics"){
                fetch_data(`https://fakestoreapi.com/products/category/electronics`)

             }
             else if(sorting.value=="men's clothing"){
                fetch_data(`https://fakestoreapi.com/products/category/men's%20clothing`);

             }
             else if(sorting.value=="women's clothing"){
                fetch_data(`https://fakestoreapi.com/products/category/women's%20clothing`);

             }
             
        
        
      
    }) 




fetch_data(url);

let displayData=(data)=>{
  display.innerHTML=null;
  data.forEach(element => {
    let imagesrc=element.image;
    display.innerHTML+=` <div>
    <img src="${imagesrc}" alt="Image">
    <h2>${element.title}</h2>
    <p>$${element.price}</p>
    <p>${element.description}</p>
    <p>${element.category}</p>
    <p>${element.rating.rate}</p>
    <p>${element.rating.count}</p>
</div>`
    

  });


  document.querySelector("form").addEventListener("submit",(a)=>{
    a.preventDefault();
    display.innerHTML=null;
    data.forEach(ele=>{
      
      if(Number(ele.price)<=Number(search.value)){
        let imagesrc=ele.image;
    display.innerHTML+=` <div>
    <img src="${imagesrc}" alt="Image">
    <h2>${ele.title}</h2>
    <p>$${ele.price}</p>
    <p>${ele.description}</p>
    <p>${ele.category}</p>
    <p>${ele.rating.rate}</p>
    <p>${ele.rating.count}</p>
</div>`
      }
    })
  })
}



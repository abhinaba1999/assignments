let form=document.querySelector("form");
let search=document.getElementById("search")
let gmap_canvas=document.getElementById("gmap_canvas");
let display_weather=document.getElementById("display_weather");

const months=['Jan','Feb','Mar','Apr','May',"Jun",'Jul',"Aug","Sep","Oct","Nov","Dec"]


form.addEventListener("submit",(a)=>{
    a.preventDefault();
    gmap_canvas.src=`https://maps.google.com/maps?q=${search.value}&t=&z=13&ie=UTF8&iwloc=&output=embed`
    displayweather(search.value)
})

async function displayweather(city){
       if(city==undefined){
        city="pune"
        display_weather.innerHTML=null;
        let ele=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b7ca0dbb676f8e66b8eeb8bff4b82ee3&units=metric`)
        let data=await ele.json();
        console.log(data)
        displayMydata(data)
        city=null;
       }
       else{
        display_weather.innerHTML=null;
        let ele=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b7ca0dbb676f8e66b8eeb8bff4b82ee3&units=metric`)
        let data=await ele.json();
        console.log(data)
        displayMydata(data)
        city=null;
       }
       
    
  

}
displayweather()

function displayMydata(data){
    
 let timeordate=document.createElement("h4");
 let location=document.createElement("h3");
 let temp=document.createElement("h2");
 let felslike_and_all=document.createElement("p");
 let wnw_and_hpa=document.createElement("p");
 let humidity_and_uv=document.createElement("p");
 let drowpoint_and_visibility=document.createElement("p");

 //Time date formating;
   const time= new Date();
   const month=time.getMonth();
   const date=time.getDate();
   const hour=time.getHours();
   const hoursin12formate= hour>=13 ? hour%12:hour;
   const minutes=time.getMinutes();
   const ampm=hour >=12 ? 'PM': 'AM';

   timeordate.innerHTML=`${months[month]} ${date}, ${hoursin12formate} : ${minutes} ${ampm}`
   
   location.innerHTML=`${data.name}, ${data.sys.country}`
   temp.innerHTML=`${data.main.temp} &#8451 `;
   felslike_and_all.innerHTML=`${data.main.feels_like} *C ${data.weather[0].main}. ${data.weather[0].description}`


   
   //wnw and hpa data;
  
  let  wind_degrees = data["wind"]["deg"]
   
   
   let wind_speed_kmh = wind_degrees * (60 * 1.852 / 360)
   
  
   let wind_speed_ms = Math.floor(wind_speed_kmh * (1000 / 3600))
   

   
   
  wnw_and_hpa.innerHTML=   `${wind_speed_ms}m/s WNW ${data["main"]["pressure"]} hPa`;
  //humidity_and_uv data;

  humidity_and_uv.innerHTML=`${data.main.humidity} %  UV: 4`;


   let dewpoint = Math.floor(data["main"]["temp"] - ((100 - data["main"]["humidity"]) / 5))
   let  visibility = data["visibility"]

drowpoint_and_visibility.innerHTML=`Dewpoint: ${dewpoint}&#8451 Visibility: ${visibility/1000} K.M`



 display_weather.append(timeordate,location,temp,felslike_and_all,wnw_and_hpa,humidity_and_uv,drowpoint_and_visibility)
  

}
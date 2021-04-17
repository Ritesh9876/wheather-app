var WeathgerModule=(function(){
    async function getwhether(city){
        const api=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=9b09a2bc325d9dc09437dae69927c862`;
        try{
        let weather1= await fetch(api,{mode:'cors'});
        const data= await weather1.json();
        if(data.cod===200){
         WeatherCard( data.name,data.main.temp,data.main.humidity,data.wind.speed);
            return data;
        }else{
            console.log(data.message);
            // console.log("Radhe Krushna");
        }
    }catch(error){
        alert(error);
        return null;
    }
    }
  async function WeatherCard(cityName,temp,humidity,wind){
      console.log(cityName);
      const Values= document.querySelectorAll(".weather-report p");

    Values[0].innerHTML=cityName;
    Values[1].innerHTML=`${temp} &#8451`;
    Values[2].innerHTML=`humidity:${humidity}`;
    Values[3].innerHTML=`Wind speed:${wind}`;

  }

    return {getwhether,WeatherCard};
}());




const cityName=document.querySelector(".input-city");

const Search=document.querySelector(".search");

Search.addEventListener("click",(e)=>{
    e.preventDefault();
    WeathgerModule.getwhether(cityName.value);
    cityName.value="";
})
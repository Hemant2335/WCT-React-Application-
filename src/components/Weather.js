import React, { useState } from 'react';
import Cardtemp from './Cardtemp';
import Cardhum from './Cardhum';
import Cardwind from './Cardwind';
const Weather = (props) => {

    const [state , setstate]  = useState(
        {
            temp : "--",
            max_temp : "--",
            min_temp : "--",
            humidity : "--",
            windspeed : "--",
        }
    )
    
    
    const update = async()=>{
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'eeb0daffaemshccbcbf498419aaep180623jsn592c72a006e4',
                'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'   
            }
        };

        let x = document.getElementById('place').value;
        props.setprogress(20);
        const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${x}`;
        let data = await fetch(url,options);
        props.setprogress(40);
        let parseddata = await data.json();
        props.setprogress(80);
        console.log(parseddata);

        setstate(
            {
                max_temp : parseddata.max_temp,
                temp : parseddata.temp,
                min_temp : parseddata.min_temp,
                humidity : parseddata.humidity,
                windspeed : parseddata.wind_speed
            }
        )

        props.setprogress(100);
        console.log(state.temp);

    }        

    return <div>
        <div className='flex content-center justify-center'>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">What is your City?</span>
                </label>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" id='place' />
            </div>
            <button className="btn mx-2 my-9" onClick={()=>update()}>Button</button>
        </div>
        <div className="grid grid-cols-3 auto-cols-auto m-10 p-10">
        <Cardtemp title = "Temprature"  img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvyubBxsJh4DtIBL_KCTWq7m6aD50t4VEOGQ&usqp=CAU" temp = {state.temp} max_temp = {state.max_temp} min_temp = {state.min_temp}/>
        <Cardhum title = "Humidity" img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi1d3njipQStn2jC1ZPIiYlXLGAGmKgfJuEw&usqp=CAU" hum = {state.humidity} />
        <Cardwind title = "Wind Speed" img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1pYkcJKwOqzAskdXjy2Tk7KqQxy8ED-UqFph-gj8DsVpHrGowcGm-9yj8Bj3zvJ3v7P0&usqp=CAU" wind = {state.windspeed}/>
      </div>
    </div>;
}
export default Weather;
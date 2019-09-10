import axios from 'axios'

const API_KEY='15d0ba498342a785569658e76c6cba9a';
//const ROOT_URL=`http://api.openweathermap.org/data/2.5/weather?APPID=${API_KEY}`;
const ROOT_URL=`http://api.openweathermap.org/data/2.5/forecast?APPID=${API_KEY}`;
export const FETCH_WEATHER='FETCH_WEATHER';

export default function fetchWeather(cityName){
    const url=`${ROOT_URL}&id=${cityName}`;
    console.log('request url....',url);
    const request=axios.get(url);
console.log('request....',request);
    return {
        type:FETCH_WEATHER,
        payload:request
    };


}

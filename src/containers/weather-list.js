import React,{Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart'
import GoogleMap from '../components/google-map';
class WeatherList extends Component {

    renderWeather(cityData) {
        const temps = _.map(cityData.list.map(weather => weather.main.temp),(temp)=>temp-273.15);
        const presssures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);
       const {lon,lat}=cityData.city.coord;

        return (
            <tr key={cityData.city.name}>
                <td><GoogleMap lon={lon} lat={lat}/></td>
                <td>
                    <Chart data={temps} color="red" units="C"/>
                    </td>
                    <td>
                    <Chart data={presssures} color="green" units="hPA"/>
                    </td>
            <td>
                    <Chart data={humidities} color="blue" units="%"/>
            </td>
            </tr>
        )
    };

    render() {
        console.log('this.props>>>>',this.props.weather);
        return (
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature (C)</th>
                    <th>Pressure (hPA)</th>
                    <th>Humanity (%)</th>
                </tr>
                </thead>
                <tbody>
                {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}
const mapStateToProps=({weather}) =>{
    return{weather};
}

export default connect(mapStateToProps)(WeatherList);
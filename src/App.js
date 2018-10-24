import React from "react"; 
import Title from "./components/Title";
import Form from "./components/Form";
import Weather from "./components/Weather";




class App extends React.Component {
    state = {
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        error: undefined,
    }

    getweather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
            const api_call = await fetch('http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=9f5901b8750efbe25a42f3a94ec47fa5') 
            const data = await api_call.json();
            
           if (city && country) {
            this.setState({
                city: data.city.name,
                country: data.city.country,
                temperature: data.list[0].main.temp,
                humidity: data.list[0].main.humidity,                 
                error: ""
            });
    } else{
        this.setState({
            city: undefined,
            country: undefined,
            temperature: undefined,
            humidity: undefined,                 
            error: "Please enter the values."
        });
    }
    
}
    render() {
        return(
            <div>
                <div className="wrapper">
                <div className="main">
                <div className="container">
                <div className="row">

                   <div className="col-xs-5 title-container">
                  <Title />
                  
                   </div> 
                
                <div className="col-xs-7 form-container">

                <Title /> 
                <Form getweather={this.getweather}/>
                <Weather 
                
                temperature={this.state.temperature}
                city={this.state.city}
                country={this.state.country}
                humidity={this.state.humidity}
                error={this.state.error}
                 
                />

                </div>
                </div>
                </div>
                </div>
                </div>


            </div>

        );

    }

};



export default App;

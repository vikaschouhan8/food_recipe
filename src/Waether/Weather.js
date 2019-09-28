import React, { Component, useEffect, useState} from 'react';

export default class Weather extends Component {
    render() {
        const city = 'Indore'
        const APP_ID = '086826eb7afeef46944b733441a9e506'
        const API_URI = `http://api.openweathermap.org/data/2.5/weather?q=${city},In&appid=${APP_ID}`

        useEffect(()=>{
            console.log("Hey")
        }, [])
        return (
            <>
              <h1></h1>  
            </>
        )
    }
}

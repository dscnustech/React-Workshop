import React, { Component } from 'react';
import CardList from "./CardList";
import SearchBox from './SearchBox';
import { weather } from './weather';

class App extends Component {
    render(){
        return (
            <div className="tc">
                <h1>Weather App</h1>
                <SearchBox />
                <CardList weather={weather}/>
            </div>
        )
    }
}

export default App;
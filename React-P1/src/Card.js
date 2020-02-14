import React, { Component } from 'react';
import cloud from './assets/cloud.png'
import sun from './assets/sunny.png'

class Card extends Component {
    render(){
        return (
            <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
                {this.props.value < 28.0 
                    ? <img src={cloud} height="200" width="200" alt="Cloud Pic"/>
                    : <img src={sun} height="200" width="200" alt="Sun Pic"/>}
                <div>
                    <h3>{this.props.name}</h3>
                    <p>{this.props.value}°</p>
                </div>
            </div>
        )
    }
}

export default Card;
import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countdown: 'February 14, 2019',
            newCountdown: ''
        }
    }

    changeCountdown() {
        this.setState({countdown: this.state.newCountdown})
    }

    render(){
        return(
            <div className="App"> 
                <div className="App-title">
                    Countdown to {this.state.countdown} 
                </div>
                <Clock 
                    countdown={this.state.countdown}
                />
                <div className="date-input">
                    <input
                        type="text"
                        placeholder='January 1 2020'
                        onChange={event => this.setState({ newCountdown: event.target.value })}
                    />
                </div>
                <button type="submit" onClick={() => this.changeCountdown()}>
                    CHECK THE CLOCK
                </button>
            </div>
        )     
    }
}

export default App;
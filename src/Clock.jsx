import React, { Component } from 'react';
import './App.css';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        }
    }

    componentWillMount() {
        this.getTimeUntil(this.props.countdown);
    }

    componentDidMount(){
        setInterval(() => this.getTimeUntil(this.props.countdown), 1000);
    }

    leading0(num) {
        return num < 10 ? '0' + num : num;
    }

    getTimeUntil(countdown) {
        const time = Date.parse(countdown) - Date.parse(new Date());
        const seconds = Math.floor((time/1000) % 60);
        const minutes = Math.floor((time/1000/60) % 60);
        const hours = Math.floor(time/(1000*60*60) % 24);
        const days = Math.floor(time/(1000*60*60*24));

        this.setState({days, hours, minutes, seconds});
    }

    render() {
        return (
        <div className="timers"> 
            <div className="Clock-days">
                <span className="time-number">{this.leading0(this.state.days)}</span> 
                <span className="time-text"> days</span>
            </div> 
            <div className="Clock-hours">
                <span className="time-number">{this.leading0(this.state.hours)}</span> 
                <span className="time-text"> hours</span>
            </div>
            <div className="Clock-minutes">
                <span className="time-number">{this.leading0(this.state.minutes)}</span> 
                <span className="time-text"> minutes</span>
            </div> 
            <div className="Clock-seconds">
                <span className="time-number">{this.leading0(this.state.seconds)}</span> 
                <span className="time-text"> seconds</span>
            </div> 
        </div>
        )
    }
}

export default Clock;
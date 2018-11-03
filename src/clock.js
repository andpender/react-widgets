import React, { Component } from 'react';

class Clock extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          time: new Date().toLocaleString(),
        };
    
        this.tick = this.tick.bind(this);
      }

      tick() {
        this.setState({
            time: new Date().toLocaleString(),
        });
      }

      componentDidMount() {
        this.intervalId = setInterval(this.tick,1000);
      }

      componentWillUnmount() {
        clearInterval(this.intervalId);
      }

      render() {
          const { time } = this.state;
          return (
            <h1 className="clock">{time}</h1>
          );
      }
};



export default Clock;
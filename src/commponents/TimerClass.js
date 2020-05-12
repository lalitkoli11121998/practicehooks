import React, { Component } from 'react';

class TimerClass extends Component {
    constructor(props){
        super(props)

        this.state = {
            count:0
        }
    }
    tick = () =>{
        this.setState((prevState) =>({
            count: prevState.count +1
        }))
    }
    
    componentDidMount(){
        this.interval = setInterval(this.tick, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }
    render() {
        return (
            <div>
                {this.state.count}
            </div>
        );
    }
}

export default TimerClass; 
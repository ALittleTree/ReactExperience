import React, { Component } from 'react';

class Demo10 extends Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }
    componentDidMount(){
        this.timerID=setInterval(
            ()=>this.thick(),
            1000
        );
    }
    componentWillUnmount(){
        clearInterval(this.timerID);
    }
    thick() {
        this.setState({     
            date: new Date()
        });
    }
    render() {
        return (
            <div>
                <h2>Demo10:</h2>
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}

export default Demo10
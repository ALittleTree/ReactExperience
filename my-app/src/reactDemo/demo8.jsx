import React, { Component } from 'react'
class Demo8 extends Component {
    constructor(props) {
        super(props);
        this.state = { like: false };
    }
    handleClick = () => {
        this.setState({ like: !this.state.like });
    }
    render() {
        var text = this.state.like ? 'like' : 'not like';
        return (
            <div>
                <h2>Demo8:</h2>
                <p onClick={this.handleClick}>
                    I'm {text} you.
            </p>
            </div>

        );
    }
}

export default Demo8
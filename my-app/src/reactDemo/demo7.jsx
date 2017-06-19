import React, { Component } from 'react';

class Demo7 extends Component {
    handleClick = function () {
        console.log("123")
    }
    render() {
        return (
            <div>
                <input type="text" ref="myTextInput" />
                <input type="button" value="foucus the text input" onClick={this.handleClick} />
            </div>
        );
    }
}

export default Demo7
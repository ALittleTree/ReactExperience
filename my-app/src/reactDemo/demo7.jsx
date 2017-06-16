import React, { Component } from 'react';

class Demo7 extends Component {
    handleClick = function () {
        this.refs.myTextInput.focus();
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
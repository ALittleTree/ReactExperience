import React, { Component } from 'react';

class Demo7 extends Component {
    handleClick = function () {
        var aa=document.getElementById('myTextInput');
        alert(aa.value);
    }
    render() {
        return (
            <div>
                <h2>Demo7:</h2>
                <input type="text" id="myTextInput" />
                <input type="button" value="foucus the text input" onClick={this.handleClick} />
            </div>
        );
    }
}

export default Demo7
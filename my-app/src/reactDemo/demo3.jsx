import React, { Component } from 'react';
var names = [<div key='1'>hui</div>, <div key='2'>chao</div>, <div key='3'>liu</div>]
class Demo3 extends Component {
    render() {
        return (
            <div>
                <h2>Demo3:</h2>
                {names}
            </div>
        );
    }
}

export default Demo3
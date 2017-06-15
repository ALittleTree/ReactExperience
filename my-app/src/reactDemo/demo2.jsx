import React, { Component } from 'react';
var names = ['hui', 'chao', 'liu']
class Demo2 extends Component {
    render() {
        return (
            <div>
                {
                    names.map(function (name) {
                        return <div>hello {name}</div>
                    })
                }
            </div>
        );
    }
}

export default Demo2
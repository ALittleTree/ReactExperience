import React, { Component } from 'react';
var names = ['hui', 'chao', 'liu']
class Demo2 extends Component {
    render() {
        return (
            <div>
                <h2>Demo2:</h2>
                {
                    names.map(function (name) {
                        return <div key={name}>hello {name}</div>
                    })
                }
            </div>
        );
    }
}

export default Demo2
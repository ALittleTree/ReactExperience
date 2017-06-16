import React, { Component } from 'react';
class Demo5 extends Component {
    render() {
        return (
            <ul>
                {
                    React.Children.map(this.props.children, function (child) {
                        return <li>Demo5:{child}</li>;
                    })
                }
            </ul>
        );
    }
}

export default Demo5
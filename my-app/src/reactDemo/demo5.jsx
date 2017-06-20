import React, { Component } from 'react';
class Demo5 extends Component {
    render() {
        return (
            <div>
                <h2>Demo5</h2>
                <ul>
                    {
                        React.Children.map(this.props.children, function (child) {
                            return <li>{child}</li>;
                        })
                    }
                </ul>
            </div>

        );
    }
}

export default Demo5
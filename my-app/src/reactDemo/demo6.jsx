import React, { Component } from 'react';
import PropTypes from "prop-types";

class Demo6 extends Component {
    render() {
        return (
            <div>
                <h2>Demo6:</h2>
                <div>{this.props.name}</div>
            </div>
        );
    }
}

Demo6.propTypes = {
    name: PropTypes.string
}
Demo6.defaultProps = {
    name: 'Demo6:hcliu123'
}
export default Demo6
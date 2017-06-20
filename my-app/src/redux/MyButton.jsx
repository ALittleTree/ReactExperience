import React,{Componet} from 'react'

class MyButton extends Componet{
    render(){return(
        <div>
            <button onClick={this.props.onClick}>New Item</button>
        </div>
    )};
}

export default MyButton
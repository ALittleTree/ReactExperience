import React,{Component} from 'react'

class Demo9 extends Component{
    constructor(props){
        super(props);
        this.state={value:'Hello'};
    }
    handleChange=(event)=>{
        this.setState({value:event.target.value});
    }
    render(){
        var value=this.state.value;
        return(
            <div>
                <h2>Demo9:</h2>
                <input type="text" value={value} onChange={this.handleChange}/>
                <p>{value}</p>
            </div>
        )
    }
}

export default Demo9
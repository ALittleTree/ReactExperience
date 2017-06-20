import React,{Componet} from 'react'
import MyButton from './MyButton'
import ButtonActions from './ButtonAction'

class MyButtonController extends Componet{
    createNewItem=()=>function(event){
        ButtonActions.addNewItem('new Item');
    };
    render(){
        return(
            <MyButton onClick={this.createNewItem}></MyButton>
        )
    }
}

export default MyButtonController

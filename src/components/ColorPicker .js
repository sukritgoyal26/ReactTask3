import { Component } from 'react';

import "./styles.css";

const arr = ["#cf0606", "#07ed1e", "#073ded", "#e9ed07", "#ed07ed", "#07ede9", "#faa716", "#91276a", "#fcd0c7", "#28a745", "#e65f05", "#087bc7", "#4a1b07", "#f57842", "#164266", "#b89c12"]

export class Container extends Component{
    
    constructor(){
        super();
        this.state = {
            color: "#28a745"
        }
        this.toggle = false;
    }

    handleColor = () => {
        this.setState({
            toggle:true
        });
    }

    checkColor = (e) => {
        this.setState({
            color: e.target.style.backgroundColor,
            toggle:false
        });
    }

    render(){
        return(
            <div className='container'>
                <h2 >Color Picker</h2>
                <div className="display" >
                    <div className='items'>
                        {(this.state.toggle)?arr.map((item) => {
                            return(
                                <button onClick={this.checkColor}  style={{margin:"5px" ,border:0 , width:"50px", height:"50px", backgroundColor:item, boxShadow:"2px 2px 10px #3b383a"}} ></button>
                            );
                        })
                        :<p></p>}
                    </div>
                    <div className='pp'>
                        <button id="clickButton" onClick={this.handleColor} style={{backgroundColor:this.state.color}}>Pick a color</button>
                    </div>
                </div>
            </div>
        );
    }
}
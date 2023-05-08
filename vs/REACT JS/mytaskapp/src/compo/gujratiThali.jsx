import React, { Component } from "react";

class GujratiThali extends Component {
    constructor() {
        super();
        this.state = {name1: "",name2: "",name3: "",name4: "",name5: "",name6: "",name7: "",name8: "",img:""};
    }
    abtnclck = () => {
        console.log("btn called");
        this.setState({name1: "1 Sabji",name2: "1 kathod",name3: "1 dal",name4: "1 Rice",name5: "5 Roti",name6: "1 Papad",name7: "1 Buttermilk",name8: "1 Salad",img:"image/logo192.png"});
    };
    bbtnclck = () => {
        this.setState({name1: " Sabji",name2: " khichali",name3: "kdhi",name4: "Rice",name5: "Rotlo",name6: "Papad",name7: "Buttermilk",name8: "Salad"})
    }
    cbtnclck = () => {
        this.setState({name1: "Sabji...",name2: "kathod...",name3: "dal...",name4: "Rice...",name5: "Roti...",name6: "Papad...",name7: "Buttermilk...",name8: "Salad..."})
    }


    render() {
        return (
            <div>
                <div className="mt-5">
                    <img src={this.state.img} alt="" />
                    <button className="btn btn-primary ms-5" onClick={this.abtnclck}>
                        fix lunch
                    </button>
                    <button className="btn btn-success ms-5" onClick={this.bbtnclck}>
                        fix deinner
                    </button>
                    <button className="btn btn-primary  ms-5" onClick={this.cbtnclck}>
                        other
                    </button>
                </div>
                <div className="ms-5 mt-5">
                    <p>{this.state.name1}</p>
                    <p>{this.state.name2}</p>
                    <p>{this.state.name3}</p>
                    <p>{this.state.name4}</p>
                    <p>{this.state.name5}</p>
                    <p>{this.state.name6}</p>
                    <p>{this.state.name7}</p>
                    <p>{this.state.name8}</p>
                </div>
                
            </div>
        );
    }
}

export default GujratiThali;

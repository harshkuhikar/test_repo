import React, { Component } from 'react';

class panjabiThLI extends Component {
    constructor() {
        super();
        this.state = { name1: "", name2: "", name3: "", name4: "", name5: "", name6: "", name7: "", name8: "" }
    }
    abtnclck = () => {
        this.setState({ name1: "1 Paneer Sabji", name2: "1 Chana Masala / Mix Veg", name3: "5 Tawa Roti", name4: "1 Dalfry", name5: "1 Pulao", name6: "1 Papad", name7: "1 Sweet", name8: "1 Buttermilk" })
    }
    bbtnclck = () => {
        this.setState({name1: "Sabji", name2: "lassi", name3: "Roti", name4: "Dalfry", name5: "Pulao", name6: "Papad", name7: "Sweet", name8: "Buttermilk"})
    }
    cbtnclck = () => {
        this.setState({name1: "Sabji", name2: "lassi", name3: "Roti", name4: "Dalfry", name5: "Pulao", name6: "Papad", name7: "Sweet", name8: "Buttermilk"})
    }

    render() {
        return (
            <div>
                <div className="mt-5">
                    <button className="btn btn-success ms-5" onClick={this.abtnclck}> fix lunch</button>
                    <button className="btn btn-primary ms-5" onClick={this.bbtnclck}>fix deinner</button>
                    <button className="btn btn-success ms-5" onclick={this.cbtnclck}>other</button>
                </div>
                <div >
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

export default panjabiThLI;
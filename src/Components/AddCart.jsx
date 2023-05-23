import React from "react";

class AddCart extends React.Component {
    constructor(props){
        super(props);
        this.state={
            name:"",
            price:0,
        }
    }
    render() {
        return (
            <form className="row" onSubmit={(e)=>{
                e.preventDefault();
                this.props.addItem(this.props.name,Number(this.props.price))
            }}>
                <div className="mb-3 col-4">
                    <label htmlFor="inputName">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputName"
                        aria-describedby="name"
                        placeholder="Enter Name"
                        name="name"
                        onChange={(e) =>{this.setState({name:e.currentTarget.value})}}
                        value={this.state.name}
                    />
                   
                </div>
                <div className="mb-3 col-4">
                    <label htmlFor="inputPrice">Price</label>
                    <input
                        type="number"
                        className="form-control"
                        id="price"
                        placeholder="price"
                        name="price"
                        onChange={(e) =>{this.setState({price:Number(e.currentTarget.value)})}}
                        value={this.state.price}
                    />
                </div>
                
                <button type="submit" className="btn btn-primary col-4">
                    Submit
                </button>
            </form>

        );
    }
}

export default AddCart;
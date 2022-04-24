import React, { Component } from "react";
import "./Push.css"

export class AddContact extends Component {
    constructor(props) {
        super(props)
        this.state = {
          name : "",
          email : "",
          address : ""
        }

        // this.props.add(this.state)
        // console.log(this.state)
    }


     HandleSubmit = (ev) => {
        ev.preventDefault();
        if((this.state.name ==="" || this.state.address ==="" || this.state.email ==="" )) {
            alert("Please, ensure you fill in all inputs");
            return console.log("TRUE");
            
        }
          
          this.setState({
            name : "",
            email : "",
            address : ""
        })
        this.props.add(this.state)
        console.log(this.state)
      }
      

    render() {
        return(<>
            <div className="push"></div>
              <div className="container 
                mx-auto my-4 
                position-relative 
                effect d-block pb-4">
              <h3 className="text-center text-success p-2"> ADD CONTACT</h3>
                <div className="card">
                    <div className="card-body">
                       <form onSubmit={this.HandleSubmit}>

                           <div className="form-name my-2">
                               <div className="form-group pb-2">
                                   <label htmlFor="name" className="pb-2">Name</label>
                                   <input type="text" 
                                    name="name"
                                    value={this.state.name}
                                    onChange = { (e) => this.setState({
                                        name : e.target.value.trim()
                                    }) }
                                    placeholder = "Enter your Name"
                                    className="form-control"
                                   />
                               </div>
                           </div>

                           <div className="form-email my-2">
                               <div className="form-group">
                                   <label htmlFor="email" className="pb-2">Email</label>
                                   <input type="email" 
                                    name="email"
                                    value={this.state.email}
                                    onChange = {(e) => this.setState({
                                        email : e.target.value.trim()
                                    })}
                                    placeholder = "Enter your Email"
                                    className="form-control"
                                   />
                               </div>
                           </div>

                           <div className="form-email my-2">
                               <div className="form-group">
                                   <label htmlFor="address" className="pb-2">Address</label>
                                   <input type="text" 
                                    name="text"
                                    value={this.state.address}
                                    onChange = {(e) => this.setState({
                                        address : e.target.value.trim()
                                    })}
                                    placeholder = "Enter your Address"
                                    className="form-control"
                                   />
                               </div>
                           </div>


                              <button type="submit" 
                              className="btn btn-outline-secondary 
                              btn-block w-100 my-3
                              text-uppercase">Add Contact</button>
                           </form>    
                    </div>
                     </div> 
                    </div>          
            </>
        )
    }
}
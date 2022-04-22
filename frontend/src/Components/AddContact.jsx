import React, { Component } from "react";
import "./Push.css"

export class AddContact extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {

      const HandleSubmit = (ev) => {
          ev.preventDefault();
          alert("form submitted successfully")
        }

        return(<>
            <div className="push"></div>
              <div className="container 
                mx-auto my-4 
                position-relative 
                effect d-block pb-4">
              <h3 className="text-center text-capitalize text-success p-2"> ADD CONTACT</h3>
                <div className="card">
                    <div className="card-body">
                       <form onSubmit={HandleSubmit}>

                           <div className="form-name my-2">
                               <div className="form-group pb-2">
                                   <label htmlFor="name" className="pb-2">Name</label>
                                   <input type="text" 
                                    name="name"
                                    // value={}
                                    // onChange = {}
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
                                    // value={}
                                    // onChange = {}
                                    placeholder = "Enter your Email"
                                    className="form-control"
                                   />
                               </div>
                           </div>

                              <button type="submit" className="btn btn-outline-secondary btn-block w-100 my-3">ADD Contact</button>
                           </form>    
                    </div>
                     </div> 
                    </div>
           
            </>
        )
    }
}
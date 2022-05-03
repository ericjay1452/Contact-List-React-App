import React from "react";
import { ContactCard } from "./ContactCard";
import { Link } from "react-router-dom";

export const ContactList = (props) => {
    
    
    const Handler= (id) => {
        props.DeleteHandler(id)
    }; 

    console.log(props.contacts)
    
    const results = props.contacts.map( (contact) => {
       const {id, name, email, address} = contact;
        return (
            <div className="container bg-secondary position-relative d-block" key={id}>
                 <ContactCard id={id} name ={name} email = {email} address ={address} Deleted ={Handler}/>
            </div>
        )
    }
    
    )
    
   return (
       <>
       <div className='position-relative mt-5'></div>
       <div className="text-center my-2 d-flex justify-content-between container"> 
         <h5>Contact List</h5>

         <Link to="/add">
         <button className="btn btn-outline-primary text-center text-uppercase d-block">Add Contact</button>
         </Link>

       </div>
       <div className="position-relative d-block">
           {results}
       </div>
       </>
   )
}
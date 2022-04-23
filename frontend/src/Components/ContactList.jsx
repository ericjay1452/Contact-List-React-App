import React from "react";
import { ContactCard } from "./ContactCard";


export const ContactList = (props) => {
    const result = props.contacts.map( (contact) => {
       const {id, name, email, address} = contact;
        return (
            <div className="container bg-secondary 
            position-relative 
            d-block " key={id}>
                 <ContactCard name = {name} email =  {email} address = {address}/>
            </div>
        )
    })
    
    
   return (
       <div className="position-relative d-block">
           {result}
       </div>
   )
}
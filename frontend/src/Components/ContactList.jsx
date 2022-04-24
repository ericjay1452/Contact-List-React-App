import React,{useEffect, useState} from "react";
import { ContactCard } from "./ContactCard";


export const ContactList = (props) => {
    const Handler= (id) => {
        props.DeleteHandler(id)
    }; 

    const result = props.contacts.map( (contact) => {
       const {id, name, email, address} = contact;
        return (
            <div className="container bg-secondary position-relative d-block" key={id}>
                 <ContactCard id={id} name ={name} email = {email} address ={address} Deleted ={Handler} key = {id}/>
            </div>
        )
    })
    
   return (
       <div className="position-relative d-block">
           {result}
       </div>
   )
}
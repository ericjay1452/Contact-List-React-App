import React from 'react'
import {FaTrash, FaPen} from "react-icons/fa"
import Img from "../images/user.svg"

export const Contact = (props) => {
    const {name, id, email, address} = props.contact
    console.log(props.contact)  
  return (
    <div>
     <section className='container position-relative text-black' key={id}>
         <div>
             <img src={Img} alt={name}/>
         </div>
             <h2>{name}</h2>
             <p>{address}</p>
             <h5>{email}</h5>
             <span className='icon'
              style={{fontWeight : "lighter"}}
              onClick = {()=> props.Delete(id)}><FaTrash /></span>
             <span className='icon'><FaPen /></span>
          </section>
    </div>
  )
}

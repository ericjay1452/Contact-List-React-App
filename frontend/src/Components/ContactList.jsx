import React from 'react'
import { Link } from 'react-router-dom'
import { Contact } from './Contact'
export const ContactList = (props) => {
  const contacts = [{
    id : 1,
    name : "eric",
    email : "ericjay1452@gmail.com",
    address : "10"
  }]
  console.log(props)
  const MappedArray = contacts.map((contact,index) => {
      return (
         <Contact contact = {contact} key = {index} Delete = {props.Delete}/>
      )
  })
  return (
    <div className='container'style={{marginTop : "5rem"}}>
      <div className="container-fluid d-flex justify-content-between">
      <h2 className='text-center'>Contact List </h2>

      <Link to="/add">
      <button className="btn btn-danger">ADD CONTACT</button>
      </Link>
      </div>
      

         <div className="text-warning d-block position-relative mx-auto bg-danger">
             {MappedArray}
         </div>
    </div>
  )
}

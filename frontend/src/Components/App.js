import React, {useEffect, useState}from 'react';
import "bootstrap/dist/css/bootstrap.css"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

import { AddContact } from './AddContact';
import { ContactList } from './ContactList';
import { ContactHeader } from './ContactHeader';



function App() {
  const Local_Storage_info = "Contact"
  const [contact, setContact ] = useState([])

  const AddContactFunction = (contacts) =>{
    setContact( [...contact, {id : uuidv4(), ...contacts} ])
  }


  useEffect( () =>{
   localStorage.setItem(Local_Storage_info, JSON.stringify(contact))
  }, [contact])

  useEffect( () =>{
    const RetrievedLocalKey = JSON.parse(localStorage.getItem(Local_Storage_info))
    if(RetrievedLocalKey) setContact(RetrievedLocalKey)
   }, [])

   const DeleteHandler = (id) =>{
     const DeletedArray = contact.filter(contacts => contacts.id !== id)
     setContact(DeletedArray)
   }
  return (<>
        <Router>
        <ContactHeader />
        <Routes>
        <Route path='/' exact element = {<ContactList contact = {contact} Delete = {DeleteHandler}/>}/>
        <Route path='/add'
         element = {<AddContact />}/>
          
        </Routes>
        </Router>

      {/* <AddContact AddContactFunction = {AddContactFunction}/> */}
      
      {/* <ContactList contact = {contact} Delete = {DeleteHandler}/> */}
      </>
  );
}

export default App;

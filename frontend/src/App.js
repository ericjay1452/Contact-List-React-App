import React, {useState, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';
import "bootstrap/dist/css/bootstrap.css"
import { ContactHeader } from './Components/ContactHeader';
import { AddContact } from './Components/AddContact';
import { ContactList } from './Components/ContactList';

function App() {
  const LOCAL_STORAGE_SCOPE = "Contacts";
  const [contacts, setContacts ] = useState([]);

   const ADD = (contact) => {
   setContacts([...contacts, {id : uuidv4(), ...contact}])

   }

   useEffect( ()=> {
    const GetDataFromLocalStorage = JSON.parse(localStorage.getItem(LOCAL_STORAGE_SCOPE));
    if(GetDataFromLocalStorage) setContacts(GetDataFromLocalStorage);  
    console.log("Extracted values hmm")
    },[])

  useEffect( ()=> {
  localStorage.setItem(LOCAL_STORAGE_SCOPE, JSON.stringify(contacts));
  },[contacts])

   const DeleteHandler = (id) => {
     const FilteredId = contacts.filter( (contact) => {
       return contact.id !== id;
     });
     setContacts(FilteredId)
   }

  return (<>
     <ContactHeader />
       <div className='position-relative mb-5'></div>
       <AddContact add = {ADD}/>
         <ContactList contacts ={contacts} DeleteHandler = {DeleteHandler}/>
      </>
  );
}

export default App;

import React, {useState, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';
import "bootstrap/dist/css/bootstrap.css"
import { ContactHeader } from './ContactHeader';
import { AddContact } from './AddContact';
// import { AddHooks } from './AddHooks';
import { ContactList } from './ContactList';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {

  const LOCAL_STORAGE_SCOPE = "Contacts";
  const [contacts, setContacts ] = useState([]);

   const ADD = (contact) => {
   setContacts([...contacts, {id : uuidv4(), ...contact}])

   }

   useEffect( ()=> {
    const GetDataFromLocalStorage = JSON.parse(localStorage.getItem(LOCAL_STORAGE_SCOPE))
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
       <Router>
     <ContactHeader/>
           <Routes>
           <Route path = "/" 
           element={ 
           <ContactList contacts ={contacts} 
           DeleteHandler = {DeleteHandler}/>}
           
           />
      
       { <Route path = "add" element={ <AddContact add = {ADD}/>}/>}
       {/* <ContactList contacts ={contacts} DeleteHandler = {DeleteHandler}/> */}
       
         
         </Routes>

        </Router>
      </>
  );
}

export default App;

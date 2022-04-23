import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import "bootstrap/dist/css/bootstrap.css"
import { ContactCard } from './Components/ContactCard';
import { ContactHeader } from './Components/ContactHeader';
import { AddContact } from './Components/AddContact';
import { ContactList } from './Components/ContactList';

function App() {

  const [contacts, setContacts ] = useState([
    {id : "1", name : "Ericjay", email : "Ericjay1452@gmail.com", address :"10, ojumola street, Olodi Apapa, Lagos."},
    {id : "2", name : "Ericjay", email : "Ericjay1452@gmail.com", address: "10, ojumola street, Olodi Apapa, Lagos."}
  ])
  return (<>
     <ContactHeader />
       <div className='position-relative mb-5'></div>
       <AddContact />
         <ContactList contacts= {contacts}/>
      </>
  );
}

export default App;

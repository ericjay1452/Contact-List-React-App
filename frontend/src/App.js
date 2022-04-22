import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import "bootstrap/dist/css/bootstrap.css"
import { ContactCard } from './Components/ContactCard';
import { ContactHeader } from './Components/ContactHeader';
import { AddContact } from './Components/AddContact';
import { ContactList } from './Components/ContactList';

function App() {
  return (<>
     <ContactHeader />
       <div className='position-relative mb-5'></div>
       <AddContact />
        <ContactCard />
         <ContactList />
      </>
  );
}

export default App;

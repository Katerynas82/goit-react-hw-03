import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

  
     const App = () => {

      const defaultContacts = [
             {
               id: nanoid(),
               contactName: "Rosie Simpson",
               number: "459-12-56",
             },
             {
               id: nanoid(),
               contactName: "Hermione Kline",
               number: "443-89-12",
             },
             {
               id: nanoid(),
               contactName: "Eden Clements",
               number: "645-17-79",
             },
             {
               id: nanoid(),
               contactName: "Annie Copeland",
               number: "227-91-26",
             },
           ];
   
     const [contacts, setContacts] = useState(() => {
       const savedContacts = window.localStorage.getItem("contacts");
       if (savedContacts) {
         const parsedContacts = JSON.parse(savedContacts);
        
         return parsedContacts.length > 0 ? parsedContacts : defaultContacts;
       }
       return defaultContacts;
     });

    
     useEffect(() => {
       window.localStorage.setItem("contacts", JSON.stringify(contacts));
     }, [contacts]);
   
  const [filter, setFilter] = useState("");
  const handleChange = (evt) => {
    setFilter(evt.target.value);
  };
   const filteredContacts = contacts.filter((contact) =>
    contact.contactName.toLowerCase().includes(filter.toLowerCase()));
  

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm contacts={contacts} setContacts={setContacts} />
      <SearchBox filter={filter} onFilterChange={handleChange} />
      <ContactList contacts={filteredContacts} setContacts={setContacts} />
    </div>
  );
};

export default App;

import { useState } from "react";
import style from '../Contact/Contact.module.css'
import { nanoid } from "nanoid";


const Contact = () => {
  // eslint-disable-next-line no-unused-vars
  const [contacts, setContacts] = useState([
    { id: nanoid(), contactName: "Rosie Simpson", number: "459-12-56" },
    { id: nanoid(), contactName: "Hermione Kline", number: "443-89-12" },
    { id: nanoid(), contactName: "Eden Clements", number: "645-17-79" },
    { id: nanoid(), contactName: "Annie Copeland", number: "227-91-26" },
  ]);
   const handleDelete = (id) => {
     const updatedContacts = contacts.filter((contact) => contact.id !== id);
     setContacts(updatedContacts);
   };

  return (
    <>
      <ul>
        {contacts.map((contact) => (
          <li className={style.listItem} key={contact.id}>
            <span>
              {contact.contactName}: {contact.number}
            </span>
            <button onClick={(handleDelete(contact.id))}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Contact;

import { useState } from "react";
import style from '../Contact/Contact.module.css'

const Contact = () => {
  // eslint-disable-next-line no-unused-vars
  const [contacts, setContacts] = useState([
    { id: "id-1", contactName: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", contactName: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", contactName: "Eden Clements", number: "645-17-79" },
    { id: "id-4", contactName: "Annie Copeland", number: "227-91-26" },
  ]);

  return (
    <>
      <ul>
        {contacts.map((contact) => (
          <li className={style.listItem} key={contact.id}>
            {contact.contactName}: {contact.number}
            <button>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Contact;

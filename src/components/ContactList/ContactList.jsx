import Contact from "../Contact/Contact";


const ContactList = ({ contacts, setContacts }) => {
  
  const handleDelete = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
    console.log(contacts);
  };
  return (
    <>
      <ul>
        {contacts && contacts.length > 0 ? (
        contacts.map((contact) => (
          <Contact
            key={contact.id}
            contact={contact}
            handleDelete={handleDelete}
          />
        ))
        ) : ( <p> No contacts available</p> )}
      </ul>
    </>
  );
};

export default ContactList;

import Contact from "../Contact/Contact";


const ContactList = ({ contacts, handleDelete }) => {
  
  
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

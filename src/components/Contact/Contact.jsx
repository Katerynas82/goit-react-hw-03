import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import style from "../Contact/Contact.module.css";

const Contact = ({ contact, handleDelete }) => {
  return (
    <>
      <li className={style.contactItem}>
        <span>
          <FaUser /> {contact.contactName}
        </span>
        <span>
          <FaPhone /> {contact.number}
        </span>

        <button
          onClick={() => handleDelete(contact.id)}
          className={style.delBtn}
        >
          Delete
        </button>
      </li>
    </>
  );
};

export default Contact;

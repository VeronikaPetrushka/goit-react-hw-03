import css from './ContactList.module.css';
import Contact from "../Contact/Contact";

const ContactList = ({ contacts, handleDeleteContact }) => {
  return (
    <ul className={css.ContactList}>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Contact
            id={contact.id}
            name={contact.name}
            number={contact.number}
            handleDeleteContact={handleDeleteContact}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;


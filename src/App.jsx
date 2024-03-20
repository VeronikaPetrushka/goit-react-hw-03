import './App.css'
import ContactForm from './components/ContactFrom/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import { useState, useEffect } from 'react';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const App = () => {

  const [inputValue, setInputValue] = useState("");
  const [contacts, setContacts] = useState(() => {
    const storedContacts = localStorage.getItem("contacts");
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    } else {
      setContacts(initialContacts);
    }
  });

  // useEffect(() => {
  //   const storedContacts = localStorage.getItem('contacts');
  //   if (storedContacts) {
  //     setContacts(JSON.parse(storedContacts));
  //   } else {
  //     setContacts(Contacts);
  //   }
  // }, []);

  useEffect(() => {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts]);

  const handleChange = (value) => {
    setInputValue(value);
    filterContacts(value);
  };
  
  const filterContacts = (value) => {
    const filtered = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(value.toLowerCase())
    );
    setContacts(filtered);
  };

  const handleAddContact = (contact) => {
    const updatedContacts = [...contacts, { ...contact, id: `id-${Date.now()}` }];
    setContacts(updatedContacts);
  };

  const handleDeleteContact = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
  };

  return (
    <div>
      <h1 className="PhoneBookTittle">Phonebook</h1>
      <ContactForm
        onAddContact={handleAddContact}
      />
      <SearchBox
        inputValue={inputValue}
        handleChange={handleChange} />
      <ContactList
        contacts={contacts}
        onDeleteContact={handleDeleteContact}
      />
</div>

  );
};

export default App;

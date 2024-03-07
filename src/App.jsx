import './App.css'
import ContactForm from './components/ContactFrom/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import { useState } from 'react';

const Contacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const App = () => {

  const [inputValue, setInputValue] = useState("");
  const [filteredContacts, setFilteredContacts] = useState(Contacts);

  const handleChange = (value) => {
    setInputValue(value);
    filterContacts(value);
  };
  
  const filterContacts = (value) => {
    const filtered = Contacts.filter((contact) =>
      contact.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredContacts(filtered);
  };

  // const handleAddContact = (contact) => {
  //   const updatedContacts = [...filteredContacts, contact];
  //   setFilteredContacts(updatedContacts);
  // };

  // const handleDeleteContact = (id) => {
  //   const updatedContacts = filteredContacts.filter((contact) => contact.id !== id);
  //   setFilteredContacts(updatedContacts);
  // };

  return (
    <div>
      <h1 className="PhoneBookTittle">Phonebook</h1>
      <ContactForm
        // onAddContact={handleAddContact}
      />
      <SearchBox inputValue={inputValue} handleChange={handleChange} />
      <ContactList
        contacts={filteredContacts}
        // onDeleteContact={handleDeleteContact}
      />
</div>

  );
};

export default App;

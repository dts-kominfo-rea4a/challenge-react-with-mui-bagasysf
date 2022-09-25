import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import contactsJSON from "./data/contacts.json";

// Uncomment untuk memuat daftar kontak
// import contactsJSON from './data/contacts.json';
const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm

  const [contacts, setContacts] = useState(contactsJSON);

  const addContacts = (newContact) => {
    const objContact = {
      name: newContact.name,
      phone: newContact.phone,
      email: newContact.email,
      photo: newContact.photo,
    };

    const newContacts = [...contacts, objContact];
    setContacts(newContacts);
  };

  return (
    <div className="App">
      <Header />
      <Main contacts={contacts} addContacts={addContacts} />
    </div>
  );
};

export default App;

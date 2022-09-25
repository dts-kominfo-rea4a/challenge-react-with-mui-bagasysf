// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card
import { Card, TextField, Button } from "@mui/material";
import { useState } from "react";

const ContactForm = ({ addContacts }) => {
  // Form berisi name, phone, email, dan photo url
  // Buatlah state newContact berupa objek sesuai dengan data yang ada
  const [newContact, setNewContact] = useState({
    name: "",
    phone: "",
    email: "",
    photo: "",
  });

  const onInputNameChangeHandler = (event) => {
    setNewContact({ ...newContact, name: event.target.value });
    console.log(newContact);
  };
  const onInputPhoneChangeHandler = (event) => {
    setNewContact({ ...newContact, phone: event.target.value });
    console.log(newContact);
  };
  const onInputEmailChangeHandler = (event) => {
    setNewContact({ ...newContact, email: event.target.value });
    console.log(newContact);
  };
  const onInputPhotoChangeHandler = (event) => {
    setNewContact({ ...newContact, photo: event.target.value });
    console.log(newContact);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    addContacts(newContact);
    setNewContact({
      name: "",
      phone: "",
      email: "",
      photo: "",
    });
  };

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <Card
          variant="outlined"
          style={{
            display: "flex",
            gap: "1rem",
            flexDirection: "column",
            padding: "2rem",
          }}
        >
          <TextField
            required
            id="filled-basic"
            label="Name"
            variant="filled"
            size="small"
            value={newContact.name}
            onChange={onInputNameChangeHandler}
          />
          <TextField
            required
            id="filled-basic"
            label="Phone"
            variant="filled"
            size="small"
            value={newContact.phone}
            onChange={onInputPhoneChangeHandler}
          />
          <TextField
            required
            id="filled-basic"
            label="Email"
            type="email"
            variant="filled"
            size="small"
            value={newContact.email}
            onChange={onInputEmailChangeHandler}
          />
          <TextField
            required
            id="filled-basic"
            label="Photo URL"
            type="text"
            variant="filled"
            size="small"
            value={newContact.photo}
            onChange={onInputPhotoChangeHandler}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button
              type="submit"
              variant="contained"
              style={{
                display: "inline-flex",
                paddingRight: "2.5rem",
                paddingLeft: "2.5rem",
                backgroundColor: "black",
              }}
            >
              ADD NEW
            </Button>
          </div>
        </Card>
      </form>
    </>
  );
};

export default ContactForm;

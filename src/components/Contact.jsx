// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from "react";
import {
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
} from "@mui/material";

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
  // Contact berisi foto, nama, telepon, dan email
  const { name, photo, email, phone } = data;
  return (
    <>
      <List
        style={{
          display: "flex",
          padding: "0 1rem",
          borderBottom: "1px solid lightgray",
        }}
      >
        <ListItem>
          <ListItemAvatar>
            <Avatar src={photo} alt={photo}></Avatar>
          </ListItemAvatar>
          <div>
            <ListItemText primary={name} />
            <ListItemText secondary={phone} />
            <ListItemText secondary={email} />
          </div>
        </ListItem>
      </List>
    </>
  );
};

export default Contact;

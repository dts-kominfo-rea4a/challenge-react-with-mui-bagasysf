// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { Card } from "@mui/material";

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ contacts }) => {
  // Contact berisi foto, nama, telepon, dan email
  return (
    <>
      <Card
        variant="outlined"
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "2rem",
        }}
      >
        <List
          sx={{
            width: "100%",
            maxWidth: "100%",
            bgcolor: "background.paper",
          }}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0",
            padding: "0px",
            borderRadius: "0.3rem",
            border: "1px solid lightgray",
          }}
        >
          {contacts.map((contact) => (
            <ListItem
              style={{
                borderBottom: "1px solid lightgray",
              }}
              key={contact.email}
            >
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src={contact.photo} />
              </ListItemAvatar>
              <div>
                <ListItemText primary={contact.name} />
                <ListItemText secondary={contact.phone} />
                <ListItemText secondary={contact.email} />
              </div>
            </ListItem>
          ))}
        </List>
      </Card>
    </>
  );
};

export default Contact;

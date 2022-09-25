import { Card } from "@mui/material";
import Contact from "./Contact";
import ContactForm from "./ContactForm";

const Main = ({ contacts, addContacts }) => {
  return (
    <>
      <main
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
          gap: "2rem",
          padding: "2rem",
        }}
      >
        <ContactForm addContacts={addContacts} />
        <Card
          style={{
            border: "1px solid lightgray",
            borderRadius: "0.3rem",
            boxShadow: "none",
          }}
        >
          {contacts.map((contact) => (
            <Contact data={contact} key={contact.email} />
          ))}
        </Card>
      </main>
    </>
  );
};

export default Main;

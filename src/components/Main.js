import Contact from "./Contact";
import ContactForm from "./ContactForm";

const Main = ({ contacts, addContacts }) => {
  return (
    <>
      <main
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
          padding: "2rem",
          gap: "2rem",
        }}
      >
        <ContactForm addContacts={addContacts} />
        <Contact contacts={contacts} />
      </main>
    </>
  );
};

export default Main;

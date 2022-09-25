// Kalian bisa menambahkan CSS di src/components/Header.css
// atau langsung tambahkan dengan sx={{}}
import React from "react";
import Typography from "@mui/material/Typography";

// Header berisi judul dan subtitle
// Judul: Call a Friend
// Subtitle: Your friendly contact app
const Header = () => {
  return (
    <>
      <header
        style={{
          padding: "2rem 0",
        }}
      >
        <Typography variant="h4">Call a Friend</Typography>
        <Typography
          variant="subtitle2"
          style={{
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "center",
            padding: ["0.2rem 0.5rem"],
            backgroundColor: "white",
            fontWeight: 300,
          }}
        >
          Your friendly contact app
        </Typography>
        <hr
          style={{
            marginTop: "-0.8rem",
            backgroundColor: "dimgray",
            border: "none",
            height: "1px",
          }}
        />
      </header>
    </>
  );
};

export default Header;

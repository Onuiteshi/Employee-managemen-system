import React from "react";
import { Button } from "@mui/material";
import Add from "@mui/icons-material/Add";

function Header({ setIsAdding }) {
  return (
    <header>
      <h3>Employee Management Software</h3>
      <div style={{ marginTop: "30px", marginBottom: "18px" }}>
        <Button
          onClick={() => setIsAdding(true)}
          startIcon={<Add />}
          color="secondary"
          variant="contained"
        >
          Add Button
        </Button>
      </div>
    </header>
  );
}

export default Header;

import React from "react";
import HighlightIcon from "@material-ui/icons/Highlight";

function Header() {
  return (
    <header>
      <h1>
        <HighlightIcon style={{ fontSize: 40 }} />
        Keeper
      </h1>
    </header>
  );
}

export default Header;

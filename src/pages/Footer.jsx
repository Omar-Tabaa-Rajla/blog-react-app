import { weeksToDays } from "date-fns/esm";
import React from "react";

const Footer = () => {
  const today = new Date();
  return (
    <footer className="Footer">
      <p>Copyright &copy; {today.getFullYear()}</p>{" "}
    </footer>
  );
};

export default Footer;

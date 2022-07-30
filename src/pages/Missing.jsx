import React from "react";
import { NavLink } from "react-router-dom";
const Missing = () => {
  return (
    <main className="Missing">
      <h2>Page not found</h2>
      <p>Well, that's disappointing</p>
      <p>
        <NavLink to="/">Visit our Homepage</NavLink>
      </p>
    </main>
  );
};

export default Missing;

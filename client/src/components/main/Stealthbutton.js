import React from "react";
import { Link } from "react-router-dom";

function Button({ children, className }) {
  return (
    <>
      <Link className={className}>{children}</Link>
    </>
  );
}

export default Button;

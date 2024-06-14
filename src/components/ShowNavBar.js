import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function ShowNavBar({ children }) {
  const location = useLocation();
  const [ShowNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    if (location.pathname === "/login") {
      setShowNavbar(false);
    } else if (location.pathname === "/register") {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
  }, [location]);

  return <div>{ShowNavbar && children}</div>;
}

export default ShowNavBar;

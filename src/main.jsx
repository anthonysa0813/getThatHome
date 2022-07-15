import React from "react";
import ReactDOM from "react-dom/client";
import GetHomeApp from "./GetHomeApp";
import "./assets/icons/style.css";
import UserContextProvider from "./pages/user/context/UserContext";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContextProvider>
      <GetHomeApp />
    </UserContextProvider>
  </React.StrictMode>
);

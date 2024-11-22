import React from "react";
import "./styles/color.css";
import "./styles/font.css";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.css";
import "./styles/tailwind.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
ReactDOM.render(
  <React.StrictMode>
    {/* <GoogleOAuthProvider clientId="http://820788248067-10fo1ntpl8tdjkuqplekds9dss033or8.apps.googleusercontent.com">
      ...
    </GoogleOAuthProvider> */}
    ;
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

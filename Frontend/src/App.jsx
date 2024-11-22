import { GoogleOAuthProvider } from "@react-oauth/google";
import { ProSidebarProvider } from "react-pro-sidebar";
import React from "react";
import Routes from "./Routes";

function App() {
  return (
    <ProSidebarProvider>
      <GoogleOAuthProvider clientId="http://820788248067-10fo1ntpl8tdjkuqplekds9dss033or8.apps.googleusercontent.com">
        <Routes />
      </GoogleOAuthProvider>
    </ProSidebarProvider>
  );
}

export default App;

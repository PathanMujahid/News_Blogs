import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Auth from "./Auth";

function Layout() {
  const isAuth = parseInt(localStorage.getItem("isAuth")) || 0;
  console.log({ isAuth });
  const [isAuthenticated, updateAuthenticated] = React.useState(isAuth);

  if (!isAuthenticated) {
    return (
      <>
        <Auth updateAuth={updateAuthenticated} />
      </>
    );
  }

  return (
    <>
      <div style={{ display: "flex" }}>
        <Routes>
          <Route path="./Navigation.js" element={<Navigation />} />
        </Routes>
      </div>
    </>
  );
}

export default Layout;

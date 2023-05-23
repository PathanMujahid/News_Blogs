import React from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "./Auth";
import Home from "./Home";
import { Article } from "./Article";

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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article" exact component={() => <Article />} />

        {/* <Route path="/trendings" element={<Trendings />} />
        <Route path="/technews" element={<Technews />} /> */}
      </Routes>
    </>
  );
}

export default Layout;

import React, { useEffect } from "react";
import Header from "./Header";
import { getArticles } from "../store/articles/Articles_action";
import { useDispatch } from "react-redux";
import Articles from "./Articles";

function Home() {
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArticles());
  }, []);
  return (
    <div>
      <Header />
      <Articles />
    </div>
  );
}

export default Home;

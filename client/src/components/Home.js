import React, { useContext } from "react";
import { Router, Route } from "react-router-dom";
import { UserContext } from "../context/userContext";
import Articles from "../containers/Articles";
import ArticleProvider from "../context/articleContext";
import AddArticle from "./AddArticle";
export default function Home() {
  const { userData } = useContext(UserContext);
  // const addList = () => history.push("/addList");
  return (
    <div className="page">
      {userData.user ? <h1>Welcome {userData.user.firstName}</h1> : <h2></h2>}
      <ArticleProvider>
        {userData.user ? (
          <AddArticle />
        ) : (
          <h2>Please log in to add your list</h2>
        )}
        <Articles />
      </ArticleProvider>
    </div>
  );
}

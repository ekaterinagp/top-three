import React from "react";
import "../css/Article.css";

const article = ({ article }) => (
  <div className="article">
    <h1>{article.title}</h1>
    <p>{article.body}</p>
  </div>
);

export default article;

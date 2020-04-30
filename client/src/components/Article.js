import React from "react";
import "../css/Article.css";

const article = ({ article }) => (
  <div className="article">
    <h1>{article.title}</h1>
    <p>{article.item1}</p>
    <p>{article.description1}</p>
    <p>{article.item2}</p>
    <p>{article.description2}</p>
    <p>{article.item3}</p>
    <p>{article.description3}</p>
  </div>
);

export default article;

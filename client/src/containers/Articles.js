import React, { useContext, useState } from "react";
import { ArticleContext } from "../context/articleContext";
import Article from "../components/Article";
import axios from "axios";

export default function Articles() {
  // const [title, setTitle] = useState();
  // const [item1, setItem1] = useState();
  // const [item2, setItem2] = useState();
  // const [item3, setItem3] = useState();
  // const [description1, setDescription1] = useState();
  // const [description2, setDescription2] = useState();
  // const [description3, setDescription3] = useState();
  // const { setArticleData } = useContext(ArticleContext);
  return axios.get("http://localhost:9090/list").then(function (response) {
    const articles = response.data.response;
    console.log(articles);
    return (
      <div>
        {articles.map(
          (article) => article.title
          // <Article key={article.id} article={article} />
        )}
      </div>
    );
  });

  // const allArticles = await axios.get("http://localhost:9090/list").then;
  // console.log(allArticles.data.response);
  // const articles = allArticles.data.response;
  // console.log(articles);
  // const article = ({ article }) => (
  //   <div className="article">
  //     <h1>{article.title}</h1>
  //     <p>{article.item1}</p>
  //     <p>{article.description1}</p>
  //     <p>{article.item2}</p>
  //     <p>{article.description2}</p>
  //     <p>{article.item3}</p>
  //     <p>{article.description3}</p>
  //   </div>
  // );

  // const { articles } = useContext(ArticleContext);
}

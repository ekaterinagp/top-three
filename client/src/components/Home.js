import React, { useContext, useState } from "react";
import axios from "axios";

import { UserContext } from "../context/userContext";
import Articles from "../containers/Articles";
import { ArticleContext } from "../context/articleContext";
import AddArticle from "./AddArticle";

// import AllArticles from "./AllArticles";
export default function Home() {
  const [title, setTitle] = useState();
  const [item1, setItem1] = useState();
  const [item2, setItem2] = useState();
  const [item3, setItem3] = useState();
  const [description1, setDescription1] = useState();
  const [description2, setDescription2] = useState();
  const [description3, setDescription3] = useState();
  // const { setArticleData } = useContext(ArticleContext);

  let articles = [];
  const getResponse = async () => {
    const res = await axios.get("http://localhost:9090/list");
    // setArticleData({
    //   title: res.data.response.title,
    //   item1: res.data.response.item1,
    //   description1: res.data.response.description1,
    //   item2: res.data.response.item2,
    //   description2: res.data.response.description2,
    //   item3: res.data.response.item3,
    //   description3: res.data.response.description3,
    // });
    articles = res.data.response;
    // articles.forEach((article) => {
    //   setTitle(res.data.response.title);
    //   setItem1(res.data.response.item1);
    //   setItem2(res.data.response.item2);
    //   setItem3(res.data.response.item3);
    //   setDescription1(res.data.response.description1);
    //   setDescription2(res.data.response.description2);
    //   setDescription3(res.data.response.description3);
    // });

    console.log(res.data.response);

    // const articles = response.data.response;
  };

  getResponse();

  const { userData } = useContext(UserContext);
  // const addList = () => history.push("/addList");
  console.log(userData);
  return (
    <div className="page">
      {userData.user ? <h1>Welcome {userData.user.email}</h1> : <h2></h2>}
      {/* <ArticleContext.Provider> */}
      {userData.user ? <AddArticle /> : <h2>Please log in to add your list</h2>}
      <div>
        {articles.map(
          (article) => article.title
          // <Article key={article.id} article={article} />
        )}
      </div>
      {/* <Articles /> */}
      {/* </ArticleContext.Provider> */}
      {/* <AllArticles /> */}
    </div>
  );
}

import React, { createContext, useReducer } from "react";
import { reducer } from "./reducer";
export const ArticleContext = createContext();

const ArticleProvider = ({ children }) => {
  const [articles, dispatch] = useReducer(reducer, [
    { id: 1, title: "post 1", body: "Quisque cursus, metus bla bla" },
    { id: 2, title: "post 2", body: "Quisque cursus, metus vitae pharetra" },
  ]);
  // const saveArticle = (article) => {
  //   const newArticle = {
  //     id: Math.random() + "ek" + Math.random(),
  //     title: article.title,
  //     body: article.body,
  //   };
  //   setArticles([...articles, newArticle]);
  // };
  return (
    <ArticleContext.Provider value={{ articles, dispatch }}>
      {children}
    </ArticleContext.Provider>
  );
};

export default ArticleProvider;

import { createContext } from "react";

export const ArticleContext = createContext(null);

// import React, { createContext, useReducer } from "react";
// import { reducer } from "./reducer";
// import axios from "axios";
// export const ArticleContext = createContext();

// const ArticleProvider = async ({ children }) => {
//   const [articles, dispatch] = useReducer(reducer, [
//     {
//       id: 1,
//       title: "post 1",
//       item1: "Quisque cursus, metus bla bla",
//       description1: "one one one",
//       item2: "two two",
//       description2: "decs desc2",
//       item3: "3333",
//       description3: "three three",
//     },
//     {
//       id: 2,
//       title: "post 2",
//       item1: "Quisque cursus, metus vitae pharetra",
//       description1: "one1 one",
//       item2: "2222",
//       description2: "decs desc2",
//       item3: "ole ole",
//       description3: "three three",
//     },
//   ]);

//   const articlesRes = await axios.get("http://localhost:9090/list");
//   console.log(articlesRes);
//   // const saveArticle = (article) => {
//   //   const newArticle = {
//   //     id: Math.random() + "ek" + Math.random(),
//   //     title: article.title,
//   //     body: article.body,
//   //   };
//   //   setArticles([...articles, newArticle]);
//   // };
//   return (
//     <ArticleContext.Provider value={{ articles, dispatch }}>
//       {children}
//     </ArticleContext.Provider>
//   );
// };

// export default ArticleProvider;

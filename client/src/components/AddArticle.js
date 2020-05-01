import React, { useState, useContext } from "react";
import "../css/Article.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { ArticleContext } from "../context/articleContext";
import Error from "./Error";

const AddArticle = () => {
  const [title, setTitle] = useState();
  const [item_1, setItem1] = useState();
  const [item_2, setItem2] = useState();
  const [item_3, setItem3] = useState();
  // const [description1, setDescription1] = useState();
  // const [description2, setDescription2] = useState();
  // const [description3, setDescription3] = useState();
  const [error, setError] = useState("");
  // const { setArticleDetails } = useContext(ArticleContext);
  const history = useHistory();

  const addNewArticle = async (e) => {
    console.log(localStorage.getItem("id"));
    console.log("we are in add article");

    e.preventDefault();
    try {
      const id = localStorage.getItem("id");
      console.log(id);
      const enteredData = {
        title,
        item_1,
        // description1,
        item_2,
        // description2,
        item_3,
        // description3,
      };

      const addedDataRes = await axios.post(
        `http://localhost:9090/${id}/list/add`,
        enteredData
      );
      console.log(addedDataRes);
      // setArticleDetails({
      //   title: enteredData.title,
      // });
      // history.push("/");
    } catch (error) {
      console.log(error);
      // error.response.data.msg && setError(error.response.data.msg);
    }
  };

  return (
    <div>
      <form onSubmit={addNewArticle} className="add-article">
        <input
          type="text"
          id="title"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          id="item_1"
          placeholder="First item on your list"
          onChange={(e) => setItem1(e.target.value)}
        />
        {/* <input
          type="text"
          id="description1"
          placeholder="Tell more about it"
          onChange={(e) => setDescription1(e.target.value)}
        /> */}
        <input
          type="text"
          id="item_2"
          placeholder="Second item on your list"
          onChange={(e) => setItem2(e.target.value)}
        />
        {/* <input
          type="text"
          id="description2"
          placeholder="Tell more about it"
          onChange={(e) => setDescription2(e.target.value)}
        /> */}
        <input
          type="text"
          id="item_3"
          placeholder="Second item on your list"
          onChange={(e) => setItem3(e.target.value)}
        />
        {/* <input
          type="text"
          id="description3"
          placeholder="Tell more about it"
          onChange={(e) => setDescription3(e.target.value)}
        /> */}

        <button>Add article</button>
      </form>
    </div>
  );

  // const { dispatch } = useContext(ArticleContext);
  // const [article, setArticle] = useState();
  // const handleArticleData = (e) => {
  //   setArticle({
  //     ...article,
  //     [e.target.id]: e.target.value,
  //   });
  // };
  // const addNewArticle = (e) => {
  //   e.preventDefault();
  //   dispatch({ type: "ADD_ARTICLE", article });
  // };
  // return (
  //   <form onSubmit={addNewArticle} className="add-article">
  //     <input
  //       type="text"
  //       id="title"
  //       placeholder="Title"
  //       onChange={handleArticleData}
  //     />
  //     <input
  //       type="text"
  //       id="body"
  //       placeholder="Body"
  //       onChange={handleArticleData}
  //     />
  //     <button>Add article</button>
  //   </form>
  // );
};
export default AddArticle;

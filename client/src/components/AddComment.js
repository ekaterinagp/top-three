import React, { useState, useContext } from "react";
import "../css/Article.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

const AddComment = (params) => {
  const [text, setText] = useState();
  // let params = match.params;
  console.log(params.listId);

  const listId = params.listId;

  const addNewComment = async (e) => {
    console.log(localStorage.getItem("id"));

    e.preventDefault();
    try {
      const userid = localStorage.getItem("id");
      const comment = { text };
      const addedCommentRes = await axios.post(
        `http://localhost:9090/${userid}/comment/list/${listId}`,
        comment
      );
      console.log(addedCommentRes);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={addNewComment} className="add-comment">
        <input
          type="text"
          id="text"
          placeholder="Text"
          onChange={(e) => setText(e.target.value)}
        />
        <button>Add comment</button>
      </form>
    </div>
  );
};

export default AddComment;

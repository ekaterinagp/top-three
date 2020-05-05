import React, {
  useState,
  forwardRef,
  useRef,
  useImperativeHandle,
} from "react";
import "../css/Article.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

const AddComment = (props) => {
  const [text, setText] = useState();
  // let params = match.params;
  console.log(props.listId);

  const listId = props.listId;

  const addNewComment = async (e) => {
    console.log(localStorage.getItem("id"));

    e.preventDefault();
    console.log({ text });
    try {
      setText("");
      const userid = localStorage.getItem("id");
      const comment = { text };
      const addedCommentRes = await axios.post(
        `http://localhost:9090/${userid}/comment/list/${listId}`,
        comment
      );
      console.log(addedCommentRes);

      props.parentMethod();
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
          value={text}
          placeholder="Text"
          onChange={(e) => setText(e.target.value)}
        />
        <button>Add comment</button>
      </form>
    </div>
  );
};

export default AddComment;

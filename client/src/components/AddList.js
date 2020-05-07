import React, { useState, useContext } from "react";
import "../css/Article.css";
import axios from "axios";
import { Button } from "reactstrap";
import { useHistory } from "react-router-dom";
import Error from "./Error";

const AddList = (props) => {
  const [title, setTitle] = useState();
  const [item_1, setItem1] = useState();
  const [item_2, setItem2] = useState();
  const [item_3, setItem3] = useState();

  const [error, setError] = useState("");

  const history = useHistory();

  const addNewList = async (e) => {
    console.log(localStorage.getItem("id"));

    e.preventDefault();
    try {
      console.log(title, item_1, item_2);
      setTitle("");
      setItem1("");
      setItem2("");
      setItem3("");
      console.log(title, item_1, item_2);
      const id = localStorage.getItem("id");

      console.log(id);
      const enteredData = {
        title,
        item_1,

        item_2,

        item_3,
      };

      const addedDataRes = await axios.post(
        `http://localhost:9090/${id}/list/add`,
        enteredData
      );
      console.log({ addedDataRes });

      props.parentMethod();
    } catch (error) {
      error.response.data.message && setError(error.response.data.message);
      console.log(error.response.data.message);
    }
  };

  return (
    <div>
      <form onSubmit={addNewList} className="form-style-6">
        {error && <Error error={error} clearError={() => setError("")} />}
        <input
          type="text"
          value={title}
          id="title"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          value={item_1}
          id="item_1"
          placeholder="First item on your list"
          onChange={(e) => setItem1(e.target.value)}
        />

        <input
          type="text"
          value={item_2}
          id="item_2"
          placeholder="Second item on your list"
          onChange={(e) => setItem2(e.target.value)}
        />

        <input
          type="text"
          id="item_3"
          value={item_3}
          placeholder="Third item on your list"
          onChange={(e) => setItem3(e.target.value)}
        />

        <Button size="lg" className="ml-5" color="primary">
          Add your list
        </Button>
      </form>
    </div>
  );
};
export default AddList;

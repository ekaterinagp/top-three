import React, {
  useEffect,
  useState,
  useContext,
  forwardRef,
  useRef,
  useImperativeHandle,
} from "react";
import { useFetch } from "../context/Hooks";

import AddComment from "./AddComment";
import axios from "axios";

export default function List({ match }) {
  let params = match.params;
  console.log(params);
  const [data, setData] = useState({
    id: "",
    title: "",
    item_1: "",
    item_2: "",
    item_3: "",
    author: "",
    comments: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => console.log(data.title), [data.title]);

  const fetchList = async (e) => {
    const res = await axios.get(`http://localhost:9090/list/${params.listId}`);
    setLoading(false);
    console.log(res);
    if (res.data.response.length) {
      setData({
        id: res.data.response.id,
        title: res.data.response[0].title,
        item_1: res.data.response[0].item_1,
        item_2: res.data.response[0].item_2,
        item_3: res.data.response[0].item_3,
        author:
          res.data.response[0].users.first_name +
          " " +
          res.data.response[0].users.last_name,
        comments: res.data.response[0].comments,
      });
    }
  };
  useEffect(() => {
    fetchList();
    console.log(data.title);
  }, []);

  return (
    <>
      <p>This is list # {params.listId}</p>
      {loading ? (
        "Loading..."
      ) : (
        <div>
          <div key={`random-${data.id}`}>
            <h1>{data.title}</h1>

            <p>1. {data.item_1}</p>

            <p>2. {data.item_2}</p>

            <p>3. {data.item_3}</p>
            <p> Written by {data.author}</p>

            <h2>Comments</h2>
            {data.comments.map(({ id, text, users, time }) => (
              <div key={id}>
                <p>{text}</p>
                <p>
                  Written by {users.first_name} {users.last_name}
                </p>
                <p>Written time {time}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      <AddComment listId={params.listId} parentMethod={fetchList} />.
    </>
  );
}

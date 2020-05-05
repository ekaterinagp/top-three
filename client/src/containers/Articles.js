import React, { useContext, useState, useEffect } from "react";
import { ArticleContext } from "../context/articleContext";
import "../App.css";
import { useFetch } from "../context/Hooks";

import { Link } from "react-router-dom";
import axios from "axios";

export default function Articles() {
  const [data, setData] = useState();
  // id: "",
  // title: "",
  // item_1: "",
  // item_2: "",
  // item_3: "",
  const [loading, setLoading] = useState(true);
  // let articles;

  useEffect(() => console.log(data), [data]);

  useEffect(() => {
    const fetchArticles = async (e) => {
      const res = await axios.get("http://localhost:9090/list");
      console.log(res);
      setData(res);
      setLoading(false);
      // data = res.data.response;
      // console.log(data);
    };

    fetchArticles();
  }, []);

  return (
    <>
      <h1>Lists</h1>
      {loading ? (
        "Loading..."
      ) : (
        <div className="articleContainer">
          {data.data.response.map(({ id, title, item_1, item_2, item_3 }) => (
            <div className="article" key={`random-${id}`}>
              <h1>{title}</h1>
              <p>1. {item_1}</p>

              <p>2. {item_2}</p>

              <p>3. {item_3}</p>
              <Link to={`/list/${id}`}>
                <button id={id}>Add/Read comment</button>
              </Link>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

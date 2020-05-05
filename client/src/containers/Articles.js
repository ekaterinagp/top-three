import React, { useContext, useState, useEffect } from "react";
import { ArticleContext } from "../context/articleContext";
import "../App.css";
import { useFetch } from "../context/Hooks";
import { Badge } from "reactstrap";

import { Link } from "react-router-dom";
import axios from "axios";

export default function Articles() {
  const [data, setData] = useState();

  const [loading, setLoading] = useState(true);

  let loggedIn = localStorage.getItem("id");

  useEffect(() => console.log(data), [data]);

  useEffect(() => {
    const fetchArticles = async (e) => {
      const res = await axios.get("http://localhost:9090/list");
      console.log(res);
      setData(res);
      setLoading(false);
    };

    fetchArticles();
  }, []);

  return (
    <>
      {loading ? (
        "Loading..."
      ) : (
        <div className="articleContainer">
          {data.data.response.map(({ id, title, item_1, item_2, item_3 }) => (
            <div className="article" key={`random-${id}`}>
              <h2 className="list-title">{title}</h2>
              <p>1. {item_1}</p>

              <p>2. {item_2}</p>

              <p>3. {item_3}</p>
              {loggedIn ? (
                <Link to={`/list/${id}`}>
                  <button className="example_b" align="center" id={id}>
                    Add/Read comment
                  </button>
                </Link>
              ) : (
                <h5>
                  <Badge color="secondary" className="p-2">
                    Please log in to read/add comments
                  </Badge>
                </h5>
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
}

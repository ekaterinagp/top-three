import React, { useContext, useState } from "react";
import { ArticleContext } from "../context/articleContext";
import "../App.css";
import { useFetch } from "../context/Hooks";
import history from "../context/history";
import { Link } from "react-router-dom";

export default function Articles() {
  const [data, loading] = useFetch("http://localhost:9090/list");
  console.log(data.response);
  return (
    <>
      <h1>Lists</h1>
      {loading ? (
        "Loading..."
      ) : (
        <div className="articleContainer">
          {data.response.map(({ id, title, item_1, item_2, item_3 }) => (
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

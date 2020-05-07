import React, { useState, useEffect } from "react";
import "../App.css";
import { Badge } from "reactstrap";
import { Link } from "react-router-dom";

export default function Lists(props) {
  const [data, setData] = useState();

  const [loading, setLoading] = useState(true);

  let loggedIn = localStorage.getItem("id");

  useEffect(() => console.log(data), [data]);

  const getLists = async (e) => {
    const lists = props.lists;

    setData(lists);
    setLoading(false);
    console.log(lists);
  };

  useEffect(() => {
    getLists();
  }, []);

  return (
    <>
      {loading ? (
        <p className="loading">Loading...</p>
      ) : (
        <div className="articleContainer">
          {data.lists.map(({ id, title, item_1, item_2, item_3 }) => (
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

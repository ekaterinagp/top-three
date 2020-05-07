import React, { useEffect, useState, useReducer } from "react";
import axios from "axios";
import { Badge } from "reactstrap";

import Articles from "../containers/Articles";

import AddArticle from "./AddArticle";

// const initialState = {
//   articles: [],
// };

export default function Home() {
  const [userData, setUserData] = useState({
    name: "",
    lastName: "",
    email: "",
  });

  const [articles, setArticles] = useState([]);
  const loading = articles.length === 0;

  useEffect(() => console.log(userData), [userData]);

  const fetchArticles = async (e) => {
    setArticles([]);
    console.log("calling fetch from parent");
    let res = await axios.get("http://localhost:9090/list");
    console.log(res.data.response);
    if (res.data.response.length) {
      setArticles({
        articles: res.data.response.reverse(),
      });
    }
  };

  const fetchUser = async (e) => {
    const userId = localStorage.getItem("id");
    if (userId) {
      const res = await axios.get(`http://localhost:9090/user/${userId}`);

      console.log(res);
      // console.log(res.data.user[0].first_name);
      if (res.data.user.length) {
        setUserData({
          name: res.data.user[0].first_name,
          lastName: res.data.user[0].last_name,
          email: res.data.user[0].email,
        });
      }
    }
  };

  useEffect(() => {
    fetchUser();
    fetchArticles();
  }, []);

  return (
    <div className="page">
      <div className="welcome">
        {userData.name ? (
          <>
            <h2 className="welcome-title">
              Welcome <br></br> {userData.name} {userData.lastName}
            </h2>
            <AddArticle parentMethod={fetchArticles} />
          </>
        ) : (
          <h3>
            <Badge color="success" className="p-3">
              Please log in to add your list and read comments
            </Badge>
          </h3>
        )}
      </div>
      {loading ? <p>Loading...</p> : <Articles articles={articles} />}
    </div>
  );
}

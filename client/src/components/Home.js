import React, { useEffect, useState } from "react";
import axios from "axios";

import { UserContext } from "../context/userContext";
import Articles from "../containers/Articles";
import { ArticleContext } from "../context/articleContext";
import AddArticle from "./AddArticle";

export default function Home() {
  // let userData = ;

  const [userData, setUserData] = useState({
    name: "",
    lastName: "",
    email: "",
  });

  useEffect(() => console.log(userData), [userData]);

  useEffect(() => {
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
    fetchUser();
  }, []);

  return (
    <div className="page">
      {userData.name ? (
        <h1>
          Welcome {userData.name} {userData.lastName}
        </h1>
      ) : (
        <h2></h2>
      )}

      {userData.name ? <AddArticle /> : <h2>Please log in to add your list</h2>}

      <Articles />
    </div>
  );
}

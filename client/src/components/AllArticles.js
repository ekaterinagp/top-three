import React from "react";
import axios from "axios";

export default function GetAllArticles() {
  const articlesRes = axios.get("http://localhost:9090/list");
  console.log();

  return <div>All articles</div>;
}

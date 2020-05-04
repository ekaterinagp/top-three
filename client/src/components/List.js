import React, { useParams, useState } from "react";
import { useFetch } from "../context/Hooks";
import AddComment from "./AddComment";

export default function List({ match }) {
  let params = match.params;
  console.log(params);
  const [data, loading] = useFetch(
    `http://localhost:9090/list/${params.listId}`
  );
  console.log(data.response);

  return (
    <>
      <p>This is list # {params.listId}</p>
      {loading ? (
        "Loading..."
      ) : (
        <div>
          <div key={`random-${data.response[0].id}`}>
            <h1>{data.response[0].title}</h1>
            <p>1. {data.response[0].item_1}</p>

            <p>2. {data.response[0].item_2}</p>

            <p>3. {data.response[0].item_3}</p>
            <p>
              {" "}
              Written by {data.response[0].users.first_name}{" "}
              {data.response[0].users.last_name}{" "}
            </p>

            <h2>Comments</h2>
            {data.response[0].comments.map(({ id, text, users, time }) => (
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
      <AddComment listId={params.listId} />
    </>
  );
}

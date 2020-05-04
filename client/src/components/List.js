import React, { useParams, useState } from "react";

export default function List({ match }) {
  // let params = queryString.parse(this.props.location.search);
  let params = match.params;
  console.log(params);
  return (
    <>
      <p>This is list # {params.listId}</p>
    </>
  );
}

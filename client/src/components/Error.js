import React from "react";

export default function Error(props) {
  return (
    <div className="errorNotice">
      <span>{props.error}</span>
      <button onClick={props.clearError}>X</button>
    </div>
  );
}

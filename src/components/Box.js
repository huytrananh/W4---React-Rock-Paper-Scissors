import React from "react";

export default function Box(props) {
  return (
    <div>
      <div className={`box ${props.result}`}>
        <h1>{props.title}</h1>
        <img src={props.choice.url} />
        <div>{props.result}</div>
      </div>
    </div>
  );
}

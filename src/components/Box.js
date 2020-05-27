import React from "react";

export default function Box(props) {
  return (
    <div>
      <div className={`box ${props.result}`}>
        <h1>{props.title}</h1>
        <img src={props.choice.url} alt={props.img} />
        <h1>{props.result}</h1>
      </div>
    </div>
  );
}

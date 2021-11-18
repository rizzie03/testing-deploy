import React from "react";
import { useState } from "react";

export default function inputComments() {
  const [comment, setComment] = useState("");
  const [listComment, setListComment] = useState([]);
  console.log("list", listComment);
  console.log("conmment", comment);
  const submitComment = () => {
    setListComment([...listComment, comment]);
  };

  return (
  <div>
      <h1>Comment</h1>
      <p></p>
  </div>);
}

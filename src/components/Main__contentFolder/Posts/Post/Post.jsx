import React from "react";
import Style from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={Style.Post}>
      <img
        src={props.img__url}
        alt="Ser"
      />

      <h3>{props.username}</h3>
      <p>{props.post__message}</p>
    </div>
  );
};

export default Post;

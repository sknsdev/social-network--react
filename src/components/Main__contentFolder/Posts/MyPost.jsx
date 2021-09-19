import React from "react";
import Style from "./MyPost.module.css";
import Post from "./Post/Post";

/* let posts__storage = [
  {username: 'Sergey', 
  img__url:"https://sun1-28.userapi.com/s/v1/ig2/VMRm1JVtwzLcQkDEhkAf3-ZKiCRbq2bSc-XfaOCJyTzjZLQYcEo5KtUHFoRNYyaMDzE_TatOrpftqxsGCBIsWs8J.jpg?size=50x50&quality=95&crop=708,6,722,722&ava=1",
  post__message:"Саня нам не туда там шлакбаум"},
  {username: 'Sanyok', 
  img__url:"https://sun1-57.userapi.com/s/v1/if1/hSyZu6Vps4K1f8TsTgBsg6pxy7wLg8D5Ms_sNYINfw7gxqpM6D4XTfwQKZGmnoTC9ezKCd5m.jpg?size=50x50&quality=96&crop=910,109,954,954&ava=1",
  post__message:"Да не, нам туда"},
  {username: 'Sergey', 
  img__url:"https://sun1-28.userapi.com/s/v1/ig2/VMRm1JVtwzLcQkDEhkAf3-ZKiCRbq2bSc-XfaOCJyTzjZLQYcEo5KtUHFoRNYyaMDzE_TatOrpftqxsGCBIsWs8J.jpg?size=50x50&quality=95&crop=708,6,722,722&ava=1",
  post__message:"Я точно тебе говорю, нам не туда"}
] */

const PostTemplate = (props) =>{

  return(
    <Post
    username={props.name}
    img__url={props.img__url}
    post__message={props.post__message}
  />
  );
}

let view__posts = (p) => p.map(p => 
<PostTemplate name={p.username} img__url={p.img__url} post__message={p.post__message}/>);

const MyPost = (props) => {
  return (
    <div className={Style.MyPost}>
      {view__posts(props.Profile__Posts)};
    </div>
  );
};

export default MyPost;

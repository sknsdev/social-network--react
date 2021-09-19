import React from "react";
import Style from "./Main__content.module.css";
import MyPost from "./Posts/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Main__content = (props) => {
  return (
    <div className={Style.Main__content}>
            <ProfileInfo  addPost={props.addPost}/>
            <MyPost Profile__Posts={props.Profile__Posts} addPost={props.addPost}/>
    </div>
  );
};

export default Main__content;

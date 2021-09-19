import React from "react";
import Style from "./ProfileInfo.module.css";
import {RenderAll} from "../../../index";
let myName = "Alexey Vlasov";
let animeurl = "https://sun1-97.userapi.com/s/v1/ig2/7o36dhtDZQQI8VoEFUyqv9OjNLnLPLrXfiPJsc5gwWNHAUBVG-1ZUfiGrMr-rsl8gFGbMe4N33kFi-sqwBw-ZlIU.jpg?size=50x50&quality=96&crop=172,106,757,757&ava=1";

const ProfileInfo = (props) => {
    
    let AddNewUserPost = () => {
        let text = userTextAreaRef.current.value;
        props.addPost(myName, animeurl, text);
        RenderAll();
    }

    let userTextAreaRef = React.createRef();

    return (
        <div className={Style.ProfileInfo}>
            <h1>Profile</h1>
            <img src={"https://soulblog.ru/wp-content/uploads/2018/11/s1200-5.jpg"}
                 alt={"poxyu"}/>

            <h3> {myName} </h3>
            <p>React Developer</p>
            <div className="UserPostArea">
                <div className="UserTextArea">
                    <textarea name="UserPost__text" cols="30" rows="10" ref={userTextAreaRef}></textarea>
                </div>
                <div className="UserButtonArea">
                    <button onClick={AddNewUserPost}>Add Post</button>
                </div>
            </div>
        </div>
    )
        ;
}

export default ProfileInfo;
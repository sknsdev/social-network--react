/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { NavLink } from "react-router-dom";
import Style from "./Messages__content.module.css";

const UserDialogItem = (props) => {
    return (
    <div className={Style.dialog +' '+ Style.active}>
        <NavLink to={'/messages/'+props.user__url}>{props.name}</NavLink>
        </div>

    );
}

const UserMessageItem = (props) => {
    return(
        <div className={Style.SingleMessage}>
            {props.message};
        </div>
    );
}
/*      Работа со списком Людей*/
/* let Message__author__storage = [
    {name:'Alice', user__url:'id9598289'},
    {name: 'Mikhail', user__url:'id3883294'}
] */

const Message__author__show = (props) => {
    return(
        <UserDialogItem name={props.name} user__url={props.user__url}/>
    )
}

const Message__author__view = (props) =>  {
    return(
    props.Message__author__storage.map( a=> 
    // eslint-disable-next-line react/jsx-pascal-case
    <Message__author__show name={a.name} user__url={a.user__url} /> )
    );
}
/*      Работа со списком Сообщений*/
/* let messages__storage = [
    {message:'Привет санечек как делишки?'},
    {message:'yjhvfkmyj f e nt,z rfr'},
    {message:'сори т9'},
    {message:'нормально говорю, у тебя как?'},
    {message:'Я покакал'},
    {message:'хах найс'},
    {message:'спасибо))'},
]
 */
const Messages__storage__show = (props) =>{
    return(
        <UserMessageItem message={props.message} />
    )
}

const Messages__storage__view = (props) => { 
    return (
        props.MessagesArray.map( m =>
    // eslint-disable-next-line react/jsx-pascal-case
    <Messages__storage__show message={m.message} /> ) 
    );
}


    /*      Вывод сообщений и Списка пользователей */
const Messages__content = (props) => {
    return (
        <div className={Style.Messages__content}>
            
            <div className={Style.UserDialog}>
                <Message__author__view Message__author__storage={props.Message__author__storage}/>

            </div>
            <div className={Style.UserMessage}>
                <Messages__storage__view MessagesArray={props.messages__storage}/>

            </div>



        </div>
    )
        ;
}

export default Messages__content;
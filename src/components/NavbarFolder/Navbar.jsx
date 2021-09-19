import React from "react";
import { NavLink } from "react-router-dom";
import Style from "./Navbar.module.css"

const Navbar = () => {
    return (
        <div className={Style.Navbar}>
            <div className={Style.item}><NavLink exact to={'/profile'} activeClassName={Style.active}>My page</NavLink></div>
            <div className={Style.item}><NavLink exact to={'/messages'} activeClassName={Style.active}>My Messages</NavLink></div>
            <div className={Style.item}><NavLink exact to={'/groups'} activeClassName={Style.active}>My Groups</NavLink></div>
            <div className={Style.item}><NavLink exact to={'/music'} activeClassName={Style.active}>My Music</NavLink></div>
            <div className={Style.item}><NavLink exact to={'/settings'} activeClassName={Style.active}>My Videos</NavLink></div>
        </div>
    )
        ;
}

export default Navbar;
import React from 'react';
import s from "./header.module.scss"
import {NavLink} from "react-router-dom";

const Header = ({rootURL}) => {
    return (
        <div className={s.header}>
            <NavLink className={s.link} to={`${rootURL}/`} >
                Random Dish
            </NavLink>
            <NavLink className={s.link} to={`${rootURL}/favourites`} >
                Favourites
            </NavLink>
        </div>
    );
};

export default Header;
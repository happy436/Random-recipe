import React from 'react';
import s from "./header.module.scss"
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={s.header}>
            <NavLink className={s.link} to="/" >
                Random Dish
            </NavLink>
            <NavLink className={s.link} to="/favourites" >
                Favourites
            </NavLink>
        </div>
    );
};

export default Header;
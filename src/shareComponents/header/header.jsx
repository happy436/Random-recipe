import React from 'react';
import s from "./header.module.scss"
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className={s.header}>
            <NavLink className={s.link} to={`/Random-recipe/`} >
                Random Dish
            </NavLink>
            <NavLink className={s.link} to={`/Random-recipe/favourites`} >
                Favourites
            </NavLink>
        </header>
    );
};

export default Header;
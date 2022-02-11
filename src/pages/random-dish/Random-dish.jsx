import React, { useEffect } from 'react';
import s from "./Random-dish.module.scss"
import DishCard from "../favourites/components/DishCard";
import { Button } from './components/Button';
import { UilThumbsUp, UilThumbsDown } from '@iconscout/react-unicons'
import BtnStyle from "./components/Button.module.scss"

const RandomDish = ({ state, dispatch }) => {

    return (
        <section className={s.wrapper}>
            <Button BtnClass={BtnStyle.dislike} state={state} Image={<UilThumbsDown/>} type="skip" dispatch={dispatch}/>
            {state.map(item =>
                <DishCard
                    key={item.idMeal}
                    img={item.strMealThumb}
                    title={item.strMeal}
                    category={item.strCategory}
                    area={item.strArea}
                    youtube={item.strYoutube}
                    type="Random dish"
                />)}
            <Button BtnClass={BtnStyle.like} state={state} Image={<UilThumbsUp/>} type="add" dispatch={dispatch}/>
        </section>
    );
};

export default RandomDish;
import React from 'react';
import DishCard from "./components/DishCard";
import s from "./Favourites.module.scss"

const Favourites = ({state, dispatch}) => {

    function EmptyState(){
        if(state[0].strMeal === "Fish fofos"){
            return <div className={s.empty}>Empty List</div>
        } else {
            return state.map((item,index) =>
                <DishCard
                    key={item.idMeal}
                    img={item.strMealThumb}
                    title={item.strMeal}
                    category={item.strCategory}
                    area={item.strArea}
                    youtube={item.strYoutube}
                    type="Favourites"
                    dispatch={dispatch}
                    index={index}
                />)
        }
    }
    return (
        <section>
            <ul className={s.wrapper}>
                {EmptyState()}
            </ul>
        </section>
    );
};

export default Favourites;
import React from 'react'
import s from "./Button.module.scss"
import {addToFavouriteActionCreator, fetchRecipe} from "../../../redux/RecipeReducer";

export const Button = ({BtnClass, Image, dispatch, type, state}) => {

    function ClickEventListere(){
        if(type === "skip"){
            dispatch(fetchRecipe())
        } else if(type === "add"){
            dispatch(addToFavouriteActionCreator(state[0]))
            dispatch(fetchRecipe())
        }
    }

    return (
        <button className={`${s.button} ${BtnClass}`} onClick={ClickEventListere}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            {Image}
        </button>
    )
}

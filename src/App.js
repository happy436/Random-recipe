import React, {useEffect} from "react"
import s from './styles/App.module.scss';
import RandomDish from "./pages/random-dish/Random-dish";
import Favourites from "./pages/favourites/Favourites";
import {Routes, Route} from "react-router-dom";
import {fetchRecipe} from "./redux/RecipeReducer";

function App({state, dispatch}) {

    useEffect(() => {
        dispatch(fetchRecipe())
    }, [])
    return (
        <div className={s.App}>
            <Routes>
                <Route path="/" element={
                    <RandomDish
                        state={state.recipe.meals}
                        dispatch={dispatch}
                    />}
                />
                <Route path="/favourites" element={
                    <Favourites
                        state={state.favourite}
                        dispatch={dispatch}
                    />}
                />
            </Routes>
        </div>
    );
}

export default App;

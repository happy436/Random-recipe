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
        <main className={s.App}>
            <Routes>
                <Route path={`/Random-recipe/`} element={
                    <RandomDish
                        state={state.recipe.meals}
                        dispatch={dispatch}
                    />}
                />
                <Route path={`/Random-recipe/favourites`} element={
                    <Favourites
                        state={state.favourite}
                        dispatch={dispatch}
                    />}
                />
            </Routes>
        </main>
    );
}

export default App;

import axios from "axios"

const SetRecipe = "SET_RECIPE"
const addToFavourite = "ADD_TO_FAVOURITE"
const deleteFavourite = "DELETE_FAVOURITE"

const API = {
    root: "“”",
    URL() { return `https://www.themealdb.com/api/json/v1/1/random.php` }
}

let initialState =
    {
        recipe: {
            meals:[{
                idMeal: "53043",
                strMeal: "Fish fofos",
                strDrinkAlternate: null,
                strCategory: "Seafood",
                strArea: "Portuguese",
                strInstructions: "STEP 1",
                strMealThumb: "",
            }]
        },
        favourite:[
            {
                idMeal: "53043",
                strMeal: "Fish fofos",
                strDrinkAlternate: null,
                strCategory: "Seafood",
                strArea: "Portuguese",
                strInstructions: "STEP 1",
                strMealThumb: "",
            }
        ]
    }

const RecipeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SetRecipe:
            state.recipe = action.recipe
            return state
        case addToFavourite:
            if(state.favourite[0].idMeal === "53043"){
                state.favourite = [action.recipe]
            } else {
                state.favourite.push(action.recipe)
            }
            return state
        case deleteFavourite:
            state.favourite.splice(action.recipeIndex, 1)
        default:
            return state
    }
}

export const addToFavouriteActionCreator = (recipe) => {
    return {
        type: addToFavourite,
        recipe: recipe
    }
}

export const deleteFavouriteActionCreator = (index) => {
    return {
        type: deleteFavourite,
        recipeIndex: index,
    }
}

export const fetchRecipe = () => {
    return (dispatch) => {
        axios.get(API.URL())
            .then(res => {
                dispatch({
                    type: SetRecipe,
                    recipe: res.data,
                })
            })
    }
}

export default RecipeReducer
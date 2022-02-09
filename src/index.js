import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import Header from "./shareComponents/header/header";
import Footer from "./shareComponents/footer/footer";
import store from "./redux/redux-store"
import { BrowserRouter } from 'react-router-dom';

let reRender = (state) => {

    const rootURL = "https://happy436.github.io/Random-recipe"
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <Header rootURL={rootURL}/>
                <App
                    rootURL={rootURL}
                    state={store.getState().RecipeReducer}
                    dispatch={store.dispatch}
                />
                <Footer/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

reRender(store.getState())

store.subscribe(() => {
    let state = localStorage.setItem('reduxState', JSON.stringify(store.getState()))
    reRender(state);
})
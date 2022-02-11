import React from 'react';
import s from "./DishCard.module.scss"
import { UilYoutube, UilTimes } from '@iconscout/react-unicons'
import {deleteFavouriteActionCreator} from "../../../redux/RecipeReducer"

const DishCard = ({img, title, category, area, youtube, type, dispatch, index}) => {
    const Modal = React.createRef()

    function CloseModal() {
        Modal.current.classList.toggle(s.close)
    }

    function DeleteButton(){
        if(type === "Random dish"){

        } else if(type === "Favourites") {
            return <div className={s.deleteButton} onClick={() => dispatch(deleteFavouriteActionCreator(index))}><UilTimes/></div>
        }
    }

    function EmptyImg(){
        if(img !== ""){
            return <img className={s.image} alt="dish card" onClick={CloseModal} src={img}></img>
        } else {
            return <div className={s.placeHolder}></div>
        }
    }

    return (
        <li className={s.dishCard}>
            {DeleteButton()}
            {EmptyImg()}
            <span className={s.content}>
                <h2 className={s.title}>{title}</h2>
                <p className={s.category}>Category: {category}</p>
                <p className={s.area}>Recipe from: {area}</p>
            </span>
            <div className={`${s.modal} ${s.close}`} ref={Modal}>
                <span className={s.closeImg} onClick={CloseModal}>&times;</span>
                <span className={s.modalContent}>
                    <img alt="big" src={img} className={s.imgModal}></img>
                    <span className={s.modalDescription}>
                        <h2 className={`${s.title} ${s.modalTitle}`}>{title}</h2>
                        <span className={s.youtube}>
                            <a className={s.youtubeIcon} href={youtube}>
                                <UilYoutube/>
                            </a>
                        </span>
                    </span>
                </span>

            </div>
        </li>
    );
};

export default DishCard;
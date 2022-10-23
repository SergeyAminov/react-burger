import { useState } from 'react';
import { Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';
import ingredientType from "../../utils/types";
import Modal from "../modal/my-modal";
import IngredientDetails from "../ingredient-details/ingredient-details";

import ingredientStyle from "./ingredient.module.css";

export default function Ingredient({data, count}){
    const [visibleModal, setVisibleModal] = useState(false);

    const handleOpenModal = () => {
        setVisibleModal(true);
    }

    const handleCloseModal = () => {
        setVisibleModal(false);
    }

    return(
        <>
            <div key={data._id} className={`${ingredientStyle.ingredient}`} onClick={handleOpenModal}>
                <img className={ingredientStyle.img} src={data.image} alt={`${data.name}`}/>
                {(count > 0) && <Counter count={count} size="default" />}
                <span className={ingredientStyle.currency}>
                    <span className={ingredientStyle.price}>{data.price}</span>
                    <CurrencyIcon type="primary"/>
                </span>
                <span className={ingredientStyle.name}>{data.name}</span>
            </div>
            {
                visibleModal && 
                <Modal header={'Детали ингредиента'} onClose={handleCloseModal}>
                    <IngredientDetails data={data}/>
                </Modal>
            }
        </>
    );
}

Ingredient.propTypes = {
    data: PropTypes.exact(ingredientType).isRequired,
    count: PropTypes.number,
    visibleModal: PropTypes.bool.isRequired,
    onOpen: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
}

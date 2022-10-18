import { useState } from 'react';
import Ingredient from "../ingredient/ingredient";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from '../modal-overlay/modal-overlay';
import IngredientDetails from '../ingredient-details/ingredient-details';

import PropTypes from 'prop-types';
import ingredientType from "../../utils/types";
import burgerIngredientsStyle from "./burger-ingredients.module.css";

/**
 * @description Компонент-обертка для всего перечня ингредиентов бургера. 
 */
export default function BurgerIngredients({ingredients, isShowModal, handleOpenModal, handleCloseModal}){
    const [current, setCurrent] = useState('Булки');

    const bunList = ingredients.filter(ingredient => ingredient.type === "bun");
    const mainList = ingredients.filter(ingredient => ingredient.type === "main");
    const sauceList = ingredients.filter(ingredient => ingredient.type === "sauce");

    // Заглушка для количества ингредиентов, отображаемых в списке
    const count = 0;
    
    return(
        <div className={`${burgerIngredientsStyle.burgerIngredient} mr-10`}>
            <h1 className="mt-10 mb-5">Соберите бургер</h1>
            
            <div className={burgerIngredientsStyle.tabMenu}>
                <Tab value="Булки" active={current === 'Булки'} onClick={setCurrent}>
                    Булки
                </Tab>
                <Tab value="Соусы" active={current === 'Соусы'} onClick={setCurrent}>
                    Соусы
                </Tab>
                <Tab value="Начинки" active={current === 'Начинки'} onClick={setCurrent}>
                    Начинки
                </Tab>
            </div>

            <div className={burgerIngredientsStyle.list}>
                <h4 className={`${burgerIngredientsStyle.ingredientTitle} mb-6 mt-10` }>Булки</h4>
                {
                    bunList.map((data) => {
                        if (data.name === "Краторная булка N-200i")
                            return (
                                <>
                                    <Ingredient key={data._id} data={data} count={2} handleOpenModal={handleOpenModal}/>
                                    {
                                        isShowModal &&
                                        <ModalOverlay isShowModal={isShowModal} handleCloseModal={handleCloseModal}>
                                            <IngredientDetails data={data}/>
                                        </ModalOverlay>
                                    }
                                </>
                            )
                        return (
                            <>
                                <Ingredient key={data._id} data={data} count={count} handleOpenModal={handleOpenModal}/>
                                {
                                    isShowModal &&
                                    <ModalOverlay isShowModal={isShowModal} handleCloseModal={handleCloseModal}>
                                        <IngredientDetails data={data}/>
                                    </ModalOverlay>
                                }
                            </>
                        )
                    })
                }
                <h4 className={`${burgerIngredientsStyle.ingredientTitle} mb-6 mt-10` }>Соусы</h4>
                {
                    sauceList.map((data) => {
                        return (
                            <>
                                <Ingredient key={data._id} data={data} count={count} handleOpenModal={handleOpenModal}/>
                                {
                                    isShowModal &&
                                    <ModalOverlay isShowModal={isShowModal} handleCloseModal={handleCloseModal}>
                                        <IngredientDetails data={data}/>
                                    </ModalOverlay>
                                }
                            </>
                        )
                    })
                }
                <h4 className={`${burgerIngredientsStyle.ingredientTitle} mb-6 mt-10` }>Начинки</h4>
                {
                    mainList.map((data) => {
                        return (
                            <>
                                <Ingredient key={data._id} data={data} count={count} handleOpenModal={handleOpenModal}/>
                                {
                                    isShowModal &&
                                    <ModalOverlay isShowModal={isShowModal} handleCloseModal={handleCloseModal}>
                                        <IngredientDetails data={data}/>
                                    </ModalOverlay>
                                }
                            </>
                        )
                    })
                }
            </div>

        </div>
    );
}

BurgerIngredients.propTypes = {
    ingredients: PropTypes.arrayOf(PropTypes.shape(ingredientType)).isRequired,
    isShowModal: PropTypes.bool.isRequired,
    handleOpenModal: PropTypes.func.isRequired,
    handleCloseModal: PropTypes.func.isRequired,
  };

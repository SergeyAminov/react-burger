import { useState } from "react";
import PropTypes from 'prop-types';
import ingredientType from "../../utils/types";
import Ingredient from "../ingredient/ingredient";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

import ingredientListStyle from "./ingredient-list.module.css";

/**
 * @description Список со всеми возможными ингредиентами бургера.
 */
export default function IngredientList({count, ingredients}){
    const [current, setCurrent] = useState('Булки');

    const bunList = ingredients.filter(ingredient => ingredient.type === "bun");
    const mainList = ingredients.filter(ingredient => ingredient.type === "main");
    const sauceList = ingredients.filter(ingredient => ingredient.type === "sauce");

    return(
        <>
        <div className={ingredientListStyle.tabMenu}>
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
        <div className={ingredientListStyle.list}>
            <h4 className={`${ingredientListStyle.ingredientTitle} mb-6 mt-10` }>Булки</h4>
            {
                bunList.map((data) => {
                    if (data.name === "Краторная булка N-200i")
                        return <Ingredient key={data._id} data={data} count={1}/>
                    return <Ingredient key={data._id} data={data} count={count}/>
                })
            }
            <h4 className={`${ingredientListStyle.ingredientTitle} mb-6 mt-10` }>Соусы</h4>
            {
                sauceList.map((data) => {
                    return <Ingredient key={data._id} data={data} count={count}/>
                })
            }
            <h4 className={`${ingredientListStyle.ingredientTitle} mb-6 mt-10` }>Начинки</h4>
            {
                mainList.map((data) => {
                    return <Ingredient key={data._id} data={data} count={count}/>
                })
            }
        </div>
        </>
    );
}

IngredientList.propTypes = {
    count: PropTypes.number,
    ingredients: PropTypes.arrayOf(PropTypes.shape(ingredientType)).isRequired
};

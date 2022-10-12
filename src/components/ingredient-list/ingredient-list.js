import { useState } from "react";
import data from "../../utils/data";
import Ingredient from "../ingredient/ingredient";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

import ingredientListStyle from "./ingredient-list.module.css";

/**
 * @description Список со всеми возможными ингредиентами бургера.
 */
export default function IngredientList(props){
    const [current, setCurrent] = useState('Булки');

    const bunList = data.filter(ingredient => ingredient.type === "bun");
    const mainList = data.filter(ingredient => ingredient.type === "main");
    const sauceList = data.filter(ingredient => ingredient.type === "sauce");

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
                bunList.map((data, index) => {
                    if (data.name === "Краторная булка N-200i")
                        return <Ingredient key={index} name={data.name} image={data.image} price={data.price} count={1}/>
                    return <Ingredient key={index} name={data.name} image={data.image} price={data.price} count={props.count}/>
                })
            }
            <h4 className={`${ingredientListStyle.ingredientTitle} mb-6 mt-10` }>Соусы</h4>
            {
                sauceList.map((data, index) => {
                    return <Ingredient key={index} name={data.name} image={data.image} price={data.price} count={props.count}/>
                })
            }
            <h4 className={`${ingredientListStyle.ingredientTitle} mb-6 mt-10` }>Начинки</h4>
            {
                mainList.map((data, index) => {
                    return <Ingredient key={index} name={data.name} image={data.image} price={data.price} count={props.count}/>
                })
            }
        </div>
        </>
    );
}
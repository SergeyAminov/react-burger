import { useState } from 'react';
import Ingredient from "../ingredient/ingredient";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';
import ingredientType from "../../utils/types";
import burgerIngredientsStyle from "./burger-ingredients.module.css";

/**
 * @description Компонент-обертка для всего перечня ингредиентов бургера. 
 */
export default function BurgerIngredients({ingredients}){
    const [current, setCurrent] = useState('Булки');

    const bunList = ingredients.filter(ingredient => ingredient.type === "bun");
    const mainList = ingredients.filter(ingredient => ingredient.type === "main");
    const sauceList = ingredients.filter(ingredient => ingredient.type === "sauce");

    const modal = (data, count=0) => {
        return( <Ingredient data={data} count={count}/> );
    }
    
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
                        // Заглушка для отображения счетчика с количеством выбранного ингредента
                        if (data.name === "Краторная булка N-200i")
                            return modal(data, 1);
                        return modal(data)
                    })
                }

                <h4 className={`${burgerIngredientsStyle.ingredientTitle} mb-6 mt-10` }>Соусы</h4>
                { sauceList.map((data) => { return modal(data) }) }
                
                <h4 className={`${burgerIngredientsStyle.ingredientTitle} mb-6 mt-10` }>Начинки</h4>
                { mainList.map((data) => { return modal(data) }) }

            </div>

        </div>
    );
}

BurgerIngredients.propTypes = {
    ingredients: PropTypes.arrayOf(PropTypes.shape(ingredientType)).isRequired
  };

import IngredientList from "../ingredient-list/ingredient-list";

import burgerIngredientsStyle from "./burger-ingredients.module.css";

/**
 * @description Компонент-обертка для всего перечня ингредиентов бургера. 
 */
export default function BurgerIngredients(){

    return(
        <div className={`${burgerIngredientsStyle.burgerIngredient} mr-5`}>
            <h3 className="mt-10 mb-5">Соберите бургер</h3>
            
            <IngredientList/>
        </div>
    );
}
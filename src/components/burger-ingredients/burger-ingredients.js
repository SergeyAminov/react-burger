import IngredientList from "../ingredient-list/ingredient-list";
import PropTypes from 'prop-types';
import ingredientType from "../../utils/types";
import burgerIngredientsStyle from "./burger-ingredients.module.css";

/**
 * @description Компонент-обертка для всего перечня ингредиентов бургера. 
 */
export default function BurgerIngredients({ingredients}){

    return(
        <div className={`${burgerIngredientsStyle.burgerIngredient} mr-10`}>
            <h1 className="mt-10 mb-5">Соберите бургер</h1>
            <IngredientList ingredients={ingredients}/>
        </div>
    );
}

BurgerIngredients.propTypes = {
    ingredients: PropTypes.arrayOf(PropTypes.shape(ingredientType)).isRequired
};

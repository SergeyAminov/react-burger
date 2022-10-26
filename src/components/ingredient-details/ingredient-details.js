import ingredientDetailsStyle from "./ingredient-details.module.css";
import PropTypes from 'prop-types';
import ingredientType from "../../utils/types";

export default function IngredientDetails({data}){
    return(
        <>
            <img className={ingredientDetailsStyle.img} src={data.image} alt={`${data.name}`}/>
            <span className={`${ingredientDetailsStyle.name} mt-4 `}>{data.name}</span>
            
            <div className={`${ingredientDetailsStyle.nutrition} mt-8 mb-15`}>
                
                <div className={ingredientDetailsStyle.nutritionValue}>
                    <span className={ingredientDetailsStyle.nutritionTitle}>Калории, ккал</span>
                    <span className={ingredientDetailsStyle.value}>{data.calories}</span>
                </div>
                
                <div className={ingredientDetailsStyle.nutritionValue}>
                    <span className={ingredientDetailsStyle.nutritionTitle}>Белки, г</span>
                    <span className={ingredientDetailsStyle.value}>{data.proteins}</span>
                </div>
                
                <div className={ingredientDetailsStyle.nutritionValue}>
                    <span className={ingredientDetailsStyle.nutritionTitle}>Жиры, г</span>
                    <span className={ingredientDetailsStyle.value}>{data.fat}</span>
                </div>
                
                <div className={ingredientDetailsStyle.nutritionValue}>
                    <span className={ingredientDetailsStyle.nutritionTitle}>Углеводы, г</span>
                    <span className={ingredientDetailsStyle.value}>{data.carbohydrates}</span>
                </div>

            </div>
        </>
    );
}

IngredientDetails.propTypes = {
    data: PropTypes.exact(ingredientType).isRequired,
}

import { Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';

import ingredientStyle from "./ingredient.module.css";

export default function Ingredient({data}){

    return(
        <div className={`${ingredientStyle.ingredient}`}>
            <img className={ingredientStyle.img} src={data.image} alt={`${data.name}`}/>
            {(data.count > 0) && <Counter count={data.count} size="default" />}
            <span className={ingredientStyle.currency}>
                <span className={ingredientStyle.price}>{data.price}</span>
                <CurrencyIcon type="primary"/>
            </span>
            <span className={ingredientStyle.name}>{data.name}</span>
        </div>
    );
}

Ingredient.propTypes = {
    data: PropTypes.exact({
        _id: PropTypes.string,
        name: PropTypes.string,
        type: PropTypes.string,
        proteins: PropTypes.number,
        fat: PropTypes.number,
        carbohydrates: PropTypes.number,
        calories: PropTypes.number,
        price: PropTypes.number,
        image: PropTypes.string,
        image_mobile: PropTypes.string,
        image_large: PropTypes.string,
        __v: PropTypes.number
    }).isRequired
}

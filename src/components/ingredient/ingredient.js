import { Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';
import ingredientType from "../../utils/types";

import ingredientStyle from "./ingredient.module.css";

export default function Ingredient({data, count, onOpen}){

    return(
        <div key={data._id} className={`${ingredientStyle.ingredient}`} onClick={onOpen}>
            <img className={ingredientStyle.img} src={data.image} alt={`${data.name}`}/>
            {(count > 0) && <Counter count={count} size="default" />}
            <span className={ingredientStyle.currency}>
                <span className={ingredientStyle.price}>{data.price}</span>
                <CurrencyIcon type="primary"/>
            </span>
            <span className={ingredientStyle.name}>{data.name}</span>
        </div>
    );
}

Ingredient.propTypes = {
    data: PropTypes.exact(ingredientType).isRequired,
    count: PropTypes.number,
    onOpen: PropTypes.func
}

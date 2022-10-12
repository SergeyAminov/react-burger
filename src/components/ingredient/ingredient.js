import { Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import ingredientStyle from "./ingredient.module.css";

export default function Ingredient({name, image, price, count=0}){

    return(
        <div className={`${ingredientStyle.ingredient}`}>
            <img className={ingredientStyle.img} src={image} alt="ingredient"/>
            {(count > 0) && <Counter count={count} size="default" />}
            <span className={ingredientStyle.currency}><span className={ingredientStyle.price}>{price}</span> <CurrencyIcon type="primary"/></span>
            <span className={ingredientStyle.name}>{name}</span>
        </div>
    );
}

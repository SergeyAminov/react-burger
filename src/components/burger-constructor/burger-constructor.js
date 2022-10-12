import constructorStyle from "./burger-constructor.module.css";
import { Button, ConstructorElement, CurrencyIcon, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import ingredients from "../../utils/data";

export default function BurgerConstructor(){

  const lockedIngredient = ingredients[0];
  const total = lockedIngredient.price * 3;

  return (
    <div className={`${constructorStyle.constructorWrapper} mt-25`}>
      
      {/* Конструктор */}

      <div className={`${constructorStyle.constructor}`}>
        <div className={`${constructorStyle.lockedElementWrapper} mr-4`}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text={`${lockedIngredient.name} (верх)`}
            price={lockedIngredient.price}
            thumbnail={lockedIngredient.image}
          />
        </div>
        
        <div className={constructorStyle.elementWrapper}>
          <DragIcon type="primary" />
          <ConstructorElement
            text={lockedIngredient.name}
            price={lockedIngredient.price}
            thumbnail={lockedIngredient.image}
          />
        </div>

        <div className={`${constructorStyle.lockedElementWrapper} mr-4`}>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={`${lockedIngredient.name} (низ)`}
            price={lockedIngredient.price}
            thumbnail={lockedIngredient.image}
          />
        </div>
      </div>

      {/* Итоговая цена и кнопка оформления заказа */}
      
      <div className={`${constructorStyle.order} mt-10 mr-4`}>
        <span className={`${constructorStyle.total} mr-10`}>
          <span className="mr-2">{total}</span>
          <CurrencyIcon type="primary" />
        </span>
        <Button htmlType="submit" type="primary" size="medium">
          Оформить заказ
        </Button>
      </div>
    </div>
  );
}
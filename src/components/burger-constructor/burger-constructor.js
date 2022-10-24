import { useState } from 'react';
import constructorStyle from "./burger-constructor.module.css";
import PropTypes from 'prop-types';
import ingredientType from "../../utils/types";
import { Button, ConstructorElement, CurrencyIcon, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modal/my-modal";
import OrderDetails from "../order-details/order-details";

export default function BurgerConstructor({ingredients}){
  const [visibleModal, setVisibleModal] = useState(false);

  const handleOpenModal = () => {
    setVisibleModal(true);
  }

  const handleCloseModal = () => {
    setVisibleModal(false);
  }

  const lockedIngredient = ingredients[0];
  const ingredientList = [ingredients[3], ingredients[4], ingredients[7], ingredients[8],
    ingredients[8], ingredients[10], ingredients[11], ingredients[12]];
  let total = lockedIngredient.price * 2; 
  ingredientList.forEach(ingredient => total+=ingredient.price);

  const modal = (
    <Modal handleCloseModal={handleCloseModal} header={''}>
      <OrderDetails />
    </Modal>
  );

  return (
    <div className={`${constructorStyle.constructorWrapper} mt-25`}>
      
      {/* Конструктор */}

      <div className={`${constructorStyle.constructor} ml-4`}>
        <div className={`${constructorStyle.lockedElementWrapper} mr-4`}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text={`${lockedIngredient.name} (верх)`}
            price={lockedIngredient.price}
            thumbnail={lockedIngredient.image}
          />
        </div>
        
        <div className={constructorStyle.movableItems}>
          {
            ingredientList.map((ingredient, index) => {
              return <div key={index} className={constructorStyle.elementWrapper}>
                        <DragIcon type="primary" />
                        <ConstructorElement
                          text={ingredient.name}
                          price={ingredient.price}
                          thumbnail={ingredient.image}
                        />
                      </div>
            })
          }
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
        
        <Button htmlType="submit" type="primary" size="medium" onClick={handleOpenModal}>
          Оформить заказ
        </Button>
        {visibleModal && modal}
        
      </div>
    </div>
  );
}

BurgerConstructor.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.shape(ingredientType)).isRequired
};

import { useEffect, useState, useContext } from 'react';
import constructorStyle from "./burger-constructor.module.css";
import PropTypes from 'prop-types';
import ingredientType from "../../utils/types";
import { Button, ConstructorElement, CurrencyIcon, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modal/my-modal";
import OrderDetails from "../order-details/order-details";
import { OrderIngredientsContext, TotalPriceContext } from '../../services/appContext';

export default function BurgerConstructor({bunData}){
  const [visibleModal, setVisibleModal] = useState(false);
  const { totalPrice, setTotalPrice } = useContext(TotalPriceContext);
  const { orderIngredients } = useContext(OrderIngredientsContext);

  useEffect(() => {
      let total = 2510;
      orderIngredients.map(item => (total += item.price));
      setTotalPrice(total);
    },
    [orderIngredients, setTotalPrice]
  );
 
  const handleOpenModal = () => {
    setVisibleModal(true);
  }

  const handleCloseModal = () => {
    setVisibleModal(false);
  }

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
            text={`${bunData.name} (верх)`}
            price={bunData.price}
            thumbnail={bunData.image}
          />
        </div>
        
        <div className={constructorStyle.movableItems}>
          {
            orderIngredients.map((ingredient) => {
              return (
                <div key={ingredient._id} className={constructorStyle.elementWrapper}>
                  <DragIcon type="primary" />
                  <ConstructorElement
                    text={ingredient.name}
                    price={ingredient.price}
                    thumbnail={ingredient.image}/>
                </div>
              );
            })
          }
        </div>
  
        <div className={`${constructorStyle.lockedElementWrapper} mr-4`}>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={`${bunData.name} (низ)`}
            price={bunData.price}
            thumbnail={bunData.image}
          />
        </div>
      </div>

      {/* Итоговая цена и кнопка оформления заказа */}
      
      <div className={`${constructorStyle.order} mt-10 mr-4`}>
        <span className={`${constructorStyle.total} mr-10`}>
          <span className="mr-2">{totalPrice}</span>
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
  bunData: PropTypes.shape(ingredientType)
};

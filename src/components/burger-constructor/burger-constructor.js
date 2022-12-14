import { useEffect, useState, useContext } from 'react';
import constructorStyle from "./burger-constructor.module.css";
import PropTypes from 'prop-types';
import ingredientType from "../../utils/types";
import { Button, ConstructorElement, CurrencyIcon, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modal/my-modal";
import OrderDetails from "../order-details/order-details";
import { BurgerContext, OrderIngredientsContext, TotalPriceContext } from '../../services/appContext';
import { BASE_URL } from '../../services/constants';
import request from '../../utils/request';

export default function BurgerConstructor(){
  const { data } = useContext(BurgerContext);
  const [visibleModal, setVisibleModal] = useState(false);
  const { totalPrice, setTotalPrice } = useContext(TotalPriceContext);
  const { orderIngredients } = useContext(OrderIngredientsContext);
  const [orderNumber, setOrderNumber] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
      let total = 2510;
      orderIngredients.map(item => (total += item.price));
      setTotalPrice(total);
    },
    [orderIngredients, setTotalPrice]
  );

  const handleOrder = async () => {
    try {
      let ingredients = [`${data[0]._id}`, `${data[0]._id}`];
      orderIngredients.forEach(element => {
        ingredients.push(`${element._id}`);
      });
      setIsLoading(true);
      setHasError(false);

      const options = {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({"ingredients": ingredients})
      }
      const res = await request(`${BASE_URL}/orders`, options);
      setOrderNumber(res.order.number);
      setIsLoading(false);
      setVisibleModal(true);
      
    } catch(err) {
      setHasError(true);
    }
  }

  const handleCloseModal = () => {
    setVisibleModal(false);
  }

  const modal = (
    <Modal handleCloseModal={handleCloseModal} header={''}>
      <OrderDetails orderNumber={orderNumber}/>
    </Modal>
  );

  const bunData = data[0];
  return (
    <div className={`${constructorStyle.constructorWrapper} mt-25`}>
      
      {/* ?????????????????????? */}

      <div className={`${constructorStyle.constructor} ml-4`}>
        <div className={`${constructorStyle.lockedElementWrapper} mr-4`}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text={`${bunData.name} (????????)`}
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
            text={`${bunData.name} (??????)`}
            price={bunData.price}
            thumbnail={bunData.image}
          />
        </div>
      </div>

      {/* ???????????????? ???????? ?? ???????????? ???????????????????? ???????????? */}
      
      <div className={`${constructorStyle.order} mt-10 mr-4`}>
        <span className={`${constructorStyle.total} mr-10`}>
          <span className="mr-2">{totalPrice}</span>
          <CurrencyIcon type="primary" />
        </span>
        
        <Button htmlType="submit" type="primary" size="medium" onClick={handleOrder}>
          ???????????????? ??????????
        </Button>
        { !isLoading && !hasError && visibleModal && modal}
        
      </div>
    </div>
  );
}

BurgerConstructor.propTypes = {
  bunData: PropTypes.shape(ingredientType)
};

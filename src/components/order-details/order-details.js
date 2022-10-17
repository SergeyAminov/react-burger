import orderDetailsStyle from "./order-details.module.css";

import { CheckMarkIcon } from "@ya.praktikum/react-developer-burger-ui-components";

export default function OrderDetails(){
    return(
        <>
            <span className={`${orderDetailsStyle.orderNumber} mt-30 mb-8`}>034536</span>
            <span className={`${orderDetailsStyle.orderNumberLabel} mb-15`}>идентификатор заказа</span>
            <div className={`${orderDetailsStyle.checkIcon} mb-15`}>
                <CheckMarkIcon type="primary" />
            </div>
            <span className={`${orderDetailsStyle.below} mb-2`}>Ваш заказ начали готовить</span>
            <span className={`${orderDetailsStyle.below2} mb-30`}>Дождитесь готовности на орбитальной станции</span>
            
        </>
    );
}

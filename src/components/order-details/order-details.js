import orderDetailsStyle from "./order-details.module.css";
import orderCheck from '../../images/done.png';

export default function OrderDetails(){
    return(
        <>
            <span className={`${orderDetailsStyle.orderNumber} mt-30 mb-8`}>034536</span>
            <span className={`${orderDetailsStyle.orderNumberLabel} mb-15`}>идентификатор заказа</span>
            <img className={`${orderDetailsStyle.checkIcon} mb-15`} src={orderCheck} alt="Заказ готов"/>
            <span className={`${orderDetailsStyle.below} mb-2`}>Ваш заказ начали готовить</span>
            <span className={`${orderDetailsStyle.below2} mb-30`}>Дождитесь готовности на орбитальной станции</span>
        </>
    );
}

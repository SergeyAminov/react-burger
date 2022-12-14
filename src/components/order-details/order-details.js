import orderDetailsStyle from "./order-details.module.css";
import orderCheck from '../../images/done.png';
import PropTypes from 'prop-types';

export default function OrderDetails({ orderNumber }){
    return(
        <>
            <span className={`${orderDetailsStyle.orderNumber} mt-30 mb-8`}>{orderNumber}</span>
            <span className={`${orderDetailsStyle.orderNumberLabel} mb-15`}>идентификатор заказа</span>
            <img className={`${orderDetailsStyle.checkIcon} mb-15`} src={orderCheck} alt="Заказ готов"/>
            <span className={`${orderDetailsStyle.below} mb-2`}>Ваш заказ начали готовить</span>
            <span className={`${orderDetailsStyle.below2} mb-30`}>Дождитесь готовности на орбитальной станции</span>
        </>
    );
}

OrderDetails.propTypes = {
    orderNumber: PropTypes.number.isRequired
}

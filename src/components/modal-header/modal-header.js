import PropTypes from 'prop-types';
import modalHeaderStyle from './modal-header.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

export default function ModalHeader({ children, handleCloseModal }){

    return (
        <div className={`${modalHeaderStyle.modalHeader} mt-10`}>
            <h3 className={modalHeaderStyle.header}>{children}</h3>
            <span className={modalHeaderStyle.close} onClick={handleCloseModal}><CloseIcon type="primary"/></span>
        </div>
    );

}

ModalHeader.propTypes = {
    children: PropTypes.string.isRequired,
    handleCloseModal: PropTypes.func.isRequired
}

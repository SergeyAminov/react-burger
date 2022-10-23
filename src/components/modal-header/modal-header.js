import PropTypes from 'prop-types';
import modalHeaderStyle from './modal-header.module.css';

export default function ModalHeader({ children, onClose }){

    return (
        <div className={`${modalHeaderStyle.modalHeader} mt-10`}>
            <h3 className={modalHeaderStyle.header}>{children}</h3>
            <span className={modalHeaderStyle.close} onClick={onClose}>x</span>
        </div>
    );

}

ModalHeader.propTypes = {
    children: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired
}

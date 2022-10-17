import modalStyle from "./modal.module.css";
import PropTypes from 'prop-types';

export default function Modal({closeModal, children}){
    return(
        <div className={modalStyle.modalContent}>
            <span className={`${modalStyle.close} mt-15 mr-10`} onClick={closeModal}>&times;</span>
            {children}
        </div>
    );
}

Modal.propTypes = {
    closeModal: PropTypes.func.isRequired,
    children: PropTypes.element
}

import { useEffect } from 'react';
import modalStyle from "./modal.module.css";
import PropTypes from 'prop-types';

export default function Modal({closeModal, children}){

    useEffect(() => {
        const closeOnEsc = (evt) => { if (evt.key === "Escape") closeModal() };
        document.addEventListener("keyup", closeOnEsc);
        
        return () => {
        document.removeEventListener("keyup", closeOnEsc);
        }
    });

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

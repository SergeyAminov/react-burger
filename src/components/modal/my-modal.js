import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import ModalHeader from '../modal-header/modal-header';
import ModalOverlay from '../modal-overlay/modal-overlay';
import modalStyle from './modal.module.css';

const modals = document.getElementById("modals");

export default function Modal({ children, header='', handleCloseModal }){
    
    useEffect(() => {
        const closeOnEsc = (evt) => { if (evt.key === "Escape") handleCloseModal() };
        document.addEventListener("keyup", closeOnEsc);
        
        return () => {
        document.removeEventListener("keyup", closeOnEsc);
        }
    }, [handleCloseModal]);
    
    return ReactDOM.createPortal(
        <>
            <div className={modalStyle.modal}>
                <ModalHeader handleCloseModal={handleCloseModal}>{header}</ModalHeader>
                {children}
            </div>
            <ModalOverlay handleCloseModal={handleCloseModal}/>
        </>,
        modals
    );
}

Modal.propTypes = {
    children: PropTypes.element.isRequired,
    header: PropTypes.string.isRequired,
    handleCloseModal: PropTypes.func.isRequired
}

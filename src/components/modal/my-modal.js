import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import ModalHeader from '../modal-header/modal-header';
import ModalOverlay from '../modal-overlay/modal-overlay';
import modalStyle from './modal.module.css';

const modals = document.getElementById("modals");

export default function Modal({ children, header, onClose }){
    
    useEffect(() => {
        const closeOnEsc = (evt) => { if (evt.key === "Escape") onClose() };
        document.addEventListener("keyup", closeOnEsc);
        
        return () => {
        document.removeEventListener("keyup", closeOnEsc);
        }
    }, [onClose]);
    
    return ReactDOM.createPortal(
        <>
            <div className={modalStyle.modal}>
                <ModalHeader onClose={onClose}>{header}</ModalHeader>
                {children}
            </div>
            <ModalOverlay onClose={onClose}/>
        </>,
        modals
    );
}

Modal.propTypes = {
    children: PropTypes.element,
    header: PropTypes.string,
    onClose: PropTypes.func
}

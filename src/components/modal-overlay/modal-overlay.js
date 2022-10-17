import ReactDOM from 'react-dom';
import { useEffect } from 'react';
import modalOverlayStyle from "./modal-overlay.module.css";
import PropTypes from 'prop-types';
import Modal from '../modal/modal';

const modalRoot = document.getElementById("modals");

export default function ModalOverlay({show, closeModal, children}){

    useEffect(() => {
        let modal = document.getElementById("overlay");
        
        if (show) modal.style.display = "block";
        else modal.style.display = "none";

        window.onclick = (evt) => { if (evt.target === modal) closeModal() };
    });

    return ReactDOM.createPortal(
        <div id="overlay" className={modalOverlayStyle.overlay}>
            <Modal closeModal={closeModal}>
                {children}
            </Modal>
        </div>,
        modalRoot
    );
}

ModalOverlay.propTypes = {
    show: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
    children: PropTypes.element
}

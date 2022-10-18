import ReactDOM from 'react-dom';
import { useEffect } from 'react';
import modalOverlayStyle from "./modal-overlay.module.css";
import PropTypes from 'prop-types';
import Modal from '../modal/modal';

const modalRoot = document.getElementById("modals");

export default function ModalOverlay({isShowModal, handleCloseModal, children}){

    useEffect(() => {
        let modal = document.getElementById("overlay");

        /*
        if (isShowModal) modal.style.display = "block";
        else modal.style.display = "none";
        */

        window.onclick = (evt) => { if (evt.target === modal) handleCloseModal() };
    });

    return ReactDOM.createPortal(
        <div id="overlay" className={modalOverlayStyle.overlay}>
            <Modal closeModal={handleCloseModal}>
                {children}
            </Modal>
        </div>,
        modalRoot
    );
}

ModalOverlay.propTypes = {
    isShowModal: PropTypes.bool.isRequired,
    handleCloseModal: PropTypes.func.isRequired,
    children: PropTypes.element
}

import PropTypes from 'prop-types';

import overlayStyle from './modal-overlay.module.css';

export default function ModalOverlay({ handleCloseModal }){

    return (
        <div className={overlayStyle.overlay} onClick={handleCloseModal}>
            
        </div>
    );

}

ModalOverlay.propTypes = {
    handleCloseModal: PropTypes.func.isRequired
}

import PropTypes from 'prop-types';

import overlayStyle from './modal-overlay.module.css';

export default function ModalOverlay({ onClose }){

    return (
        <div className={overlayStyle.overlay} onClick={onClose}>
            
        </div>
    );

}

ModalOverlay.propTypes = {
    onClose: PropTypes.func.isRequired
}

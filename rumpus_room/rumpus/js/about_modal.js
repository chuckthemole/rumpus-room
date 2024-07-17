import React, { useEffect } from 'react';
import Modal from 'react-modal';

export default function AboutModal() {

    let is_modal_active = false;

    function setModalActive() {
        is_modal_active = true;
    }

    function setModalInactive() {
        is_modal_active = false;
    }

    const modal_style = {
        overlay: {
            backgroundColor: 'rgba(93, 93, 93, .5)',
        },
        content: {
            top: '50%',
            transform: 'translate(0%, 70%)',
        },
    };

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
        setModalActive();
    }

    function afterOpenModal() {
    }

    function closeModal() {
        setIsOpen(false);
        setModalInactive();
    }

    return (
        <>
            <a onClick={openModal} className="navbar-item"> About </a>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                className='modal-content'
                style={modal_style}
                contentLabel="User Modal"
            >
                <div className="modal-content box">
                    <span>
                        Hello What the fuck?
                    </span>
                </div>
            </Modal>
        </>
    );
}
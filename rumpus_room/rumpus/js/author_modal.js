import React from 'react';
import Modal from 'react-modal';

export default function AuthorModal() {

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
            <a onClick={openModal} className="navbar-item"> Author </a>
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
                    My name is Charles Thomas and I am a Software Developer based in Oakland, California. 
                    My most recent experience is being a part of Callisto Media as a Software Engineer. 
                    I am a graduate of Mills College earning a master's degree in Computer Science.
                    </span>
                </div>
            </Modal>
        </>
    );
}
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
                    This application is a dynamic platform that allows users to engage with content through comments.
                    With a user-friendly interface built using React, users can create new comments, view comments from others, and delete any comments they no longer wish to keep.
                    Additionally, the application supports liking comments, fostering interaction and feedback within the community.
                    The robust backend, powered by Django and MySQL, ensures smooth performance and reliable management of all user activities.
                    Whether you're sharing thoughts or interacting with others, this application makes commenting and engagement intuitive and efficient.
                    </span>
                </div>
            </Modal>
        </>
    );
}
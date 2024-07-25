import React, { useState, useRef, useEffect } from 'react';
import AboutModal from './about_modal';
import AuthorModal from './author_modal';
import Modal from 'react-modal';

/**
 * This renders the header component
 * 
 * @returns Header component
 */
export default function Header() {
    const [isActive, setIsActive] = useState(false);
    const burgerRef = useRef(null);
    const menuRef = useRef(null);

    Modal.setAppElement('#root');

    // path to navbar brand
    const path_to_navbar_brand = '/static/rumpus/images/default_brand.png';
    const navbar_brand_background_style = { // style for navbar brand using path_to_navbar_brand
        background: `url(${path_to_navbar_brand}) no-repeat center center`,
        backgroundSize: 'cover',
        width: '152px'
    };

    // handle toggle for burger menu
    const handleToggle = () => {
        setIsActive(!isActive);
    };

    // handle document click on burger menu
    useEffect(() => {
        const handleDocumentClick = (event) => {
            if (
                burgerRef.current &&
                menuRef.current &&
                !burgerRef.current.contains(event.target) &&
                !menuRef.current.contains(event.target)
            ) {
                setIsActive(false);
            }
        };

        document.addEventListener('click', handleDocumentClick);
        return () => {
            document.removeEventListener('click', handleDocumentClick);
        };
    }, []);

    return (
        <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
            <div className="container">
                <div className="navbar-brand">
                    <a href="/" style={navbar_brand_background_style}></a>
                    <a
                        role="button"
                        className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
                        aria-label="menu"
                        aria-expanded="false"
                        data-target="navbarBasicExample"
                        ref={burgerRef}
                        onClick={handleToggle}
                    >
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div
                    id="navbarBasicExample"
                    className={`navbar-menu ${isActive ? 'is-active' : ''}`}
                    ref={menuRef}
                >
                    <div className="navbar-end">
                        <AboutModal />
                        <AuthorModal />
                    </div>
                </div>
            </div>
        </nav>
    );
}

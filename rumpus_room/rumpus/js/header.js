import React from 'react';
import AboutModal from './about_modal';
import AuthorModal from './author_modal';
import Modal from 'react-modal';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

/**
 * This renders the header component
 * 
 * @returns Header component
 */
export default function Header() {

    Modal.setAppElement('#root');
    const path_to_navbar_brand = '/static/rumpus/images/default_brand.png';

    // Return the header
    return (
        <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
            <div className="container">
            
                <div className="navbar-brand">
                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-end">
                    
                    <AboutModal />
                    <AuthorModal />
                </div>
            </div>
            </div>
        </nav>
    );
}
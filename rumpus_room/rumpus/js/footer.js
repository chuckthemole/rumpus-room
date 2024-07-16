import React from 'react';

export default function Footer() {

    const path_to_navbar_brand = '/static/rumpus/images/default_brand.png';

    return (
        <footer className="footer">
            <div className="container">
                <div className="content has-text-centered">
                    <div className="links">

                    <div className="level-item">
                        <a href="/">TODO</a>
                    </div>
                    <div className="level-item">
                        <a href="/">CREATE</a>
                    </div>
                    <div className="level-item">
                        <a href="/">FOOTER ITEMS</a>
                    </div>
                    </div><br />
                    <p>
                    <a href="/">
                        <img src={path_to_navbar_brand} alt="Made with Bulma" width="128" height="24" />
                    </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
import React from 'react';

export default function Footer() {

    const path_to_navbar_brand = '/static/rumpus/images/default_brand.png';

    return (
        <footer className="footer is-primary">
            <div className="container">
                <div className="content has-text-centered">
                    <div className="links">
                        {/* <div className="level-item">
                            <a href="/">About</a>
                        </div>
                        <div className="level-item">
                            <a href="/">Author</a>
                        </div> */}
                        <div className="level-item">
                            <a target="_blank" href="https://github.com/chuckthemole/roulettech-take-home">
                                <span className="icon is-small">Github</span>
                            </a>
                        </div>
                    </div><br />
                    <p>
                        <a target="_blank" href="http://www.charles-pikaart-thomas.com/">
                            <img src={path_to_navbar_brand} alt="Made with Bulma" width="128" height="24" />
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
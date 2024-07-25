import React from 'react';
import { SocialIcon } from 'react-social-icons'

export default function Footer() {

    const path_to_navbar_brand = '/static/rumpus/images/default_brand.png';
    const github_icon = <SocialIcon url='https://github.com/chuckthemole/roulettech-take-home' />;
    const linkedin_icon = <SocialIcon url='https://www.linkedin.com/in/chuckthemole' />;

    return (
        <footer className="footer">
            <div className="container">
                <div className="content has-text-centered">
                    <div className="links">
                        {/* <div className="level-item">
                            <a href="/">About</a>
                        </div>
                        <div className="level-item">
                            <a href="/">Author</a>
                        </div> */}
                        <div className="level-item box">
                            <a target="_blank" href="http://www.charles-pikaart-thomas.com/">
                                <img src={path_to_navbar_brand} alt="Made with Bulma" width="128" height="24" />
                            </a>
                            {github_icon}
                            {linkedin_icon}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
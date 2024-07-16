import React from 'react';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

/**
 * This renders the header component
 * 
 * @returns Header component
 */
export default function Header() {

    const path_to_navbar_brand = '/static/rumpus/images/default_brand.png';

    // Return the header
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="container">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                <img src={path_to_navbar_brand} width="112" height="28" />
                </a>

                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-end">
                <a className="navbar-item"> Tag </a>
                <a className="navbar-item"> Author </a>
                <a className="navbar-item"> Style Guide </a>
                </div>
            </div>
            </div>
        </nav>
    );
}
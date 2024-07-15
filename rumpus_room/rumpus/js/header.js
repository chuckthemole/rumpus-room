import React from 'react';
import useSWR from 'swr';

export const fetcher = async url => {
    const res = await fetch(url)
    // If the status code is not in the range 200-299,
    // still try to parse and throw it.
    if (!res.ok) {
      const error = new Error('An error occurred while fetching the data.')
      // Attach extra info to the error object.
      error.info = await res.json()
      error.status = res.status
      throw error
    }
    return res.json()
}

export default function Header() {
    const {header_data, error} = useSWR(
        '/static/',
        fetcher
    );

    if (error) {
        console.log('Error fetching header data');
        console.log(error);
    }

    console.log(header_data);

    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="container">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">
                <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
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
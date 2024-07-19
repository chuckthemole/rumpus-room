const React = require('react');
import { useState } from 'react';
import { faBarcode, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useSWR from 'swr';
import CSRFToken from './csrftoken';

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

export default function Like({like_id}) {

    const {data, error, isLoading} = useSWR(
        '/api/likes/' + like_id,
        fetcher,
        { refreshInterval: 1000 }
    );

    if(error) {
        console.log(error);
        return <div>failed to load</div>
    }

    if(!data) {
        console.log('loading likes');
        return <div>loading...</div>
    }

    async function handleLike(e) {
        e.preventDefault();
        console.log('like_id:');
        console.log(like_id);
        const newLike = {
            count: data.count + 1
        };
        const requestOptions = {
            method: 'PUT',
            redirect: "follow",
            entity: newLike,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newLike)
        };
        // return fetch('api/forum_posts/', requestOptions);
        // fetch from the forum_posts api and print to console the response
        console.log(requestOptions);
        return fetch('api/likes/' + like_id + '/', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.log('error', error));
    }

    return(
        <>
            <form method='post' onClick={handleLike} >
                <CSRFToken />
                <a className="level-item">
                    <span className="icon is-small"><FontAwesomeIcon icon={faHeart} color='red' /></span>
                </a>
            </form>
            <span>Likes: {data.count}</span>
        </>
    );
}
const React = require('react');
import { useState } from 'react';
import { faHeart, faReply, faRetweet } from '@fortawesome/free-solid-svg-icons';
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

export default function ForumThread() {

    const [postId, setPostId] = useState(0);

    const {data, error, isLoading} = useSWR(
        '/api/forum_posts/',
        fetcher,
        { refreshInterval: 1000 }
    );
    if(error) {
        console.log(error);
        return <div>failed to load</div>
    }
    if(!data) {
        console.log('loading forum posts');
        return <div>loading...</div>
    }

    async function handleSubmit(e) {
        e.preventDefault();
        console.log('id:');
        console.log(postId);
        if(postId !== 0) {
            await onDelete(postId);
        } else {
            console.log('postId is 0');
        }
    }

    async function onDelete(id) {
        const requestOptions = {
            method: 'DELETE',
            redirect: "follow",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(id)
        };
        console.log(requestOptions);
        return fetch('api/forum_posts/' + id + '/', requestOptions);
	}

    if(data !== undefined && data !== null && data !== '') {

        return (
            <>
                <div>
                    {data.map(( post, index ) => (
                        <article key={index} className="media m-4 box">
                            <figure className="media-left">
                                <p className="image is-64x64">
                                <img src="/static/rumpus/images/default_brand.png" />
                                </p>
                            </figure>
                            <div className="media-content">
                                <div className="content">
                                    <p>
                                        <br />
                                        <small>Post id: <strong>{post.id}</strong></small> <small>Post time: <strong>{post.date}</strong></small>
                                        <br />
                                        <div className='box' dangerouslySetInnerHTML={{ __html: post.body }} />
                                    </p>
                                </div>
                                <nav className="level is-mobile">
                                    <div className="level-left">
                                        <a className="level-item">
                                            <span className="icon is-small"><FontAwesomeIcon icon={faHeart} color='red' /></span>
                                        </a>
                                    </div>
                                </nav>
                            </div>
                            <form method='post' onSubmit={handleSubmit} >
                                <CSRFToken />
                                <div className="media-right">
                                    <button className="delete" onClick={() => setPostId(post.id)}></button>
                                </div>
                            </form>
                        </article>
                    ))}
                </div>
            </>
        )
    }
}
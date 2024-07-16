const React = require('react');
import { faHeart, faReply, faRetweet } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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

export default function ForumThread() {

    const {data, error, isLoading} = useSWR(
        '/api/forum_posts/',
        fetcher
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
        const forumPostId = e.target.id;
        await onDelete(forumPostId);
    }

    async function onDelete(id) {
        const requestOptions = {
            method: 'DELETE',
            redirect: "follow",
            entity: id,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(id)
        };
        // return fetch('api/forum_posts/', requestOptions);
        // fetch from the forum_posts api and print to console the response
        console.log(requestOptions);
        return fetch('api/forum_posts/', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.log('error', error));
	}

    if(data !== undefined && data !== null && data !== '') {

        return (
            <>
                <div>
                    {data.map(( post, index ) => (
                        <article key={index} className="media m-4">
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
                                        {/* <span className="icon is-small"><i className="fas fa-reply"></i></span> */}
                                        <span className="icon is-small"><FontAwesomeIcon icon={faReply} color='blue' /></span>
                                        </a>
                                        <a className="level-item">
                                        {/* <span className="icon is-small"><i className="fas fa-retweet"></i></span> */}
                                        <span className="icon is-small"><FontAwesomeIcon icon={faRetweet} color='blue' /></span>
                                        </a>
                                        <a className="level-item">
                                        {/* <span className="icon is-small"><i className="fas fa-heart"></i></span> */}
                                        <span className="icon is-small"><FontAwesomeIcon icon={faHeart} color='red' /></span>
                                        </a>
                                    </div>
                                </nav>
                            </div>
                            <form method='post' onSubmit={handleSubmit}>
                                <div className="media-right">
                                    <button className="delete"></button>
                                </div>
                            </form>
                        </article>
                    ))}
                </div>
            </>
        )
    }
}
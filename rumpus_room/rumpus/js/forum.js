const React = require('react');
// const ReactDOM = require('react-dom/client');

import RumpusRoomQuill from './rumpus_room_quill';

export default function Forum() {

    // override the default modules for the quill editor
    const rumpus_room_modules = {
        toolbar: [
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline','strike', 'blockquote'],
            [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
            ['link']
        ],
    };

    const editor_ref = React.useRef(null);
    const [value, setValue] = React.useState('');
    const [quill, setQuill] = React.useState(<RumpusRoomQuill modules={rumpus_room_modules} value={value} setValue={setValue} editor_ref={editor_ref} />);

    async function handleSubmit(e) {
        e.preventDefault();
        // console.log(value);
        const forumPost = {};
        forumPost['body'] = value;
        forumPost['like'] = await onCreateLike().then(data => {return data.id;});
        editor_ref.current.getEditor().setContents(''); // clear the editor
        await onCreate(forumPost);
    }

    async function onCreateLike() {
        const like = {};
        like['count'] = 0;
        const requestOptions = {
            method: 'POST',
            redirect: "follow",
            entity: like,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(like)
        };
        // return fetch('api/forum_posts/', requestOptions);
        // fetch from the forum_posts api and print to console the response
        // console.log(requestOptions);
        return fetch('api/likes/', requestOptions)
            .then(response => response.json())
            .then(data => {return data;})
            .catch(error => console.log('error', error));
	}

    async function onCreate(forumPost) {
        const requestOptions = {
            method: 'POST',
            redirect: "follow",
            entity: forumPost,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(forumPost)
        };
        // return fetch('api/forum_posts/', requestOptions);
        // fetch from the forum_posts api and print to console the response
        // console.log(requestOptions);
        return fetch('api/forum_posts/', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.log('error', error));
	}

    return (
        <>
            <form method='post' onSubmit={handleSubmit} className="box">
                <div className='field'>{quill}</div>
                <div className="field">
                    <button id="adminForumPostSubmit" type="submit" value="ForumPost" className="button is-success">
                        Submit
                    </button>
                </div>
            </form>
        </>
    )
}
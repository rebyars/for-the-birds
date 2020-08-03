import React from 'react';
import { Link } from 'react-router-dom';

const ChirpListItem = ({chirp}) => (
    <div key={`${chirp.id}div`}>
        <h3 key={`${chirp.id}subject`}> {chirp.subject}</h3>
        <p key={`${chirp.id}content`}>{chirp.content}</p>
        <p key={`${chirp.id}createdAt`}>{chirp.createdAt}</p>
        <Link to={`/editChirp/${chirp.id}`}>
            <button>Edit Chirp</button>
        </Link>
    </div> 
);

export default ChirpListItem;
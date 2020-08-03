import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const ChirpListItem = ({chirp, uid}) => (
    <div className="list-item">
        <div>
            <h3 className="list-item__title"> {chirp.subject}</h3>
            <p className="list-item_content"> {chirp.content}</p>
            <p className="list-data">{moment(chirp.createdAt).format('h:mm a MMM Do, YYYY')}</p>
        </div>
        <div>
            { chirp.uid === uid ?
                <Link to={`/editChirp/${chirp.id}`}>
                <button className="button">Edit Chirp</button>
                </Link> : 
                <button className="button">Like</button>
            }
        </div>
    </div> 
);

const mapStateToProps = (state) => ({
    uid: state.auth.uid
});

export default connect(mapStateToProps)(ChirpListItem);
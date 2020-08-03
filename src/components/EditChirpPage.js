import React from 'react';
import { connect } from 'react-redux';
import ChirpForm from './ChirpForm';
import { startEditChirp, startRemoveChirp } from '../actions/chirps';

const EditChirpPage = (props) => (
    <div>
        <ChirpForm 
            chirp={props.chirp}
            onSubmit={(chirp) => {
                props.startEditChirp(props.chirp.id, chirp);
                props.history.push('/');
            }}
        />
        <button 
            onClick={() => {
                props.startRemoveChirp({id: props.chirp.id});
                props.history.push('/');
            }}
        > Unchirp </button>
    </div>
);

const mapStateToProps = (state, props) => ({
    chirp: state.chirps.find((chirp) => chirp.id === props.match.params.id )
});

const mapDispatchToProps = (dispatch) => ({
    startEditChirp: (id, chirp) => dispatch(startEditChirp(id, chirp)),
    startRemoveChirp: (chirp) => dispatch(startRemoveChirp(chirp))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditChirpPage);
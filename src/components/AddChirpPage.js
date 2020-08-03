import React from 'react';
import { connect } from 'react-redux';
import ChirpForm from './ChirpForm';
import { startAddChirp } from '../actions/chirps';

const AddChirpPage = (props) => (
    <div>
        <ChirpForm
            onSubmit={(chirp) => {
                props.startAddChirp(chirp);
                props.history.push('/');
            }}
        />
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startAddChirp: (chirp) => dispatch(startAddChirp(chirp))
});

export default connect (undefined, mapDispatchToProps)(AddChirpPage);
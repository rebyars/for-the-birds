import React from 'react';
import { connect } from 'react-redux';
import ChirpForm from './ChirpForm';
import { startAddChirp } from '../actions/chirps';

const AddChirpPage = (props) => (
    <div>
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Add Chirp</h1>
            </div>
        </div>
        <div className="content-container">
            <ChirpForm
                onSubmit={(chirp) => {
                    props.startAddChirp(chirp);
                    props.history.push('/');
                }}
            />
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startAddChirp: (chirp) => dispatch(startAddChirp(chirp))
});

export default connect (undefined, mapDispatchToProps)(AddChirpPage);
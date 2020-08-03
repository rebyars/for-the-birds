import React from 'react';
import { connect } from 'react-redux';
import ChirpListItem from './ChirpListItem';

const ChirpList = ({chirps}) => (
    <div className="content-container">
        {chirps.length === 0 ? (
            <p>No Chirps Found.</p>
        ) : (   
            chirps.map((chirp) => (
            <ChirpListItem chirp={chirp} key={chirp.id} />
        )))}
     </div>
);

const mapStateToProps = (state) => ({
    chirps: state.chirps
});

export default connect(mapStateToProps)(ChirpList);
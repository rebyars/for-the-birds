import React from 'react';
import {Link} from 'react-router-dom';
import ChirpList from './ChirpList';

const DashboardPage = ({ chirps }) => (
    <div>
        <div className="page-header">
            <div className="content-container">
            <h1 className="page-header__title">What's New</h1>
                <div className="page-header__actions">
                    <Link className="button" to="/addChirp" >Add Chirp</Link>
                </div>
            </div>
        </div>
        <ChirpList />
    </div>
);

export default DashboardPage;
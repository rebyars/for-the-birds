import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AddChirpPage from '../components/AddChirpPage';
import DashboardPage from '../components/DashboardPage';
import Header from '../components/Header';
import EditChirpPage from '../components/EditChirpPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={DashboardPage} exact={true} />
                <Route path="/addChirp" component={AddChirpPage} />
                <Route path="/editChirp/:id" component={EditChirpPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
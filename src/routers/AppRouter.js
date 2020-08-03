import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import AddChirpPage from '../components/AddChirpPage';
import DashboardPage from '../components/DashboardPage';
import EditChirpPage from '../components/EditChirpPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true} />
                <PrivateRoute path="/dashboard" component={DashboardPage} />
                <PrivateRoute path="/addChirp" component={AddChirpPage} />
                <PrivateRoute path="/editChirp/:id" component={EditChirpPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import chirpsRedcer from '../reducers/chirps';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            chirps: chirpsRedcer
        }), composeEnhancers(applyMiddleware(thunk))
    );

    return store;
};



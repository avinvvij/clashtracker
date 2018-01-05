import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter , Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import {compose , createStore , applyMiddleware} from 'redux';
import ThunkMiddleWare from 'redux-thunk';
import PromiseMiddleware from 'redux-promise';

//Components
import App from './components/App'
import TopPlayers from './components/TopPlayers'
import Header from './components/Header'

//reducer
import allReducers from './reducers'

const createAppStore = compose(
    applyMiddleware(ThunkMiddleWare , PromiseMiddleware)
)(createStore);

export function configureStore(initialState){
    const store = createAppStore( allReducers , initialState);
    return store;
}

const store = configureStore();

ReactDom.render(
    <Provider store = {store}>
    <div>
    <BrowserRouter>
        <div>
            <Header />
            <Route exact path = "/" component = {App} />
            <Route exact path = "/topplayers" component={TopPlayers} />
        </div> 
    </BrowserRouter>
    </div>
    </Provider>, document.getElementById("root"));
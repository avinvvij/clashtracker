import {combineReducers} from 'redux';

import {top_player_reducer} from './top_player_reducer'

const allReducers = combineReducers({
    top_player_reducer: top_player_reducer
});

export default allReducers;
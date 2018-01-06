export function top_player_reducer(state = {} , action){
    switch(action.type){
        case 'TOP_PLAYERS':
            return {...state , top_players: action.payload};
        case 'TOP_CLANS':
            return {...state , top_clans: action.payload};
        case 'PLAYER_PROFILE':
            console.log(action.payload);
            return {...state , player_profile: action.payload}
            return
        default:
            return state;
    }
}
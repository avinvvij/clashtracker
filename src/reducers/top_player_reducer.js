export function top_player_reducer(state = {} , action){
    switch(action.type){
        case 'TOP_PLAYERS':
            return {...state , top_players: action.payload};
        case 'TOP_CLANS':
            console.log(action.payload);
            return {...state , top_clans: action.payload};
        default:
            return state;
    }
}
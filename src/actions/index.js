import axios from 'axios';

const server_url = "http://api.cr-api.com/";

export function getTopPlayers(){
    const top_player_url = server_url+"top/players";
    const request = axios.get(top_player_url  , {headers:{
            auth: '3e5f585e785f481291fa3cd0abaf4d738004b538732f46728bae5965862580a0'
        }
    }).then(function(response){
            return response.data;
        }).catch(function(error){
            console.log(error);
        });
    
        return {
            type: 'TOP_PLAYERS',
            payload: request
        }
   
}

export function getTopClans(){
    const top_clans_url = server_url+"top/clan";
    const request = axios.get(top_clans_url ,  {headers:{
        auth: '3e5f585e785f481291fa3cd0abaf4d738004b538732f46728bae5965862580a0'
    }
}).then(function(response){
    console.log(response);
    return response.data;
}).catch(function(error){
    console.log(error);
});
return {
    type: 'TOP_CLANS',
    payload: request
}
}

export function getPlayerProfile(player_tag){
    const player_profile_url = server_url + "player/"+player_tag;
    const request = axios.get(player_profile_url , {headers:{
        auth: '3e5f585e785f481291fa3cd0abaf4d738004b538732f46728bae5965862580a0'
    }})
    .then(function(response){
        return response.data;
    })
    .catch(function(error){console.log(error)});

    return {
        type: 'PLAYER_PROFILE',
        payload: request
    }
}

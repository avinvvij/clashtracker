import React , {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import axios from 'axios';

import {getTopPlayers} from '../actions';



class TopPlayers extends Component{

    constructor(props){
        super(props);
    }

     return_top_player_list = ({top_player_reducer})=>{
        if(top_player_reducer.top_players){
        return top_player_reducer.top_players.map((Player)=>{
                if(Player){
                    return(
                        <div key={Player.tag}>
                            {Player.name}
                        </div>
                    );
                }
            });
        }
    }


    componentWillReceiveProps(nextProps){
    }

    componentDidMount(){

    }
    componentWillMount(){
    //     const top_players_url = server_url+"top/players";
    //     axios.get(top_players_url  , {headers:{
    //         auth: '3e5f585e785f481291fa3cd0abaf4d738004b538732f46728bae5965862580a0'
    //     }
    // }).then(function(response){
    //         console.log(response);
    //         console.log(this.props);
    //         this.props.getTopPlayers(response.data);
    //     }).catch(function(error){
    //         console.log(error);
    //     });
    // }

        this.props.getTopPlayers();
        

    }
    render(){
        return(
            <div>
                {this.return_top_player_list(this.props)}
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        top_player_reducer: state.top_player_reducer
    }
}

function mapDispatchToProps(Dispatch){
    return bindActionCreators({
        getTopPlayers: getTopPlayers
    } , Dispatch);
}

export default connect(mapStateToProps , mapDispatchToProps)(TopPlayers);
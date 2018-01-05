import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

//action 
import {getTopClans} from "../actions"

class TopClans extends Component{

    componentWillReceiveProps(nextProps){
        console.log(nextProps.top_clan_reducer);
    }

    return_list_of_top_clans = ({top_clan_reducer})=>
    {
        if(top_clan_reducer.top_clans){
            return top_clan_reducer.top_clans.map(
                (Clan)=>{
                    return(
                        <div>
                            {Clan.name}
                        </div>
                    );
                }
            );
        }
    }

    componentDidMount(){

    }

    componentWillMount(){
        this.props.getTopClans();
    }

    render(){
        return(
            <div>
                {this.return_list_of_top_clans(this.props)}
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        top_clan_reducer: state.top_player_reducer
    }
}

function mapDispatchToProps(Dispatch){
    return bindActionCreators({
        getTopClans: getTopClans
    },Dispatch);
}

export default connect(mapStateToProps , mapDispatchToProps)(TopClans);
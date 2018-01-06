import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Table} from 'react-bootstrap';

//action 
import {getTopClans} from "../actions"

class TopClans extends Component{

    componentWillReceiveProps(nextProps){
        console.log(nextProps.top_clan_reducer);
    }

    return_list_of_top_clans = ({top_clan_reducer})=>
    {
        if(top_clan_reducer.top_clans){
            var i = 0
            return top_clan_reducer.top_clans.map(
                (Clan)=>{
                    i++;
                    return(
                        <tr>
                            <td>
                                {i}
                            </td>
                            <td>
                                #{Clan.tag}
                            </td>
                            <td>
                            <img height={28} width={25} alt="" src = {Clan.badge.image}/> {Clan.name}
                            </td>
                            <td>
                                {Clan.score}
                            </td>
                            <td>
                                {Clan.memberCount}
                            </td>
                            <td>
                                {Clan.previousRank}
                            </td>
                            <td>
                                {Clan.location.name}
                            </td>
                        </tr>
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
                <Table className = "table-custom" responsive>
                    <thead>
			            <tr>
                            <th>Rank</th>
                            <th>Tag</th>
                            <th>Name</th>
                            <th>Trophies Count</th>
                            <th>Members</th>
                            <th>Previous Rank</th>
                            <th>Location</th>
			            </tr>
                        {this.return_list_of_top_clans(this.props)}
		            </thead>
                </Table>
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
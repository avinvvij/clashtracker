import React , {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Table , ProgressBar} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import {getTopPlayers} from '../actions';



class TopPlayers extends Component{

    constructor(props){
        super(props);
    }

     return_top_player_list = ({top_player_reducer})=>{
        if(top_player_reducer.top_players){
            var i = 0;
        return top_player_reducer.top_players.map((Player)=>{
                if(Player.clan){
                    var clanName = Player.clan.name;
                    var badge_img_src = Player.clan.badge.image;
                }else{
                    var clanName = "N/A"
                    var badge_img_src ="";
                }
                var league_icon = "http://www.clashapi.xyz/images/leagues/"+Player.arena.name.toLowerCase().replace(' ','-')+".png";
                if(Player){
                    i++;
                    return(
                        <tr key = {Player.tag}>
                            <td>
                                {i}
                            </td>
                            <td>
                                #{Player.tag}
                            </td>
                            <td>
                                <Link to={"/profile/"+Player.tag}><b>{Player.name}</b></Link>
                            </td>
                            <td>
                                <b>{Player.trophies}</b>
                            </td>
                            <td>
                                
                               <img height={28} width={25} alt="" src = {badge_img_src}/> {clanName}
                            </td>
                            <td>
                            <img height={28} width={25} alt="" src = {league_icon}/>
                            </td>
                            <td>
                                {Player.previousRank}
                            </td>
                        </tr>
                    );
                }
            });
            return top_player_reducer.top_players;
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

     imageFormatter = (cell, row)=>{
        return "<img src='"+cell+"'/>" ;
      }

    render(){
        return(
            <div>
                {/* <BootstrapTable hover={true} data={this.return_top_player_list(this.props)} pagination>
                   <TableHeaderColumn dataField = "tag" isKey="true" >Player Tag</TableHeaderColumn>
                   <TableHeaderColumn dataField = "name">Name</TableHeaderColumn>
                   <TableHeaderColumn dataField = "trophies">Trophies</TableHeaderColumn>
                   <TableHeaderColumn dataField = "clan.name">Clan</TableHeaderColumn>
                </BootstrapTable> */}
                {!this.props.top_player_reducer.top_players && <ProgressBar bsStyle="success"  active now={100} label={"Loading"} />}
               { this.props.top_player_reducer.top_players &&
                <Table className = "table-custom" responsive>
                    <thead>
			            <tr>
                            <th>Rank</th>
                            <th>Tag</th>
                            <th>Name</th>
                            <th>Trophies</th>
                            <th>Clan</th>
                            <th>Season League</th>
                            <th>Previous Rank</th>
			            </tr>
                        {this.return_top_player_list(this.props)}
		            </thead>
                </Table>}
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
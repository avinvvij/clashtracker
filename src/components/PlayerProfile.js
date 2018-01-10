import React , {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ProgressBar ,Image ,Panel  , Badge , Grid, Row, Tabs , Tab , Col} from 'react-bootstrap';

//action
import {getPlayerProfile} from '../actions'

const player_level_img_link = require('../images/level_star.png');
class PlayerProfile extends Component{


    constructor(props){
        super(props);
        console.log(this.props);
    }

    componentWillReceiveProps(nextProps){
        console.log(nextProps.player_reducer);
    }

    displayPlayerProfile = ({player_reducer})=>{
        if(player_reducer.player_profile){
            console.log(player_reducer.player_profile.name);
            return (
                <div>
                    
                </div>
            )
        }
    }

    componentDidMount(){

    }

    componentWillMount(){
        this.props.getPlayerProfile(this.props.match.params.tag);
    }


    displayUserBattles = ({battles})=>{
        return battles.map((battle)=>{
            return(
                <Col lg={12} md={12} sm={12} xs={12}>
                <br/>
                <div className="panel panel-default">
                    <div className="panel-heading"><Row><Col lg = {4} md = {4} sm = {3} xs = {4}><b className={battle.winner<=0? "battle-title-loss":"battle-title-victory"}>{battle.winner == 0 ? "Draw" : battle.winner < 0 ? "Loss" : "Victory"}</b></Col><Col lg={4} md={4} sm={4} className="team-player-name"><img width={35} height={30} src={require('../images/blue_crown.png')}/> <b className="battle-title-victory"> {battle.teamCrowns} </b>- <b className="battle-title-loss">{battle.opponentCrowns}</b> <img width={35} height={30} src={require('../images/red_crown.png')}/></Col></Row></div>
                    <div className="panel-body">
                        <Row>
                        <Col lg={5} md={5} sm={5} xs={5}>
                            <Row>
                            {battle.team.map((teamPlayer)=>{
                                return(
                                    <Col className = "team-player-name player-custom-col" lg={battle.team.length==2?6:12} md={battle.team.length==2?6:12} sm={battle.team.length==2?6:12}>
                                        <Row>
                                            <Col lg={12} md={12} sm={12} xs={12}><b>{teamPlayer.name}</b></Col>
                                            <Col lg={12} md={12} sm={12} xs={12}> 
                                            {teamPlayer.deck.map((deckItem)=>{
                                            return(
                                                <img width={55} height={60} src={deckItem.icon} />
                                            );
                                        })}</Col>
                                        </Row>
                                    </Col>
                                )
                            })}
                        
                         
                            </Row>
                            </Col>
                            <Col lg={2} md={2} xs={2} sm={2} className ="team-player-name player-custom-col"><b className="battle-title-victory">VS</b></Col>
                            <Col lg={5} md={5} sm={5} xs={5}>
                            <Row>
                            {battle.opponent.map((teamPlayer)=>{
                                return(
                                    <Col className = "team-player-name player-custom-col" lg={battle.team.length==2?6:12} md={battle.team.length==2?6:12} sm={battle.team.length==2?6:12}>
                                        <Row>
                                            <Col lg={12} md={12} sm={12} xs={12}><b>{teamPlayer.name}</b></Col>
                                            <Col lg={12} md={12} sm={12} xs={12}> 
                                            {teamPlayer.deck.map((deckItem)=>{
                                            return(
                                                <img width={55} height={60} src={deckItem.icon} />
                                            );
                                        })}</Col>
                                        </Row>
                                    </Col>
                                )
                            })}
                        
                         
                            </Row>
                            </Col>
                        </Row>
                    </div>
                </div>
                </Col>
            )
        })
    }

    displayChestCycle = ({upcoming})=>{
        if(upcoming){
            var i = 0;
            return upcoming.map((chest)=>{
                var the_chest = chest.toString();
                i++;
                var classname_chest = i==1?"custom-chest-display":"normal-chest-display"; 
                var j = i-1;
                var chest_text = i==1?"Next":"+"+j;
                return(
                    <Col key={i} lg={1} md = {1} sm = {2} xs = {3}>
                        <div><img width = {60} height={60} className = {classname_chest} src={require("../images/"+the_chest+".png")} /> <Badge className="chest-text">{chest_text}</Badge> </div>
                    </Col>
                );
            });
        }
    }

    render(){
        return(
            <div>
                {!this.props.player_reducer.player_profile && <ProgressBar bsStyle="success"  active now={100} label={"Loading"} />}
                {this.props.player_reducer.player_profile && 
                <Panel className="player-panel">
                    <Grid fluid>
                    <Row>
                        <Col sm = {6} md={6} lg={6} ><b className = "player-name">{this.props.player_reducer.player_profile.name}</b></Col>
                    </Row>
                    <Row>
                        <Col  sm={12} md={12} lg={12}><div><img width = {42} height = {42} src = {player_level_img_link} tabIndex = "-1" title = {this.props.player_reducer.player_profile.stats.level}/><b className="player-level-tag">{this.props.player_reducer.player_profile.stats.level} </b></div></Col>
                    </Row>
                    <Row>
                    <Col  sm={12} md={12} lg={12}><h5><img width = {30} height={35} src = {this.props.player_reducer.player_profile.clan.badge.image}/>  {this.props.player_reducer.player_profile.clan.name} ></h5><br/>
                    </Col>
                    </Row>
                    </Grid>
                    <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                        <Tab eventKey={1} title="Profile">
                            <div>
                            <Row>
                            <Col lg = {12} md={12} sm = {12} className="player-custom-col">
                                <h2>Player Statistics...</h2>
                            </Col>
                            </Row>
                            <Row>
                                <Col lg = {3} md={6} sm = {6} xs = {6} className="player-custom-col">
                                    <img width={18} height={18} src={require('../images/trophy_icon.png')} /><b> Trophies:  {this.props.player_reducer.player_profile.trophies}</b>
                                </Col>
                                 <Col lg = {3} md={6} sm = {6} xs = {6} className="player-custom-col">
                                    <img width={18} height={18} src={require('../images/trophy_icon.png')} /><b> Maximum Trophies:  {this.props.player_reducer.player_profile.stats.maxTrophies}</b>
                                </Col>
                                <Col lg = {3} md={6} sm = {6} xs = {6} className="player-custom-col">
                                    <img width={18} height={18} src={require('../images/cards_found_ico.png')} /><b> Cards Found:  {this.props.player_reducer.player_profile.stats.cardsFound}</b>
                                </Col>
                                 <Col lg = {3} md={6} sm = {6} xs = {6} className="player-custom-col">
                                    <img width={18} height={18} src={require('../images/cards_found_ico.png')} /><b> Favorite Card:  {this.props.player_reducer.player_profile.stats.favoriteCard.name} <img src={this.props.player_reducer.player_profile.stats.favoriteCard.icon} width={30} height={33}/></b>
                                </Col>
                                <Col lg = {3} md={6} sm = {6} xs = {6} className="player-custom-col">
                                    <img width={18} height={18} src={require('../images/total_donations_icon.png')} /><b> Total Donations:  {this.props.player_reducer.player_profile.stats.totalDonations}</b>
                                </Col>
                                 <Col lg = {3} md={6} sm = {6} xs = {6} className="player-custom-col">
                                    <img width={18} height={18} src={require('../images/tournament_cards_won_ico.png')} /><b> Tournament Cards Won:  {this.props.player_reducer.player_profile.stats.tournamentCardsWon}</b>
                                </Col>
                                 <Col lg = {3} md={6} sm = {6} xs = {6} className="player-custom-col">
                                    <img width={18} height={18} src={require('../images/crown_icon.png')} /><b> Three Crown Wins:  {this.props.player_reducer.player_profile.stats.threeCrownWins}</b>
                                </Col>
                                <Col lg = {3} md={6} sm = {6} xs = {6} className="player-custom-col">
                                    <img width={18} height={18} src={require('../images/cr_arena_icon.png')} /><b> Arena:  {this.props.player_reducer.player_profile.arena.name} <img src={"http://www.clashapi.xyz/images/leagues/"+this.props.player_reducer.player_profile.arena.name.toLowerCase().replace(' ','-')+".png"} height = {20} width = {18} /></b>
                                </Col>
                            <hr />
                            </Row>
                            
                            {/* Game Statistics */}
                            <Row>
                            <Col lg = {12} md={12} sm = {12} className="player-custom-col">
                                <h2>Game Statistics...</h2>
                            </Col>
                            </Row>
                            <Row>
                                <Col lg = {3} md={6} sm = {6} xs = {6} className="player-custom-col">
                                    <img width={18} height={18} src={require('../images/trophy_icon.png')} /><b> Total Games Played:  {this.props.player_reducer.player_profile.games.total}</b>
                                </Col>
                                 <Col lg = {3} md={6} sm = {6} xs = {6} className="player-custom-col">
                                    <img width={18} height={18} src={require('../images/trophy_icon.png')} /><b> Total Wins:  {this.props.player_reducer.player_profile.games.wins}</b>
                                </Col>
                                <Col lg = {3} md={6} sm = {6} xs = {6} className="player-custom-col">
                                    <img width={18} height={18} src={require('../images/cards_found_ico.png')} /><b> Tournament Games:  {this.props.player_reducer.player_profile.games.tournamentGames}</b>
                                </Col>
                                 <Col lg = {3} md={6} sm = {6} xs = {6} className="player-custom-col">
                                    <img width={18} height={18} src={require('../images/cards_found_ico.png')} /><b> Tournament Cards Won:  {this.props.player_reducer.player_profile.stats.tournamentCardsWon} </b>
                                </Col>
                                <Col lg = {3} md={6} sm = {6} xs = {6} className="player-custom-col">
                                    <img width={18} height={18} src={require('../images/total_donations_icon.png')} /><b> Challenge Cards Won:  {this.props.player_reducer.player_profile.stats.challengeCardsWon}</b>
                                </Col>
                                 <Col lg = {3} md={6} sm = {6} xs = {6} className="player-custom-col">
                                    <img width={18} height={18} src={require('../images/tournament_cards_won_ico.png')} /><b> Challenge Max Wins:  {this.props.player_reducer.player_profile.stats.challengeMaxWins}</b>
                                </Col>
                                 <Col lg = {3} md={6} sm = {6} xs = {6} className="player-custom-col">
                                    <img width={18} height={18} src={require('../images/crown_icon.png')} /><b> Total Draws:  {this.props.player_reducer.player_profile.games.draws}</b>
                                </Col>
                                <Col lg = {3} md={6} sm = {6} xs = {6} className="player-custom-col">
                                    <img width={18} height={18} src={require('../images/cr_arena_icon.png')} /><b> Total Losses:  {this.props.player_reducer.player_profile.games.losses}</b>
                                </Col>
                            </Row>
                            <Row>
                            <Col lg = {12} md={12} sm = {12} className="player-custom-col">
                                <h2>Upcoming Chests...</h2>
                            </Col>
                            </Row>
                            <Row>
                                {this.displayChestCycle(this.props.player_reducer.player_profile.chestCycle)}
                                <Col lg={1} md = {1} sm = {2} xs = {3}>
                                   <div><img width = {60} height={60} className = "normal-chest-display" src={require("../images/giant.png")} /> <Badge className="chest-text">+{this.props.player_reducer.player_profile.chestCycle.giant}</Badge> </div>
                                </Col>
                                <Col lg={1} md = {1} sm = {2} xs = {3}>
                                    <div><img width = {60} height={60} className = "normal-chest-display"  src={require("../images/magical.png")} /> <Badge className="chest-text">+{this.props.player_reducer.player_profile.chestCycle.magical}</Badge> </div>
                                </Col>
                                <Col lg={1} md = {1} sm = {2} xs = {3}>
                                    <div><img width = {60} height={60} className = "normal-chest-display"  src={require("../images/superMagical.png")} /> <Badge className="chest-text">+{this.props.player_reducer.player_profile.chestCycle.superMagical}</Badge> </div>
                                </Col>
                                <Col lg={1} md = {1} sm = {2} xs = {3}>
                                    <div><img width = {60} height={60} className = "normal-chest-display"  src={require("../images/epic.png")} /> <Badge className="chest-text">+{this.props.player_reducer.player_profile.chestCycle.epic}</Badge> </div>
                                </Col>
                                <Col lg={1} md = {1} sm = {2} xs = {3}>
                                    <div><img width = {60} height={60} className = "normal-chest-display"  src={require("../images/legendary.png")} />  <Badge className="chest-text">+{this.props.player_reducer.player_profile.chestCycle.legendary}</Badge> </div>
                                </Col>
                            </Row>
                            </div>
                        </Tab>
                        <Tab eventKey={2} title="Battles">
                            <div>
                                <Grid>
                                    <Row>
                                    {this.displayUserBattles(this.props.player_reducer.player_profile)}                                        
                                    </Row>
                                </Grid>
                            </div>
                        </Tab>
                        <Tab eventKey={3} title="Cards">
                            Tab 3 content
                        </Tab>
                        <Tab eventKey={4} title="Decks">
                            Tab 4 content
                        </Tab>
                </Tabs>
                </Panel>
                }
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        player_reducer: state.top_player_reducer
    }
}

function mapDispatchToProps(Dispatch){
    return bindActionCreators({
        getPlayerProfile: getPlayerProfile
    } , Dispatch);
}

export default connect(mapStateToProps , mapDispatchToProps)(PlayerProfile);
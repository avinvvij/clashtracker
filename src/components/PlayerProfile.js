import React , {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ProgressBar ,Image ,Panel , Grid, Row, Tabs , Tab , Col} from 'react-bootstrap';

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
                                <h4>Player Statistics...</h4>
                            </Col>
                            </Row>
                            <Row>
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
                                    <img width={18} height={18} src={require('../images/cards_found_ico.png')} /><b> Total Donation:  {this.props.player_reducer.player_profile.stats.totalDonations}</b>
                                </Col>
                                 <Col lg = {3} md={6} sm = {6} xs = {6} className="player-custom-col">
                                    <img width={18} height={18} src={require('../images/cards_found_ico.png')} /><b> Tournament Cards Won:  {this.props.player_reducer.player_profile.stats.tournamentCardsWon}</b>
                                </Col>
                            </Row>
                            </div>
                        </Tab>
                        <Tab eventKey={2} title="Battles">
                            Tab 2 content
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
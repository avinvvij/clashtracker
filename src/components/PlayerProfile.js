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
                        <Col sm = {1} md={1} lg={1} className = "custom-col"><b className = "player-name">{this.props.player_reducer.player_profile.name}</b></Col>
                        <Col sm={1} md={1} lg={1}><div><img width = {42} height = {42} src = {player_level_img_link} tabIndex = "-1" title = {this.props.player_reducer.player_profile.stats.level}/><b className="player-level-tag">{this.props.player_reducer.player_profile.stats.level} </b></div></Col>
                    </Row>
                    <Row><h5><img width = {30} height={35} src = {this.props.player_reducer.player_profile.clan.badge.image}/>  {this.props.player_reducer.player_profile.clan.name} ></h5><br/>
                    </Row>
                    </Grid>
                    <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                        <Tab eventKey={1} title="Profile">
                            <div>
                                <h4>Statistics</h4>

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
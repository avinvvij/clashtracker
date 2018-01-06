import React , {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

//action
import {getPlayerProfile} from '../actions'
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
                    {player_reducer.player_profile.name}
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
                Player Profile {this.displayPlayerProfile(this.props)}
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
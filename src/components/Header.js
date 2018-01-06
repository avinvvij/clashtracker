import React , {Component} from 'react';
import {FormControl , Button , DropdownButton , MenuItem,InputGroup,Glyphicon ,NavItem ,FormGroup ,Navbar ,  NavbarBrand , Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom';

class Header extends Component{

    constructor(props){
        super(props);
        this.state = {
            search_place_holder: 'Player Tag #XXXXXX',
            dropdown_title: 'Player',
            player_tag: ''
        }
    }

    onPlayerIdChange = (event)=>{
        console.log(event.target.value);
        this.setState({player_tag: event.target.value});
    }

    playerInputClicked = (event)=>{
        event.preventDefault();
        console.log(this.state.player_tag);
    }

    searchDropDownClicked(id){
        switch(id){
            case 1:
                this.setState({search_place_holder: 'Player Tag #XXXXXX' , dropdown_title: 'Player'});
                break;
            case 2:
                this.setState({search_place_holder: 'Clan Tag #XXXXXX' ,  dropdown_title: 'Clan'});
                break;
            case 3:
                this.setState({search_place_holder: 'Tournament Tag #XXXXXX' ,  dropdown_title: 'Tournament'});
                break;
        }
    }

    render (){
        return(
        <div>
	<Navbar inverse collapseOnSelect className="custom-nav" fixedTop>
		<Navbar.Header>
			<Navbar.Brand>
				<Link to="/">Clash Tracker</Link>
			</Navbar.Brand>
			
            <Navbar.Toggle />
		</Navbar.Header>
            <Nav>
                <Navbar.Form>
                <form onSubmit = {this.playerInputClicked}> 
                    <FormGroup className = "custom-header-form" >
                        <InputGroup>
                    <DropdownButton className="custom-dropdown-button"
					componentClass={InputGroup.Button}
					id="input-dropdown-addon"
					title={this.state.dropdown_title}
				    >
				        <MenuItem key="1" onClick={()=>this.searchDropDownClicked(1)}>Player</MenuItem>
                        <MenuItem key="2" onClick={()=>this.searchDropDownClicked(2)}>Clan</MenuItem>
                        <MenuItem key="3" onClick={()=>this.searchDropDownClicked(3)}>Tournament</MenuItem>
				    </DropdownButton>
				    <FormControl type="text"  onChange = {this.onPlayerIdChange} placeholder={this.state.search_place_holder} />
				        <InputGroup.Button className = "custom-header-input" className="custom-search-button">
					        <Link to="/profile/1"><Button c><Glyphicon glyph="search" /></Button></Link>
				        </InputGroup.Button>
			        </InputGroup>
                    </FormGroup>
                </form>
        </Navbar.Form>
            </Nav>
            
		<Navbar.Collapse>
			<Nav pullRight>
				<NavItem>
                    <Link to = "/topplayers" className="nav-a">
				        Top Players
                    </Link>
				</NavItem>
				<NavItem>
                <Link to = "/topclans" className="nav-a">
                    Top Clans
                </Link>
            </NavItem>
			</Nav>
			
		</Navbar.Collapse>
	</Navbar>

        </div>
        );
    }
}

export default Header;
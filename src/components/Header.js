import React , {Component} from 'react';
import {FormControl , Button , DropdownButton , MenuItem,InputGroup,Glyphicon ,NavItem ,FormGroup ,Navbar ,  NavbarBrand , Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom';

class Header extends Component{

    constructor(props){
        super(props);
        this.state = {
            search_place_holder: 'Player Tag #XXXXXX'
        }
    }

    onPlayerIdChange(event){
        console.log(event.target.value);
    }

    playerInputClicked(event){
        event.preventDefault();
    }

    searchDropDownClicked(id){
        switch(id){
            case 1:
                this.setState({search_place_holder: 'Player Tag #XXXXXX'});
                break;
            case 2:
                this.setState({search_place_holder: 'Clan Tag #XXXXXX'});
                break;
            case 3:
                this.setState({search_place_holder: 'Tournament Tag #XXXXXX'});
                break;
        }
    }

    render (){
        return(
        <div>
	<Navbar inverse collapseOnSelect className="custom-nav">
		<Navbar.Header>
			<Navbar.Brand>
				<div>Clash Tracker</div>
			</Navbar.Brand>
			
            <Navbar.Toggle />
		</Navbar.Header>
            <Nav>
                <Navbar.Form>
        <form> 
            <FormGroup className = "custom-header-form" >
                <InputGroup>
                <DropdownButton
					componentClass={InputGroup.Button}
					id="input-dropdown-addon"
					title="Player"
				>
				<MenuItem key="1" onClick={()=>this.searchDropDownClicked(1)}>Player</MenuItem>
                <MenuItem key="2" onClick={()=>this.searchDropDownClicked(2)}>Clan</MenuItem>
                <MenuItem key="3" onClick={()=>this.searchDropDownClicked(3)}>Tournament</MenuItem>
				</DropdownButton>
				<FormControl type="text" placeholder={this.state.search_place_holder}/>
				<InputGroup.Button>
					<Button><Glyphicon glyph="search" /></Button>
				</InputGroup.Button>
			</InputGroup>
            </FormGroup>
        </form>
        </Navbar.Form>
            </Nav>
            
		<Navbar.Collapse>
			<Nav pullRight>
				<NavItem>
                  <Link to = "/topplayers">
				   Top Players
                  </Link>
				</NavItem>
				<NavItem>
                    <Link to = "/topplayers">
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
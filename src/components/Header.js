import React , {Component} from 'react';
import {ResponsiveEmbed , FormControl , FormGroup ,Navbar , Image, NavbarBrand , Carousel , CarouselItem} from 'react-bootstrap';

class Header extends Component{
    render (){
        return(
        <div>
            <Navbar className="custom-nav" inverse>
                <NavbarBrand>
                    Clash Tracker
                </NavbarBrand>
                <Navbar.Form>
                    <form > 
                        <FormGroup className = "custom-header-form" >
                            <FormControl type='text'  placeholder = "Player Id" />
                        </FormGroup>
                    </form>
                </Navbar.Form>
            </Navbar>
            <Carousel>
                <CarouselItem>
                  <img height = {300} width = {1400} src="https://infinite-tax.com/wp-content/uploads/2014/06/Sunrise-In-The-Sea-Wallpaper-1200x400.png" />  
                </CarouselItem>
            </Carousel>
        </div>
        );
    }
}

export default Header;
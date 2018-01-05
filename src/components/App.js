import React,{Component} from 'react';
import {Carousel , CarouselItem} from 'react-bootstrap';

//components
import Header from './Header'
class App extends Component{

    render(){
        return(
        <div>
            <Carousel>
                <CarouselItem>
                  <img height = {300} width = {1400} src="http://www.amazestone.com/wp-content/uploads/2016/03/Belgium-Black-1200x480.jpg" />  
                </CarouselItem>
            </Carousel>
        </div>
        );
    }

}

export default App;
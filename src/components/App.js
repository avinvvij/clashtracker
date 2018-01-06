import React,{Component} from 'react';
import {Carousel , CarouselItem} from 'react-bootstrap';

class App extends Component{

    render(){
        const image_carousel_item1 = require('../images/carousel_item_electrowiz.png');
        const image_carousel_item2 = require('../images/carousel_item_princess.png');
        return(
        <div>
            <Carousel>
                <CarouselItem>
                  <img src={image_carousel_item1} />  
                  <Carousel.Caption>
				    <h3>Keep A Track Of Your Chest Cycle</h3>
			    </Carousel.Caption>
                </CarouselItem>
                <CarouselItem>
                  <img src={image_carousel_item2} />  
                </CarouselItem>
            </Carousel>
        </div>
        );
    }

}

export default App;
import React,{Component} from 'react';
import {Carousel , CarouselItem , ResponsiveEmbed} from 'react-bootstrap';
import  styles from '../styles/main.css'
import 'loaders.css/src/animations/ball-spin-fade-loader.scss';
class App extends Component{

    render(){
        const image_carousel_item1 = require('../images/carousel_item_electrowiz.png');
        const image_carousel_item2 = require('../images/carousel_item_princess.png');
        return(
        <div>
            <Carousel>
                <CarouselItem>
                  <img width={1400} height = {512} src={image_carousel_item1} />  
                </CarouselItem>
                <CarouselItem>
                  <img width={1400} height = {512} src={image_carousel_item2} />  
                </CarouselItem>
            </Carousel>
        </div>
        );
    }

}

export default App;
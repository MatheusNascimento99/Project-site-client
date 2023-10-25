import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styles from './Carrossel.module.css';
import Arte1 from './image/Arte1.svg';
import Arte2 from './image/Arte2.svg';
import Arte3 from './image/Arte3.svg';


function Carrossel(){
    return(
        <Carousel className = {styles.Carrossel}>
           <Carousel.Item className='imgs'>
                <img src={Arte1} text="First slide"  alt='ERROR' />
                <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img src={Arte2}  text="Second slide" alt='ERROR' />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>

          <Carousel.Item>
          <img src={Arte3} text="Third slide" alt='ERROR' />
          <Carousel.Caption>
  
          </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img src={Arte3} text="Third slide" alt='ERROR' />
          <Carousel.Caption>
  
           </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img src={Arte3} text="Third slide" alt='ERROR' />
          <Carousel.Caption>
  
           </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img src={Arte3} text="Third slide" alt='ERROR' />
          <Carousel.Caption>         
  
          
            
          </Carousel.Caption>
          </Carousel.Item>
          </Carousel>  
    )
}

export default Carrossel;
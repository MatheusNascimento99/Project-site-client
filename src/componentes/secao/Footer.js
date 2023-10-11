import 'bootstrap/dist/css/bootstrap.css';
import styles from './Footer.module.css'
import Carousel from 'react-bootstrap/Carousel';
import Arte1 from '../image/Arte1.svg';
import Arte2 from '../image/Arte2.svg';
import Arte3 from '../image/Arte3.svg';


function Footer (){
    return(
        <footer>
           <Carousel className = {styles.Footer}>
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

        
            <div>
            <h4> Jão Francisco </h4>
            <h4>Todos os direitos reservados</h4>
            <h5>Contatos</h5>
        </div>
        </footer>
        
    )
}

export default Footer


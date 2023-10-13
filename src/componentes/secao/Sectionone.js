import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import styles from './Sectionone.module.css'
import Carousel from 'react-bootstrap/Carousel';
import Arte1 from '../image/Arte1.svg';
import Arte2 from '../image/Arte2.svg';
import pre from '../image/pre.svg';

function Sectionone() {
  return (
    <div className={styles.Sectionone}>
      <img src={pre}></img>
      <div >
      <h1>Prazer, João!</h1>
      <p>	Lorem ipsum cubilia potenti ut sit urna himenaeos, aliquet per litora class euismod praesent, 
        phasellus turpis lacinia tempus fusce feugiat. aptent litora diam elementum dictum gravida nullam
         sodales aliquet class fringilla ante enim ultrices, id inceptos nisl a dui justo commodo aenean 
         interdum laoreet egestas sem. laoreet vitae nostra morbi nam rutrum quisque eros volutpat hac at 
         sollicitudin posuere, imperdiet pellentesque praesent eleifend non est eget dui pretium ligula elit 
         class, aliquam purus elementum eleifend accumsan nibh nunc cursus est taciti mi. eros commodo molestie
          hendrerit class dictumst mauris blandit vel dapibus, blandit posuere lacinia nibh tortor inceptos quisque
           praesent scelerisque fusce, ipsum conubia semper augue tincidunt dolor laoreet a. 
      </p>
      </div>
      
      
    </div>
  );
}

export default Sectionone
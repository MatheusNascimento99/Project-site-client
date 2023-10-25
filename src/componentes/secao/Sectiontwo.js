
import styles from './Sectiontwo.module.css'
import Oriental from '../image/Oriental.jpeg'
import Arte3 from '../image/Arte3.svg'
import cicatrizada from '../image/cicatrizada.jpeg'
import Arte1 from '../image/Arte1.svg'

function Sectiontwo() {
    return(
        <div className={styles.Sectiontwo}>
            <section  >
                <div>
                    <h2>Oriental</h2> 
                    <img src={cicatrizada}/>
                </div>
                <div>
                    <h2>Cicatrizada</h2> 
                    <img src={Oriental}/>
                </div>
                <div>
                    <h2>Old School</h2> 
                    <img src={Arte3}/>
                </div>
                <div>
                    <h2>Conceitos</h2> 
                    <img src={Arte1}/>
                </div>
                    
                        
                   
                   
                   
                
            </section >   
            
            
        </div>
    )
}

export default Sectiontwo
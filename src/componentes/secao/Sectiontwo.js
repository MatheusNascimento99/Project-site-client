
import styles from './Sectiontwo.module.css'
import Oriental from '../image/Oriental.jpeg'

function Sectiontwo() {
    return(
        <div className={styles.Sectiontwo}>
            <section >
                <div >
                    <h2>Oriental</h2>
                    <img src={Oriental}/>
                </div>
                <div >
                    <h2>Cicatrizada</h2>
                    <img src={Oriental}/> 
                </div>
                
            </section >   
            <section className='Total2' >
                <div >
                    <h2>Oriental</h2>
                    <img src={Oriental}/>
                </div>
                <div >
                    <h2>Cicatrizada</h2>
                    <img src={Oriental}/> 
                </div>
                
            </section>  

            
        </div>
    )
}

export default Sectiontwo
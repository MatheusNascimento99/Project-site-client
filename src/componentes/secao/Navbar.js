import styles from './Navbar.module.css'
import { FaFacebook, FaInstagram } from 'react-icons/fa';


function Navbar(){
    return (
        <div className = {styles.Navbar}>
            <ul>
            <h1>João Francisco</h1>
            <li  >
                <a target="_blank" href='https://github.com/MatheusNascimento99'> <FaFacebook size={45} ></FaFacebook></a>
                <a target="_blank" href='https://github.com/MatheusNascimento99'> <FaInstagram size={45} ></FaInstagram></a>
            </li>
            </ul>
            
            <div>
            <a href='https://getbootstrap.com/docs/4.0/components/buttons/'><button type="button" class="btn btn-secondary btn-lg">Início</button></a>
            <a href='https://getbootstrap.com/docs/4.0/components/buttons/'><button type="button" class="btn btn-secondary btn-lg">Estúdio</button></a>
            <a href='https://getbootstrap.com/docs/4.0/components/buttons/'><button type="button" class="btn btn-secondary btn-lg">Sobre mim</button></a>
            <a href='https://getbootstrap.com/docs/4.0/components/buttons/'><button type="button" class="btn btn-secondary btn-lg">Galeria </button></a>
            <a href='https://getbootstrap.com/docs/4.0/components/buttons/'><button type="button" class="btn btn-secondary btn-lg">Orçamentos</button></a>
            <a href='https://getbootstrap.com/docs/4.0/components/buttons/'><button type="button" class="btn btn-secondary btn-lg">Endereço</button></a>
            
            </div>
        </div>
    )
}

export default Navbar
import NuKenzie from '../../Nu Kenzie (1).svg'
import './style.css'

export function Header({ setIsLogin }){

    return(
        <header>
            <div>
                <img src={NuKenzie} alt="" />
                <button onClick={() => setIsLogin(false)}>Inicio</button>
            </div>
        </header>
    )
}
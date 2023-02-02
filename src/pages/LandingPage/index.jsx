import NuKenzie from "../../NuKenzie.svg";
import illustration from "../../illustration.svg";
import './style.css'

export function LandingPage({ setIsLogin }){

    return(
        <main className="page-login">
        <div className="div-container">
          <div className="div-left">
            <img src={NuKenzie} alt="" />
            <h1>Centralize o controle das suas finanças</h1>
            <p>de forma rápida e segura</p>
            <button id="iniciar" onClick={() => setIsLogin(true)}>Iniciar</button>
          </div>

          <div>
            <img src={illustration} alt="" />
          </div>

        </div>
      </main>
    )
}
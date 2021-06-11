//Styles
import './style.css';

//Components
import Formulario from './components/Formulario';

const App = () => { 
  return (
        <main>
          <div className="row align-items-center justify-content-center">
            <div className= "paddcard font bg-white pt-1">   
              <h1 className="text-center font-titulo blue_bld">¡Regístrate!</h1>
              <p className="text-center font-parrafo">Y podrás solicitar tu beca online</p>
              <Formulario />
            </div>
          </div> 
        </main>
  );
}

export default App;

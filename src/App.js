import React, {useState, useEffect} from 'react';
import Pregunta from './components/pregunta';
import Formulario from './components/formulario';
import MostrarGasto from './components/mostrarGasto';
import ControlPresupuesto from './components/controlPresupuesto';

function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [preRestante, setPreRestante] = useState(0);
  // carga condicional de components
  const [mostrarPregunta, setMostrarPregunta] = useState(true)
  
  

  // se almacenará el objeto gasto de formulario.js conteniendo el nombre y precio.. y este pasará a gastos
  const [gasto, setGasto] = useState({})
  const [gastos, setGastos] = useState([])


  const [crearGasto, setCrearGasto] = useState(false)
  // useEfect que actualiza el presupuesto restante del state 'preRestante' asi muestra cuanta plata queda
  useEffect( () =>{
    if(crearGasto){
      // agrega el nuevo presupuesto
      setGastos([
        ...gastos,
       gasto
      ])

      // resta del presupuesto actual (creamos una variable)
      const presupuestoRestante= preRestante - gasto.precio;
      setPreRestante(presupuestoRestante);
      
      
      // resetear a false
      setCrearGasto(false)
    }
  }, [gasto, crearGasto, gastos, preRestante])

  return (
    <div >
      <header>
        <h1>Gasto Semanal</h1>
      </header>

      {/* en caso de que "mostrarPregunta" sea true se mostrará la pregunta inicial .. y cuando se de enter con el dato
      inicial,  aparecerá el formulario y los datos.. el componente Pregunta se ocultará porque no se sará necesario */}
      {
        mostrarPregunta ? 
        ( <Pregunta
              setPresupuesto={setPresupuesto}
              setPreRestante={setPreRestante}
              setMostrarPregunta={setMostrarPregunta}
          />
        ) : 
        ( <div className="contenedor-div">
            <Formulario
              setGasto={setGasto}
              setCrearGasto={setCrearGasto}

              />      

            <div className="contenedor-2">
              <MostrarGasto
                 gastos={gastos}
              /> 
  
              <ControlPresupuesto
                 presupuesto={presupuesto}
                 preRestante={preRestante}
              /> 
            </div>

          </div>
        )  
      }

   
    </div>
  );
}

export default App;

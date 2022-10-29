import logo from './logo.svg';
import './App.css';
import Titulo from './Titulo';
import Titulo2 from './Titulo2';
import Cores from './Cores';
import Tabuada from './Tabuada';

let n = prompt("Digite um número", "5");

function App() {
  return (
    <div>
      <Cores />
      <Titulo titulo="FATEC"
              texto = "Faculdade de Tecnologia de Presidente Prudente"
              link = "https://www.fatec.edu.br" 
      />
      <Titulo2 />
      <Tabuada numero = {n} /> 
    </div>
  );
}

export default App;

import './App.css';
import Mensagem from './Mensagem';
import Header from './Header';
import Exemplo1 from './Exemplo1';
import Exemplo2 from './Exemplo2';
import Exemplo3 from './Exemplo3';
import Exemplo4 from './Exemplo4';
import Container from './Container';

function App() {
  return (
    <div className="App">
      <h1>Atividade 1</h1>
      <Mensagem/>
      <h1>Atividade 2</h1>
      <Header favcol="Amarelo"/>
      <h1>Atividade 3</h1>
      <Exemplo1 />
      <Exemplo2 />
      <Exemplo3 />
      <Exemplo4 favcor="Vermelho"/>
      <br></br>
      <h1>Atividade 4</h1>
      <Container/>
      
    </div>
  );
}

export default App;

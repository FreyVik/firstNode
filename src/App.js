import logo from './assets/images/logo.svg';
import './assets/css/App.css';

//  Custom components imports
import MiComponente from './components/MiComponente';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <section className="componentes">
          <MiComponente/>
        </section>

      </header>
    </div>
  );
}

export default App;
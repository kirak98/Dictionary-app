import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Dictionary from './Dictionary';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dictionary</h1>
       <Dictionary/>
      </header>
      <footer> 
        <a href="https://github.com/kirak98/Dictionary-app" target="_blank" rel="noopener noreferrer"> Open Source </a> coded by Kira King </footer>
    </div>
  );
}

export default App;

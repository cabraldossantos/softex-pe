import './App.css'
import SayMyName from './components/SayMyName'
import Person from './components/Person'

function App() {
  return (
    <div className="App">
      <SayMyName name='Cabral' />
      <p>Segue o seu cartão:</p>
      <div>
        <Person name='Cabral' course='Full Stack' photo='https://via.placeholder.com/150' />
      </div>
      
      <SayMyName name='Maria' />
      <p>Segue o seu cartão:</p>
      <div>
        <Person name='Maria' course='Front End' photo='https://via.placeholder.com/150' />
      </div>
      
      <SayMyName name='Lima Souza' />
      <p>Segue o seu cartão:</p>
      <div>
        <Person name='Lima Souza' course='Back End' photo='https://via.placeholder.com/150' />
      </div>
    </div>
  );
}

export default App;

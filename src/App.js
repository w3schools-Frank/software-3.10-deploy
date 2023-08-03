import './App.css';
import SimpleForm from './components/SimpleForm';

function App() {
  return (
    <div className="App">
      <SimpleForm />

      <h3>{process.env.REACT_APP_MESSAGE}</h3>
      <h1>{process.env.NODE_ENV}</h1>
    </div>
  );
}

export default App;

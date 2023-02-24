import './App.css';
import getMarvel from './services/apiMarvel';

function App() {

  const getTechNews = async (q) =>  {
    const techNews = await getMarvel('comics')
    console.log(techNews)
    return false
  }

  getTechNews()

  return (
    <div className="App">
        <h1>MARVEL</h1>

    </div>
  );
}

export default App;

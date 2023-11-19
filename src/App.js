import './App.css';
import StarRating from './StarRating';

function App() {
  return (
    <div className="App">
    <StarRating max={5} messages={['bad','good','excellent','brilliant','perfect']}/>
    </div>
  );
}

export default App;

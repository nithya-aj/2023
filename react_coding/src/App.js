import StarRating from "./components/StarRating";
import './style.css'

function App() {
  return (
    <StarRating limit={5} rating={2}/>
  );
}

export default App;

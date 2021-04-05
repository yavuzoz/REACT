import './App.css';
import FishContainer from './components/FishContainer';
import fishFarm from "./data/fish-farm"


function App() {
  return (
    <main>
      <FishContainer list={fishFarm} />
    </main>
  );
}

export default App;

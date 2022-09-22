import "./App.css";
import { Main } from "./layout/Main";
import { Header } from './components/Header'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;

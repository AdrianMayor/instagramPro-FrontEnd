import "./App.css";
import { Main } from "./layout/Main";
import { Header } from './layout/Header'
import { Footer } from './layout/Footer'
import { AuthProviderComponent } from './context/authContext'

function App() {
  return (
    <div className="App">
      <AuthProviderComponent>
        <Header></Header>
        <Main></Main>
      </AuthProviderComponent>
      <Footer></Footer>
    </div>
  );
}

export default App;

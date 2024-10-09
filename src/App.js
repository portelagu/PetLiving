import About from "./components/About/About";
import DataInformation from "./components/DataInformation/DataInformation";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";


function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <About/>
      <DataInformation/>
    </div>
  );
}

export default App;

//import logo from './logo.svg';
import './App.css';
// import './Components/HelloWorld'
import HelloWorld from './Components/HelloWorld';
// import Hello from './Components/Hello';
// import CounterExample from './Components/CounterExample';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <p>
    //       Changes are made
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React Now
    //     </a>
    //   </header>
    // </div>
    <div className='App'>
      <Header/>
      <HelloWorld name="Sagar Srinivas"/>
      {/* <img src={logo} className="App-logo" alt="logo" />
      <Hello name="Sagar Srinivas"/>
      <CounterExample/> */}
      <Footer/>
    </div>
  );
}

export default App;

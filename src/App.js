import React from 'react';
import './App.css';
import About from './About';
import Services from './Services';
import Products from './Products';
import Contact from './Contact';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Hello</h1>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/products" component={Products} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home</h1>
  </div>
)
export default App;

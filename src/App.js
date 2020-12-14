import React from 'react';
import './App.css';
import BackgroundTheme from './components/BackgroundTheme';
import Navbar from './components/navbar/NavBar';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import ContactUs from './components/pages/ContactUs';
import About from './components/pages/About';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <BackgroundTheme />
      </header> */}
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/contact-us' component={ContactUs} />
          <Route path='/about' component={About} />
        </Switch>
    </Router>
    </div>
  );
}

export default App;

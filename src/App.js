import React from 'react';
import './App.css';
import BackgroundTheme from './components/BackgroundTheme';
import Navbar from './components/navbar/NavBar';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Video from './components/pages/Video';
import Blog from './components/pages/Blog';
import Contact from './components/pages/Contact';
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
          <Route exact path='/'>
            <Redirect to='/home' />
          </Route>  
          <Route path='/home' component={Home} />
          <Route path='/video' component={Video} />
          <Route path='/blog' component={Blog} />
          <Route path='/contact' component={Contact} />
          <Route path='/about' component={About} />
        </Switch>
    </Router>
    </div>
  );
}

export default App;

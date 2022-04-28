import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Online from './components/Online course/Online';
import Skill from './components/Skills/Skill';
import Grammar from './components/Grammar/Grammar';
import Vocabulary from './components/Vocabulary/Vocabulary';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path='/home'>
            <Home/>
          </Route>
          <Route path='/online'>
            <Online/>
          </Route>
          <Route path='/skill'>
            <Skill/>
          </Route>
          <Route path='/grammar'>
            <Grammar/>
          </Route>
          <Route path='/vocabulary'>
            <Vocabulary/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
        
    </div>
  );
}

export default App;

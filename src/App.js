import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Movie from './pages/movie'
import Cinema from './pages/cinema'
import Me from './pages/me'
import Search from './pages/search'
import './App.css';

class App extends React.PureComponent {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/movie" component={Movie}/>
          <Route path="/cinema" component={Cinema}/>
          <Route path="/me" component={Me}/>
          <Route path="/search" component={Search}/>
        </Switch>
      </Router>
    );
  }
}

export default App;

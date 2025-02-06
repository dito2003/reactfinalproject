// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CharacterDetailPage from './pages/CharacterDetailPage';
import SearchPage from './pages/SearchPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/character/:id" component={CharacterDetailPage} />
        <Route path="/search" component={SearchPage} />
      </Switch>
    </Router>
  );
};

export default App;

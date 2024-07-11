import React from 'react';
// import logo from './logo.svg';
import './App.css';
import TodoFeature from './features/Todo';
import { Route } from 'react-router-dom';
import AlbumFeature from './features/Album';
import { Link } from 'react-router-dom';
import { NavLink, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import NotFound from './components/NotFound';
function App() {

  return (
    <div className="App">
      Header

      <p><Link to="/todos">Todos</Link></p>
      <p><Link to="/albums">Album</Link></p>

      <p><NavLink to="/todos">Todos</NavLink></p>
      <p><NavLink to="/albums">Album</NavLink></p>

      <Switch>
        <Route path="/" component={TodoFeature} exact />
        <Route path="/todo-list" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} />

        <Route component={NotFound} />
      </Switch>
      Footer
    </div>
  );
}

export default App;

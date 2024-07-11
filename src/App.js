import React from 'react';
// import logo from './logo.svg';
import './App.css';
import TodoFeature from './features/Todo';
import { Route } from 'react-router-dom';
import AlbumFeature from './features/Album';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
function App() {

  return (
    <div className="App">
      Header

      <p><Link to="/todos">Todos</Link></p>
      <p><Link to="/albums">Album</Link></p>

      <p><NavLink to="/todos">Todos</NavLink></p>
      <p><NavLink to="/albums">Album</NavLink></p>



      <Route path="/todos" component={TodoFeature} />
      <Route path="/albums" component={AlbumFeature} />

      Footer
    </div>
  );
}

export default App;

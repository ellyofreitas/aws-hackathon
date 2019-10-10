import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './pages/Main';
import Login from './pages/Login';
import NewArchive from './pages/NewArchive';
import NewRoom from './pages/NewRoom';

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/main" exact component={Main} />
      <Route path="/newarchive" exact component={NewArchive} />
      <Route path="/newroom" exact component={NewRoom} />
    </BrowserRouter>
  );
}

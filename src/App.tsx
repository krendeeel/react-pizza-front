import React from 'react';
import { Header } from './components';
import { Route } from 'react-router-dom'
import { Cart, Home } from './pages';

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
      </div>
    </div>
  );
}

export default App;



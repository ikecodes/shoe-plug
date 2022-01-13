import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProducts } from './actions/items';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Home, Shop, Cart } from './pages';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/shop' exact element={<Shop />} />
        <Route path='/Cart' exact element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default App;

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Orders from './pages/Orders';
import Products from './pages/Products';
import Users from './pages/Users';
import SideBar from './components/SideBar/SideBar';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  const location = useLocation();
  const noSideBarRoutes = ['/login', '/signup'];

  return (
    <div className="appon">
      {!noSideBarRoutes.includes(location.pathname) && <SideBar />}
      <div className="content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/products' element={<Products />} />
          <Route path='/users' element={<Users />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </div>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;

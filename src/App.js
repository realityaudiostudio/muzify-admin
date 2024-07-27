import React from 'react'
import SideBar from './components/SideBar/SideBar';
import './App.css';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div>
      <div className="appon">
      <SideBar></SideBar>
      <Dashboard></Dashboard>
      </div>
    </div>
  )
}

export default App
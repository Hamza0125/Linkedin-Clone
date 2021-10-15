import React from 'react';
import './App.css'
import Header from './components/Header';
import SideBar from './components/SideBar';
import Feeds from './components/Feeds';

function App() {
  return (
    <div className="App">
     <Header />
     
     {/* SideBar */}

     <div className="app_body"> 
       <SideBar />
       {/* Feeds-Post */}
     <div className="display_feed">
       <Feeds />
     </div>
     
     </div>

     
    </div>
  );
}

export default App;

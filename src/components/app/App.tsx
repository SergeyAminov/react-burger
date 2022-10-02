import React from 'react';
import Navbar from '../nav/navbar';
import appStyle from './App.module.css';

function App() {
  return (
    <div className="App">
      <header className={appStyle.header}>
          <Navbar/>
      </header>
      <main>

      </main>
    </div>
  );
}

export default App;

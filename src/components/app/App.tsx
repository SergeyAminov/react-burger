import React from 'react';
import BurgerIngredients from '../burger-ingredients/burger-ingredinets';
import Navbar from '../nav/navbar';
import appStyle from './App.module.css';

function App() {
  return (
    <div className={appStyle.App}>
      <header className={appStyle.header}>
          <Navbar/>
      </header>
      <main>
          <BurgerIngredients/>
      </main>
    </div>
  );
}

export default App;

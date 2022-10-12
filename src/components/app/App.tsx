import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import AppHeader from '../app-header/app-header';
import appStyle from './App.module.css';

function App() {
  return (
    <div className={appStyle.App}>
      <header className={appStyle.header}>
          <AppHeader/>
      </header>
      <main>
          <BurgerIngredients/>
      </main>
    </div>
  );
}

export default App;

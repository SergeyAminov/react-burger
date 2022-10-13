import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import AppHeader from '../app-header/app-header';
import appStyle from './app.module.css';
import BurgerConstructor from '../burger-constructor/burger-constructor';

function App() {
  return (
    <div className={appStyle.App}>
      <AppHeader/>
      <main>
          <BurgerIngredients/>
          <BurgerConstructor/>
      </main>
    </div>
  );
}

export default App;

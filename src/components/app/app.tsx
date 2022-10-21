import { useState, useEffect } from 'react';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import AppHeader from '../app-header/app-header';
import appStyle from './app.module.css';
import BurgerConstructor from '../burger-constructor/burger-constructor';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [data, setData] = useState([]);
  const [visibleModal, setVisibleModal] = useState(false);

  const handleOpenModal = () => {
    setVisibleModal(true);
  }

  const handleCloseModal = () => {
    setVisibleModal(false);
  }

  useEffect(() => {
    const getIngredients = async () => {
      try {
        setIsLoading(true);
        setHasError(false);
        const res = await fetch('https://norma.nomoreparties.space/api/ingredients');
        const data = await res.json();
        setData(data.data);
        setIsLoading(false);
      } catch(err) {
        setHasError(true);
      }
    };
    
    getIngredients();
  }, []);

  return (
    <div className={appStyle.App}>
      <AppHeader/>
      <main>
          {isLoading && <span className={`${appStyle.info} mt-2`}>Загрузка...</span>}
          {hasError && <span className={`${appStyle.info} mt-2`}>Произошла ошибка</span>}
          {
            !isLoading && !hasError && data.length && 
            <BurgerIngredients
              ingredients={data}
              visibleModal={visibleModal}
              onOpen={handleOpenModal}
              onClose={handleCloseModal}/>
          }
          {
            !isLoading && !hasError && data.length && 
            <BurgerConstructor 
              ingredients={data}
              visibleModal={visibleModal}
              onOpen={handleOpenModal}
              onClose={handleCloseModal}/>
          }
      </main>
    </div>
  );
}

export default App;

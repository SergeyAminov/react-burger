import { useState, useEffect } from 'react';
import { OrderIngredientsContext, TotalPriceContext } from '../../services/appContext';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import AppHeader from '../app-header/app-header';
import appStyle from './app.module.css';
import BurgerConstructor from '../burger-constructor/burger-constructor';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [data, setData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(2510);
  const [orderIngredients, setOrderIngredients] = useState([]);

  useEffect(() => {
    const getIngredients = async () => {
      try {
        setIsLoading(true);
        setHasError(false);
        const res = await fetch('https://norma.nomoreparties.space/api/ingredients');
        if (res.ok){
          const data = await res.json();
          setData(data.data);
          setIsLoading(false);
        }
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
          { !isLoading && !hasError && data.length && 
            <>
              <OrderIngredientsContext.Provider value={{ orderIngredients, setOrderIngredients }}>
                <BurgerIngredients ingredients={data}/>
                <TotalPriceContext.Provider value={{ totalPrice, setTotalPrice }}>
                  <BurgerConstructor bunData={data[0]}/> 
                </TotalPriceContext.Provider>
              </OrderIngredientsContext.Provider>
            </>
          }
      </main>
    </div>
  );
}

export default App;

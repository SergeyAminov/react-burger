import { useState, useEffect } from 'react';
import { BurgerContext, OrderIngredientsContext, TotalPriceContext } from '../../services/appContext';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import AppHeader from '../app-header/app-header';
import appStyle from './app.module.css';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import { BASE_URL } from '../../services/constants';
import request from '../../utils/request';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [data, setData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [orderIngredients, setOrderIngredients] = useState([]);

  useEffect(() => {
    const getIngredients = async () => {
      try {
        setIsLoading(true);
        setHasError(false);
        const res = await request(`${BASE_URL}/ingredients`);
        setData(res.data);
        setIsLoading(false);
      } catch(err) {
        setHasError(true);
      }
    };
    
    getIngredients();
  }, []);

  return (
    <BurgerContext.Provider value={{data}}>
      <div className={appStyle.App}>
        <AppHeader/>
        <main>
            {isLoading && <span className={`${appStyle.info} mt-2`}>Загрузка...</span>}
            {hasError && <span className={`${appStyle.info} mt-2`}>Произошла ошибка</span>}
            { !isLoading && !hasError && data.length && 
              <OrderIngredientsContext.Provider value={{ orderIngredients, setOrderIngredients }}>
                <BurgerIngredients/>
                <TotalPriceContext.Provider value={{ totalPrice, setTotalPrice }}>
                  <BurgerConstructor bunData={data[0]}/> 
                </TotalPriceContext.Provider>
              </OrderIngredientsContext.Provider>
            }
        </main>
      </div>
    </BurgerContext.Provider>
  );
}

export default App;

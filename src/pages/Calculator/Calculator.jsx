import { useState } from 'react'
import { CALCULATOR_ROUTES } from '../../constants/calculatorRoutes-expeditingPrices'
import './Calculator.scss'



export default function Calculator() {
  const [routeId, setRouteId] = useState(CALCULATOR_ROUTES[0].id);
  const [weight, setWeight] = useState('');
  const [volume, setVolume] = useState('');



  const route = (CALCULATOR_ROUTES.find((r) => r.id === Number(routeId)));
  
  console.log(routeId);
  


  const weigthNum = parseFloat(String(weight).replace(',', '.')) || 0;
  const volumeNum = parseFloat(String(volume).replace(',', '.')) || 0;
  // console.log(route[0].minSum)


  const byWeight = (route?.pricePerKg ?? 0) * weigthNum;
  const byVolume = (route?.pricePerM3 ?? 0) * volumeNum;


  
//   Тернарный оператор
  const cost = route ? Math.max(byVolume, byWeight, route.minSum) : 0;
  const costFormatted = cost > 0 ? Math.round(cost).toLocaleString('ru-RU') : '—';
  const timeDelivery = route?.timeDelivery ?? '—';

  // console.log(route.minSum);
  // console.log(route.minSum);
  

  return (
    <>
      <div className='calculator-page container'>
        <h1>Калькулятор стоимости</h1>
        <p className='calculator-page__p'>Ориентировочный расчёт стоимости перевозки. Итоговая сумма согласовывается при оформлении заявки. </p>

        <div className='calculator-forms form'>

          {/* ФОРМА ОДИН */}
          <label  >
            <span>Маршрут</span>

          {/* value значение айди(первый прописан в useState по умолчанию) */}
          {/* onchange на изменения - функция {"e" в этой функции это объект события (element)  => запускается следующая функция которая обращается к value и меняет его валью } */}
            <select
            value={routeId}
            onClick={console.log(routeId)}
            onChange={(e) => setRouteId(Number(e.target.value))}
            
            >
            

            {CALCULATOR_ROUTES.map((r) => (
              <option key={r.id} value={r.id}>
                {r.name}
              </option>
            ))}
            </select>
          </label>

          <label>
            <span>
              Вес груза (кг)
            </span>
            <input 
            className='calcilator-form-2__input'
            type="number" 
            placeholder='Например, 100'
            min={0}
            step={1}
            value={weight} 
            onChange={(e) => setWeight(e.target.value)} />
          </label>

          <label>
            <span>Объем груза (м³)</span>
            <input 
            className='calcilator-form-3__input'
            type="number"
            placeholder='Например, 20'
            min={0}
            step={0.1}
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
            />
          </label>

          <div>
            <p>Стоимост перевозки: <span className='blue-p'>~{costFormatted} руб</span></p>
            <p>Время доставки: <span>{timeDelivery}</span></p>
          </div>
        </div>
      </div>
    </>
  )

}

import './Price.scss'
import { ALL_ROUTES } from '../../constants/calculatorRoutes-expeditingPrices'


export default function Price() {
  return (
    <div className='price-page container'>
      <h1>Тарифы на перевозку</h1>
      <p>Уточняйте итоговую стоимость и условия по телефонам или через онлайн-заявку.</p>

      <div className='table-main-route'>
        <h2>Основные маршруты</h2>
        <div className='table'>
          <table>
            <thead>
              <tr>
                <th>Маршрут</th>
                <th>Тариф</th>
              </tr>
            </thead>
            <tbody>
              {ALL_ROUTES.map((i) => (
                <tr>
                  <td key={i.id}>{i.name} {}</td>
                  <td key={i.id}>{i.pricePerKg}Р/КГ, {i.pricePerM3}Р/М³</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

import { ALL_ROUTES } from '../../constants/calculatorRoutes-expeditingPrices'
import './Application.scss'


export default function Application() {



  return (
    <div>
      <h1>Онлайн заявка</h1>
      <p>Заполните форму — мы свяжемся с вами для уточнения деталей и расчёта стоимости.</p>

      <div className='aplic-form form'>

        <label>
          <span>Отправитель</span>
          <input
          type='text'
          placeholder='ФИО или Компания'
          />
        </label>

        <label>
          <span>Телефон отправителя</span>
          <input
          type='tel'
          placeholder='+7(___)___-__-__'
          ></input>
        </label>

        <label>
          <span>Получатель</span>
          <input
          type='text'
          placeholder='ФИО или Компания'
          ></input>
        </label>

        <label>
          <span>Телефон получателя</span>
          <input
          type='tel'
          placeholder='+7(___)___-__-__'
          ></input>
        </label>

        <label>
          <span>Выберите маршрут</span>
          <select>
            <option>Выберите направление</option>
            {ALL_ROUTES.map((item) => (
              <option>{item.name}</option>
            ))}
          </select>       
        </label>

        <label>
          <span>Объем груза (м³)</span>
          <input
          placeholder='Ориентировочно'
          type='text'
          ></input>
        </label>
        
        <label>
          <span>Комментарий</span>
          <textarea 
            rows={4}
            placeholder='Описание груза, сроки, пожелания'>
          </textarea>

        </label>

        <button className='send-btn'>Отправить заявку</button>
      </div>
    </div>
  )
}

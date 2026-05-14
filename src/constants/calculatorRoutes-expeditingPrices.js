export const ALL_ROUTES = [
  { id: 1, name: 'Москва – Усинск', pricePerKg: 36, pricePerM3: 7200, minSum: 1400, timeDelivery: '3 дня' },
  { id: 2, name: 'Усинск – Москва', pricePerKg: 16, pricePerM3: 3200, minSum: 1400, timeDelivery: '3 дня' },
  { id: 3, name: 'Москва – Печора', pricePerKg: 36, pricePerM3: 7200, minSum: 1400, timeDelivery: '3 дня' },
  { id: 4, name: 'Печора – Москва', pricePerKg: 16, pricePerM3: 3200, minSum: 1400, timeDelivery: '3 дня' },
  { id: 5, name: 'Москва – Нарьян-мар', pricePerKg: 16, pricePerM3: 3200, minSum: 1400, timeDelivery: '5 дней' },
];

export const CALCULATOR_ROUTES = ALL_ROUTES.filter((r) => r.id !== 5)

export const USINSK_EXPEDITING = [
  { weight: '0-45', volume: '0-0,3', price: '2000 Р'},
  { weight: '46–100', volume: '0,31–0,5', price: '2500 Р' },
  { weight: '201–500', volume: '0,51–1,0', price: '3000 Р' },
  { weight: '291–500', volume: '1,01–2,5', price: '4500 Р' },
  { weight: '501–1000', volume: '2,51–5,0', price: '6500 Р' },
  { weight: '1001–1500', volume: '5,01–7,5', price: '6500 Р' },
  { weight: '1501–3000', volume: '7,51–15,0', price: '9500 Р' },
  { weight: 'Более 3000', volume: '15,01+', price: 'Договорная' },
]

export const MOSCOW_EXPEDITING = [
  { zone: 'Москва в черте МКАД', col1: '2000 Р', col2: '4250 Р', col3: 'Договорная' },
  { zone: 'За МКАД до 30 км', col1: '2500 Р', col2: '4500 Р', col3: 'Договорная' },
  { zone: 'За МКАД далее 30 км', col1: '2500 Р + 38 Р/км', col2: '4500 Р + 38 Р/км', col3: 'Договорная' },
];

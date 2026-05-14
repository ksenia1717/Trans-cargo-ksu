import './Header.scss';




export default function Header(menuOpen, onMenuToggle) {
    const phoneData = [
        {id: 1, phone:'+7(926)916-60-57' },
        {id: 2, phone:'+7(968)026-11-99' },
        {id: 3, phone: '+7(968)464-21-29' },
        {id: 4, email: 'trcargo-a@mail.ru' },
    ]

  return (
    <header className='site-header'>
        <div className='header-inner'>
            <div className='logo'></div>

            <div className="company-name">
                <p>ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ</p>
                <h1>ТРАНСКАРГО-А</h1>
            </div>

            <ul className='phone-list'>
                {phoneData.map((item) =>(
                    <li key={item.id} className={item.phone ? 'phone-list__phone' : 'phone-list__email'}>
                        <a href={item.phone ? `tel:${item.phone}` : `mailto: ${item.phone}`}>
                            {item.phone || item.email}
                        </a>
                    </li>
                ))}
            </ul>

            <button
            type='button'
            className={`burger ${menuOpen ? 'nav-open' : ''}`}
            aria-label={menuOpen ? 'Открыть меню' : 'Закрыть меню'}
            aria-expanded={menuOpen}
            onClick={onMenuToggle}>
            
                <span className="burger__line"></span>
                <span className="burger__line"></span>
                <span className="burger__line"></span>
            </button>

        </div>
    </header>
  )
}



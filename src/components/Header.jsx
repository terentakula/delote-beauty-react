import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { asset } from '../utils/asset';

const navItems = [
  ['/', 'Главная'],
  ['/masters', 'Мастера'],
  ['/cosmetics', 'Косметика'],
  ['/promotions', 'Акции'],
  ['/reviews', 'Отзывы'],
  ['/contacts', 'Контакты'],
];

export default function Header({ solid = false }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('no-scroll', menuOpen || contactOpen);
    return () => document.body.classList.remove('no-scroll');
  }, [menuOpen, contactOpen]);

  return (
    <>
      <header className={`site-header ${solid || scrolled ? 'site-header--solid' : ''}`}>
        <div className="container header-inner">
          <a className="social-link" href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noreferrer">
            <img src={asset("/images/svg/inst.svg")} alt="" />
          </a>

          <button className="menu-toggle" onClick={() => setMenuOpen(true)} aria-label="Открыть меню">
            <span /><span />
          </button>

          <nav className="desktop-nav" aria-label="Основная навигация">
            {navItems.slice(0, 3).map(([to, label]) => <NavLink key={to} to={to}>{label}</NavLink>)}
            <Link to="/" className="header-logo" aria-label="Delote Beauty">
              <img src={asset('images/svg/logo.svg')} alt="Delote Beauty" />
            </Link>
            {navItems.slice(3).map(([to, label]) => <NavLink key={to} to={to}>{label}</NavLink>)}
          </nav>

          <button className="contacts-toggle" onClick={() => setContactOpen(true)} aria-label="Открыть контакты">
            <span /><span /><span />
          </button>
        </div>
      </header>

      <div className={`drawer-backdrop ${menuOpen || contactOpen ? 'is-open' : ''}`} onClick={() => { setMenuOpen(false); setContactOpen(false); }} />

      <aside className={`side-drawer side-drawer--left ${menuOpen ? 'is-open' : ''}`}>
        <button className="drawer-close" onClick={() => setMenuOpen(false)} aria-label="Закрыть">×</button>
        <p className="eyebrow">Menu</p>
        <nav className="mobile-nav">
          {navItems.map(([to, label], index) => (
            <NavLink key={to} to={to} onClick={() => setMenuOpen(false)} style={{ '--i': index }}>{label}</NavLink>
          ))}
        </nav>
      </aside>

      <aside className={`side-drawer side-drawer--right ${contactOpen ? 'is-open' : ''}`}>
        <button className="drawer-close" onClick={() => setContactOpen(false)} aria-label="Закрыть">×</button>
        <p className="eyebrow">Delote Beauty</p>
        <h2>Красота начинается с внимания к деталям.</h2>
        <div className="drawer-section">
          <strong>Контакты</strong>
          <a href="tel:+78121234567">+7 (812) 123-45-67</a>
          <a href="tel:+79111234567">+7 (911) 123-45-67</a>
          <p>Новоостровский проспект, дом 36 лит. С</p>
        </div>
        <div className="drawer-section">
          <strong>Режим работы</strong>
          <p>10:00–21:00 · Пн–Пт</p>
          <p>11:00–20:00 · Сб–Вс</p>
        </div>
        <Link className="text-link" to="/contacts" onClick={() => setContactOpen(false)}>Записаться →</Link>
      </aside>
    </>
  );
}

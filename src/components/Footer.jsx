import { Link } from "react-router-dom";
import { asset } from "../utils/asset";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img src={asset("images/svg/logo.svg")} alt="Delote Beauty" />
          <p>
            Салон красоты на Крестовском острове. Современный сервис,
            профессиональные мастера и внимание к деталям.
          </p>
        </div>
        <div>
          <p className="footer-title">Навигация</p>
          <Link to="/masters">Мастера</Link>
          <Link to="/cosmetics">Косметика</Link>
          <Link to="/promotions">Акции</Link>
        </div>
        <div>
          <p className="footer-title">Контакты</p>
          <a href="tel:+78121234567">+7 (812) 123-45-67</a>
          <p>Новоостровский пр., 36</p>
          <p>Санкт-Петербург</p>
        </div>
        <div>
          <p className="footer-title">Режим работы</p>
          <p>Пн–Пт · 10:00–21:00</p>
          <p>Сб–Вс · 11:00–20:00</p>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 Delote Beauty</span>
        <span>Beauty salon · Krestovsky</span>
      </div>
    </footer>
  );
}

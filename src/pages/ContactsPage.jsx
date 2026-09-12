import { useState } from 'react';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';

export default function ContactsPage(){
  const [sent,setSent]=useState(false);
  const submit=(e)=>{e.preventDefault();setSent(true);e.currentTarget.reset();};
  return <><PageHero eyebrow="Contact" title="Контакты и запись" text="Расскажите, какая услуга вас интересует. Мы свяжемся с вами и подберём удобное время." image="/images/welcome.jpg"/>
  <main className="section"><div className="container contact-grid"><Reveal className="contact-info"><p className="eyebrow">Visit us</p><h2>Крестовский остров</h2><p>Новоостровский проспект, дом 36 лит. С<br/>Санкт-Петербург</p><a href="tel:+78121234567">+7 (812) 123-45-67</a><a href="tel:+79111234567">+7 (911) 123-45-67</a><div className="schedule"><span>Пн–Пт</span><strong>10:00–21:00</strong><span>Сб–Вс</span><strong>11:00–20:00</strong></div></Reveal>
  <Reveal className="booking-form-wrap" delay={100}><form className="booking-form" onSubmit={submit}><label>Ваше имя<input name="name" required placeholder="Анна"/></label><label>Телефон<input name="phone" required placeholder="+7 999 000-00-00"/></label><label>Услуга<select name="service"><option>Парикмахерские услуги</option><option>Маникюр</option><option>Педикюр</option><option>Косметология</option><option>Эстетист по телу</option><option>Визаж</option></select></label><label>Комментарий<textarea name="message" rows="4" placeholder="Желаемая дата или мастер"/></label><button className="button button--gold" type="submit">Отправить заявку</button>{sent&&<p className="form-success">Заявка принята. Демо-форма пока не подключена к серверу.</p>}</form></Reveal></div></main><Footer/></>;
}

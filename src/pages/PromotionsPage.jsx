import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';

const promos = [
  ['Первое знакомство', '−15%', 'Скидка на первый визит к выбранному мастеру.'],
  ['Beauty day', '2+1', 'Три процедуры в один день — третья по специальному предложению.'],
  ['Для двоих', '−10%', 'Приходите вместе и получите скидку на услуги в один день.'],
];
export default function PromotionsPage(){return <><PageHero eyebrow="Special offers" title="Акции" text="Небольшие поводы попробовать новое и познакомиться с нашими мастерами." image="/images/products/product1.jpg"/><main className="section"><div className="container promo-grid">{promos.map(([title,badge,text],i)=><Reveal className="promo-card" key={title} delay={i*70}><span className="promo-badge">{badge}</span><p className="eyebrow">Delote offer</p><h2>{title}</h2><p>{text}</p><a href="tel:+78121234567" className="text-link">Узнать детали →</a></Reveal>)}</div></main><Footer/></>}

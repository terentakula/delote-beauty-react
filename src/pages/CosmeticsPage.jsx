import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';

const brands = [
  ['Kevin Murphy', 'Профессиональный уход за волосами и укладка.'],
  ['Oribe', 'Премиальные формулы для волос и кожи головы.'],
  ['Alterna', 'Уход с акцентом на восстановление и качество волос.'],
  ['Aldo Coppola', 'Итальянская эстетика и салонные ритуалы.'],
];
export default function CosmeticsPage(){return <><PageHero eyebrow="Care" title="Косметика" text="Бренды и профессиональные продукты, которые мы используем в работе и рекомендуем для домашнего ухода." image="/images/products/product6.jpg"/><main className="section"><div className="container brand-cards">{brands.map(([name,text],i)=><Reveal className="brand-card" key={name} delay={i*60}><span>0{i+1}</span><h2>{name}</h2><p>{text}</p></Reveal>)}</div></main><Footer/></>}

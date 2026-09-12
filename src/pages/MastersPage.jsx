import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import { masters } from '../data/content';

export default function MastersPage() {
  return <><PageHero eyebrow="Team" title="Мастера" text="Специалисты, для которых техника важна так же, как чувство формы, цвета и индивидуальности." image="/images/works/work-6.jpg" />
    <main className="section"><div className="container"><div className="masters-grid">
      {masters.map((master, index) => <Reveal className="master-card" key={master.name} delay={index * 80}><img src={master.image} alt={master.name} /><div><p>{master.role}</p><h2>{master.name}</h2><span>Стаж · 5+ лет</span></div></Reveal>)}
    </div></div></main><Footer /></>;
}

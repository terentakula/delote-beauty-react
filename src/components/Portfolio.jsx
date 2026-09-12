import { useMemo, useState } from 'react';
import { works } from '../data/content';
import Reveal from './Reveal';

const filters = ['Все', 'Парикмахерские услуги', 'Маникюр', 'Педикюр'];

export default function Portfolio() {
  const [active, setActive] = useState('Все');
  const filtered = useMemo(() => active === 'Все' ? works : works.filter((item) => item.category === active), [active]);

  return (
    <section className="section portfolio" id="works">
      <div className="container">
        <Reveal className="section-heading section-heading--center">
          <p className="eyebrow">Portfolio</p>
          <h2>Наши работы</h2>
        </Reveal>
        <Reveal className="filters" delay={80}>
          {filters.map((filter) => (
            <button key={filter} className={active === filter ? 'is-active' : ''} onClick={() => setActive(filter)}>
              {filter}
            </button>
          ))}
        </Reveal>
        <div className="portfolio-grid">
          {filtered.map((item, index) => (
            <article className="portfolio-card" key={`${item.image}-${active}`} style={{ '--card-index': index }}>
              <img src={item.image} alt={item.category} />
              <div className="portfolio-overlay"><span>{item.category}</span><b>↗</b></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

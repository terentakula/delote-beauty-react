import Header from './Header';

export default function PageHero({ eyebrow, title, text, image = '/images/welcome.jpg' }) {
  return (
    <>
      <Header />
      <section className="page-hero" style={{ '--page-image': `url(${image})` }}>
        <div className="page-hero-noise" />
        <div className="container page-hero-content">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          {text && <p className="page-hero-text">{text}</p>}
        </div>
      </section>
    </>
  );
}

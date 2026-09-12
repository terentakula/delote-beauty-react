import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Portfolio from "../components/Portfolio";
import Reveal from "../components/Reveal";
import { reviews, services } from "../data/content";
import { asset } from "../utils/asset";

export default function HomePage() {
  const scrollToServices = () =>
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="site-shell">
      <Header />
      <main>
        <section className="hero">
          <div className="hero-media" />
          <div className="hero-shade" />
          <div className="hero-orb hero-orb--one" />
          <div className="hero-orb hero-orb--two" />
          <div className="container hero-content">
            <p className="hero-kicker">Saint Petersburg · Krestovsky</p>
            <h1>
              <span>Салон красоты</span>
              <em>Delote Beauty</em>
            </h1>
            <p className="hero-subtitle">
              Пространство, где профессиональный уход встречается с эстетикой и
              спокойным ритмом.
            </p>
            <div className="hero-actions">
              <Link className="button button--gold" to="/contacts">
                Записаться
              </Link>
              <button
                className="button button--ghost"
                onClick={scrollToServices}
              >
                Услуги
              </button>
            </div>
          </div>
          <button className="scroll-indicator" onClick={scrollToServices}>
            <span className="mouse">
              <i />
            </span>
            <span>Прокрутите вниз</span>
          </button>
        </section>

        <section className="section intro-section">
          <div className="container intro-grid">
            <Reveal className="quote-mark">“</Reveal>
            <Reveal className="intro-copy" delay={70}>
              <p className="eyebrow">Delote philosophy</p>
              <h2>Красота без лишнего шума.</h2>
              <p>
                Мы соединяем сильную экспертизу мастеров, современные техники и
                сервис, в котором всё продумано заранее. Вам остаётся только
                выбрать время для себя.
              </p>
            </Reveal>
            <Reveal className="intro-stat" delay={150}>
              <strong>6</strong>
              <span>направлений ухода</span>
              <strong>10+</strong>
              <span>лет эстетики и сервиса</span>
            </Reveal>
          </div>
        </section>

        <section className="section services-section" id="services">
          <div className="container">
            <Reveal className="section-heading">
              <p className="eyebrow">Services</p>
              <h2>Наши услуги</h2>
              <p>
                От точной формы и цвета до комплексного ухода за лицом и телом.
              </p>
            </Reveal>
            <div className="services-grid">
              {services.map((service, index) => (
                <Reveal
                  className="service-card"
                  key={service.title}
                  delay={index * 60}
                >
                  <div className="service-image-wrap">
                    <img src={service.image} alt={service.title} />
                    <span>{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="service-card-meta">
                    <p>{service.tag}</p>
                    <h3>{service.title}</h3>
                    <span className="service-arrow">↗</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="brands-section">
          <div className="container brands-row">
            {["kevin.svg", "oribe.svg", "alter.svg", "aldoCoppola.svg"].map(
              (logo) => (
                <Reveal key={logo} className="brand-logo">
                  <img src={asset(`images/svg/${logo}`)} alt="Партнёр бренда" />
                </Reveal>
              ),
            )}
          </div>
        </section>

        <Portfolio />

        <section className="section experience-section">
          <div className="container experience-grid">
            <Reveal className="experience-image">
              <img
                src={asset('images/products/product4.jpg')}
                alt="Интерьер и уход Delote Beauty"
              />
            </Reveal>
            <Reveal className="experience-copy" delay={100}>
              <p className="eyebrow">The experience</p>
              <h2>Уход, который ощущается как персональный ритуал.</h2>
              <p>
                Мы не строим сервис вокруг спешки. Подбираем процедуру, мастера
                и ритм визита так, чтобы результат выглядел естественно и
                подходил именно вам.
              </p>
              <Link className="text-link" to="/masters">
                Познакомиться с мастерами →
              </Link>
            </Reveal>
          </div>
        </section>

        <section className="section reviews-preview">
          <div className="container">
            <Reveal className="section-heading section-heading--center">
              <p className="eyebrow">Reviews</p>
              <h2>Что говорят гости</h2>
            </Reveal>
            <div className="review-grid">
              {reviews.map((review, index) => (
                <Reveal
                  className="review-card"
                  key={review.name}
                  delay={index * 70}
                >
                  <span className="review-quote">“</span>
                  <p>{review.text}</p>
                  <strong>{review.name}</strong>
                </Reveal>
              ))}
            </div>
            <Reveal className="center-link">
              <Link className="text-link" to="/reviews">
                Все отзывы →
              </Link>
            </Reveal>
          </div>
        </section>

        <section className="booking-cta">
          <div className="booking-bg" />
          <div className="container booking-content">
            <Reveal>
              <p className="eyebrow">Appointment</p>
              <h2>Выберите время для себя.</h2>
              <p>
                Оставьте заявку — администратор уточнит услугу, мастера и
                удобное время.
              </p>
              <Link className="button button--gold" to="/contacts">
                Записаться в салон
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

import Header from "./Header";
import { asset } from "../utils/asset";

export default function PageHero({
  eyebrow,
  title,
  text,
  image = "images/welcome.jpg",
}) {
  const imageUrl = asset(image);

  return (
    <>
      <Header />

      <section
        className="page-hero"
        style={{ "--page-image": `url(${imageUrl})` }}
      >
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

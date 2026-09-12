import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import { reviews } from '../data/content';

export default function ReviewsPage(){return <><PageHero eyebrow="Guests" title="Отзывы" text="Нам важно не только качество результата, но и то, как вы чувствуете себя во время визита." image="/images/works/work-3.jpg"/><main className="section"><div className="container reviews-list">{[...reviews,...reviews].map((review,i)=><Reveal className="review-row" key={`${review.name}-${i}`} delay={(i%3)*60}><span>0{i+1}</span><blockquote>“{review.text}”</blockquote><strong>{review.name}</strong></Reveal>)}</div></main><Footer/></>}

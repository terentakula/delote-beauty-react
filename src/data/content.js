import { asset } from '../utils/asset';


export const services = [
  { title: 'Парикмахерские услуги', image: asset('/images/products/product1.jpg'), tag: 'Hair' },
  { title: 'Маникюр', image: asset('/images/products/product2.jpg'), tag: 'Nails' },
  { title: 'Педикюр', image: ('/images/products/product3.jpg'), tag: 'Care' },
  { title: 'Косметология', image: ('/images/products/product4.jpg'), tag: 'Face' },
  { title: 'Эстетист по телу', image: ('/images/products/product5.jpg'), tag: 'Body' },
  { title: 'Визаж', image: ('/images/products/product6.jpg'), tag: 'Make-up' },
];

export const works = [
  { image: asset('/images/works/work-1.jpg'), category: 'Педикюр' },
  { image: asset('/images/works/work-2.jpg'), category: 'Маникюр' },
  { image: asset('/images/works/work-3.jpg'), category: 'Маникюр' },
  { image: asset('/images/works/work-4.jpg'), category: 'Педикюр' },
  { image: asset('/images/works/work-5.jpg'), category: 'Парикмахерские услуги' },
  { image: asset('/images/works/work-6.jpg'), category: 'Парикмахерские услуги' },
  { image: asset('/images/works/work-7.jpg'), category: 'Маникюр' },
  { image: asset('/images/works/work-8.jpg'), category: 'Парикмахерские услуги' },
  { image: asset('/images/works/work-9.jpg'), category: 'Парикмахерские услуги' },
];

export const masters = [
  { name: 'Анна Лебедева', role: 'Hair stylist', image: asset('/images/works/work-5.jpg') },
  { name: 'Мария Волкова', role: 'Nail master', image: asset('/images/works/work-2.jpg') },
  { name: 'Елена Соколова', role: 'Cosmetologist', image: asset('/images/products/product4.jpg') },
];

export const reviews = [
  { name: 'Алина', text: 'Очень спокойная атмосфера, прекрасный сервис и мастер, который действительно слышит пожелания.' },
  { name: 'Дарья', text: 'Прихожу уже не первый раз. Люблю салон за аккуратность, качество и ощущение, что никуда не нужно спешить.' },
  { name: 'Екатерина', text: 'Маникюр держится отлично, а сама запись и общение с администратором всегда удобные и быстрые.' },
];

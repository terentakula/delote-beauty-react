import useReveal from './useReveal';

export default function Reveal({ children, className = '', delay = 0, as: Tag = 'div' }) {
  const ref = useReveal();
  return (
    <Tag ref={ref} className={`reveal ${className}`} style={{ '--reveal-delay': `${delay}ms` }}>
      {children}
    </Tag>
  );
}

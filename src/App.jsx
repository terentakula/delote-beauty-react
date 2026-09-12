import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MastersPage from './pages/MastersPage';
import CosmeticsPage from './pages/CosmeticsPage';
import PromotionsPage from './pages/PromotionsPage';
import ReviewsPage from './pages/ReviewsPage';
import ContactsPage from './pages/ContactsPage';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/masters" element={<MastersPage />} />
        <Route path="/cosmetics" element={<CosmeticsPage />} />
        <Route path="/promotions" element={<PromotionsPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
    </>
  );
}

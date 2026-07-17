import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Home from './pages/Home';
import AllProducts from './pages/AllProducts';
import CategoryListing from './pages/CategoryListing';
import ProductDetail from './pages/ProductDetail';
import CustomOrder from './pages/CustomOrder';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { ToastProvider } from './context/ToastContext';
import ToastContainer from './components/ToastContainer';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ToastProvider>
        <CartProvider>
          <WishlistProvider>
            <div className="flex flex-col min-h-screen">
              <ScrollToTop />
              <Navbar />
              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/products" element={<AllProducts />} />
                  <Route path="/category/:slug" element={<CategoryListing />} />
                  <Route path="/product/:id" element={<ProductDetail />} />
                  <Route path="/custom-order" element={<CustomOrder />} />
                  <Route path="*" element={<Home />} />
                </Routes>
              </main>
              <Footer />
              <FloatingWhatsApp />
              <ToastContainer />
            </div>
          </WishlistProvider>
        </CartProvider>
      </ToastProvider>
    </Router>
  );
};

export default App;
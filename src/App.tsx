import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Collections from './pages/Collections';
import Contact from './pages/Contact';
import SignIn from './pages/SignIn';
import AdminDashboard from './pages/Admin/AdminDashboard';
import { AuthProvider } from './context/AuthContext';
import { ProductProvider } from './context/ProductContext';
import { CMSProvider } from './context/CMSContext';

function App() {
  return (
    <AuthProvider>
      <ProductProvider>
        <CMSProvider>
          <Router>
            <ScrollToTop />
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/collections" element={<Collections />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/card/:id" element={<ProductDetail />} />
                  <Route path="/signin" element={<SignIn />} />
                  <Route path="/admin/*" element={<AdminDashboard />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </Router>
        </CMSProvider>
      </ProductProvider>
    </AuthProvider>
  );
}

export default App;

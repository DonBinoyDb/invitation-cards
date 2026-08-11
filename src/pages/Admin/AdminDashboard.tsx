import { useState } from 'react';
import { Link, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { LayoutDashboard, Package, MonitorPlay, LogOut, ArrowLeft, Menu, X } from 'lucide-react';
import ManageProducts from './ManageProducts';
import ManageLandingPage from './ManageLandingPage';

const AdminDashboard = () => {
  const { user, signOut } = useAuth();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  if (!user || user.role !== 'admin') {
    return <Navigate to="/signin" replace />;
  }

  const navItemClass = (path: string) => {
    const isActive = location.pathname.includes(path);
    return `flex items-center gap-3 px-6 py-4 text-sm font-medium transition-all ${
      isActive 
        ? 'bg-brand-dark/10 text-white border-r-4 border-brand-gold' 
        : 'text-gray-400 hover:bg-brand-dark/5 hover:text-white'
    }`;
  };

  return (
    <div className="flex h-screen bg-[#f8f9fa] overflow-hidden font-sans relative">
      
      {/* Mobile overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed lg:static inset-y-0 left-0 w-72 bg-[#1a1a1a] flex flex-col shadow-2xl z-30 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="p-8 pb-6 border-b border-gray-800 flex justify-between items-start">
          <div>
            <Link to="/" className="inline-block text-gray-400 hover:text-white mb-6 text-xs flex items-center gap-2 transition-colors">
              <ArrowLeft size={14} /> Back to Website
            </Link>
            <h2 className="text-2xl font-black uppercase tracking-tight text-white leading-none">
              Ivory Script
            </h2>
            <p className="text-xs text-brand-gold mt-2 font-bold tracking-widest uppercase">Admin Portal</p>
          </div>
          <button 
            className="lg:hidden text-gray-400 hover:text-white"
            onClick={() => setIsSidebarOpen(false)}
          >
            <X size={24} />
          </button>
        </div>
        
        <nav className="flex-1 py-6 flex flex-col">
          <Link to="/admin/products" className={navItemClass('/products')} onClick={() => setIsSidebarOpen(false)}>
            <Package size={18} /> Manage Products
          </Link>
          <Link to="/admin/landing" className={navItemClass('/landing')} onClick={() => setIsSidebarOpen(false)}>
            <MonitorPlay size={18} /> Landing Page Content
          </Link>
        </nav>
        
        <div className="p-6 border-t border-gray-800">
          <div className="mb-4">
            <p className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-1">Logged in as</p>
            <p className="text-white text-sm font-medium">{user.username}</p>
          </div>
          <button 
            onClick={signOut}
            className="flex items-center gap-2 w-full px-4 py-3 text-xs font-bold text-red-400 hover:bg-red-500/10 rounded-lg transition-colors uppercase tracking-wider"
          >
            <LogOut size={16} /> Sign Out
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Top Header */}
        <header className="bg-white h-20 border-b border-gray-200 flex items-center px-6 lg:px-10 shrink-0 shadow-sm z-10 gap-4">
          <button 
            className="lg:hidden text-gray-600 hover:text-brand-dark p-2 -ml-2"
            onClick={() => setIsSidebarOpen(true)}
          >
            <Menu size={24} />
          </button>
          <h1 className="text-lg lg:text-xl font-bold text-gray-800">
            {location.pathname.includes('/products') ? 'Product Management' : 
             location.pathname.includes('/landing') ? 'Landing Page CMS' : 
             'Dashboard Overview'}
          </h1>
        </header>
        
        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-4 lg:p-10 bg-[#f8f9fa]">
          <div className="max-w-6xl mx-auto">
            <Routes>
              <Route path="/" element={
                <div className="bg-white p-8 lg:p-12 shadow-sm rounded-xl border border-gray-100 flex flex-col items-center justify-center text-center min-h-[300px] lg:min-h-[400px]">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 bg-brand-dark/5 rounded-full flex items-center justify-center mb-6">
                    <LayoutDashboard size={32} className="text-brand-dark lg:w-10 lg:h-10" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-black uppercase text-brand-dark mb-4 tracking-tight">Welcome to the Admin Portal</h3>
                  <p className="text-sm lg:text-base text-gray-500 max-w-md">Select a management tool from the sidebar to begin editing your store's content and inventory.</p>
                </div>
              } />
              <Route path="/products" element={<ManageProducts />} />
              <Route path="/landing" element={<ManageLandingPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

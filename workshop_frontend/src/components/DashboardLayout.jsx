import React, { useState } from 'react';
import { Menu, X, Home, BookOpen, Users } from 'lucide-react';

const DashboardLayout = ({ children, activeView, setActiveView }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'overview', label: 'Overview', icon: Home },
    { id: 'workshops', label: 'Workshops', icon: BookOpen },
    { id: 'instructors', label: 'Instructors', icon: Users },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      {/* Top Navbar */}
      <nav className="bg-indigo-600 text-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center space-x-2">
              <BookOpen className="w-8 h-8 text-indigo-100" />
              <span className="font-bold text-xl tracking-tight">Workshop Portal</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveView(item.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md font-medium text-sm transition-colors ${
                    activeView === item.id 
                      ? 'bg-indigo-700 text-white' 
                      : 'text-indigo-100 hover:bg-indigo-500 hover:text-white'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center min-h-[44px] min-w-[44px] rounded-md text-indigo-100 hover:text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-indigo-700">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveView(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center space-x-3 w-full px-3 py-3 rounded-md min-h-[44px] text-base font-medium transition-colors ${
                    activeView === item.id 
                      ? 'bg-indigo-800 text-white' 
                      : 'text-indigo-100 hover:bg-indigo-600 hover:text-white'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row gap-6">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;

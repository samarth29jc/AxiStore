import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

function MobileMenu({ isOpen, onClose }) {
  const { currentUser, logout } = useAuth();

  return (
    <div
      className={`fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      ></div>
      
      {/* Menu Content */}
      <div className="absolute top-0 right-0 w-3/4 max-w-xs h-full bg-white shadow-xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <span className="text-xl font-bold text-gray-800">Menu</span>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-900"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* User Info */}
        {currentUser && (
          <div className="p-4 border-b">
            <div className="flex items-center space-x-3">
              <img 
                src={currentUser.avatar} 
                alt={currentUser.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-medium text-gray-800">{currentUser.name}</p>
                <p className="text-sm text-gray-500">{currentUser.email}</p>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Links */}
        <nav className="flex-1 overflow-y-auto py-4">
          <ul>
            <li>
              <Link 
                to="/"
                className="block px-4 py-3 text-lg text-gray-800 hover:bg-gray-100"
                onClick={onClose}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/products"
                className="block px-4 py-3 text-lg text-gray-800 hover:bg-gray-100"
                onClick={onClose}
              >
                Shop All
              </Link>
            </li>
            <li className="border-t">
              <Link 
                to="/products/tshirts"
                className="block px-4 py-3 text-lg text-gray-800 hover:bg-gray-100"
                onClick={onClose}
              >
                T-Shirts
              </Link>
            </li>
            <li>
              <Link 
                to="/products/pants"
                className="block px-4 py-3 text-lg text-gray-800 hover:bg-gray-100"
                onClick={onClose}
              >
                Pants
              </Link>
            </li>
            <li>
              <Link 
                to="/products/sweaters"
                className="block px-4 py-3 text-lg text-gray-800 hover:bg-gray-100"
                onClick={onClose}
              >
                Sweaters
              </Link>
            </li>
            <li>
              <Link 
                to="/products/jackets"
                className="block px-4 py-3 text-lg text-gray-800 hover:bg-gray-100"
                onClick={onClose}
              >
                Jackets
              </Link>
            </li>
            <li>
              <Link 
                to="/products/dresses"
                className="block px-4 py-3 text-lg text-gray-800 hover:bg-gray-100"
                onClick={onClose}
              >
                Dresses
              </Link>
            </li>
            <li className="border-t">
              {currentUser ? (
                <>
                  <Link 
                    to="/profile"
                    className="block px-4 py-3 text-lg text-gray-800 hover:bg-gray-100"
                    onClick={onClose}
                  >
                    My Profile
                  </Link>
                  <Link 
                    to="/orders"
                    className="block px-4 py-3 text-lg text-gray-800 hover:bg-gray-100"
                    onClick={onClose}
                  >
                    Orders
                  </Link>
                  <button 
                    onClick={() => {
                      logout();
                      onClose();
                    }}
                    className="block w-full text-left px-4 py-3 text-lg text-gray-800 hover:bg-gray-100"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <Link 
                    to="/login"
                    className="block px-4 py-3 text-lg text-gray-800 hover:bg-gray-100"
                    onClick={onClose}
                  >
                    Sign In
                  </Link>
                  <Link 
                    to="/register"
                    className="block px-4 py-3 text-lg text-gray-800 hover:bg-gray-100"
                    onClick={onClose}
                  >
                    Create Account
                  </Link>
                </>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default MobileMenu;
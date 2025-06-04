import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useWishlist } from '../contexts/WishlistContext';
import ProductCard from '../components/common/ProductCard';

function ProfilePage() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const { wishlist } = useWishlist();
  
  // Redirect if not logged in
  if (!currentUser) {
    navigate('/login');
    return null;
  }
  
  const [activeTab, setActiveTab] = useState('account');
  
  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="pt-24 pb-16"> {/* Offset for fixed header */}
      <div className="container-custom">
        <h1 className="text-3xl font-bold mb-8">My Account</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6 bg-primary-50 border-b border-primary-100">
                <div className="flex items-center space-x-4">
                  <img
                    src={currentUser.avatar}
                    alt={currentUser.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-medium text-lg">{currentUser.name}</h3>
                    <p className="text-gray-600 text-sm">{currentUser.email}</p>
                  </div>
                </div>
              </div>
              
              <nav className="p-2">
                <button
                  onClick={() => setActiveTab('account')}
                  className={`w-full text-left px-4 py-3 rounded-md ${
                    activeTab === 'account'
                      ? 'bg-primary-50 text-primary-800'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Account Settings
                </button>
                
                <button
                  onClick={() => setActiveTab('orders')}
                  className={`w-full text-left px-4 py-3 rounded-md ${
                    activeTab === 'orders'
                      ? 'bg-primary-50 text-primary-800'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Order History
                </button>
                
                <button
                  onClick={() => setActiveTab('wishlist')}
                  className={`w-full text-left px-4 py-3 rounded-md ${
                    activeTab === 'wishlist'
                      ? 'bg-primary-50 text-primary-800'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Wishlist
                </button>
                
                <button
                  onClick={() => setActiveTab('addresses')}
                  className={`w-full text-left px-4 py-3 rounded-md ${
                    activeTab === 'addresses'
                      ? 'bg-primary-50 text-primary-800'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Addresses
                </button>
                
                <div className="px-4 py-3 border-t mt-2">
                  <button
                    onClick={handleLogout}
                    className="w-full text-left text-red-600 hover:text-red-800"
                  >
                    Sign Out
                  </button>
                </div>
              </nav>
            </div>
          </div>
          
          {/* Content */}
          <div className="md:col-span-3">
            <div className="bg-white rounded-lg shadow-md p-6">
              {activeTab === 'account' && (
                <div>
                  <h2 className="text-xl font-semibold mb-6">Account Settings</h2>
                  
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          defaultValue={currentUser.name}
                          className="input-field"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          defaultValue={currentUser.email}
                          className="input-field"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        placeholder="Enter your phone number"
                        className="input-field"
                      />
                    </div>
                    
                    <div className="border-t pt-6">
                      <h3 className="text-lg font-medium mb-4">Change Password</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="current-password" className="block text-sm font-medium text-gray-700 mb-1">
                            Current Password
                          </label>
                          <input
                            type="password"
                            id="current-password"
                            className="input-field"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="new-password" className="block text-sm font-medium text-gray-700 mb-1">
                            New Password
                          </label>
                          <input
                            type="password"
                            id="new-password"
                            className="input-field"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <button type="submit" className="btn-primary">
                        Save Changes
                      </button>
                    </div>
                  </form>
                </div>
              )}
              
              {activeTab === 'orders' && (
                <div>
                  <h2 className="text-xl font-semibold mb-6">Order History</h2>
                  
                  <div className="border rounded-lg overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Order ID
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Date
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Total
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            #12345
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            May 12, 2025
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              Delivered
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            $124.99
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <a href="#" className="text-primary-600 hover:text-primary-800">
                              View Details
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            #12344
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            Apr 28, 2025
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              Delivered
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            $74.99
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <a href="#" className="text-primary-600 hover:text-primary-800">
                              View Details
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  {/* No orders state */}
                  {false && (
                    <div className="text-center py-12">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 mx-auto text-gray-300 mb-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                      </svg>
                      <h3 className="text-lg font-medium text-gray-800 mb-2">No orders yet</h3>
                      <p className="text-gray-600 mb-6">
                        You haven't placed any orders yet. Check out our products and start shopping!
                      </p>
                      <Link to="/products" className="btn-primary">
                        Browse Products
                      </Link>
                    </div>
                  )}
                </div>
              )}
              
              {activeTab === 'wishlist' && (
                <div>
                  <h2 className="text-xl font-semibold mb-6">Wishlist</h2>
                  {wishlist.length === 0 ? (
                    <p className="text-gray-600">Your wishlist is empty.</p>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {wishlist.map(product => (
                        <ProductCard key={product.id} product={product} />
                      ))}
                    </div>
                  )}
                </div>
              )}
              
              {activeTab === 'addresses' && (
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold">Saved Addresses</h2>
                    <button className="btn-secondary">
                      Add New Address
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border rounded-lg p-4 relative">
                      <div className="absolute top-4 right-4 flex space-x-2">
                        <button className="text-gray-600 hover:text-gray-900">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                          </svg>
                        </button>
                        <button className="text-red-600 hover:text-red-800">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                          </svg>
                        </button>
                      </div>
                      
                      <div className="flex items-center mb-3">
                        <input
                          id="default-address"
                          name="default-address"
                          type="radio"
                          checked
                          className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                        />
                        <label htmlFor="default-address" className="ml-2 text-sm font-medium text-gray-700">
                          Default Address
                        </label>
                      </div>
                      
                      <p className="font-medium">John Doe</p>
                      <p className="text-gray-600">123 Main Street</p>
                      <p className="text-gray-600">Apt 4B</p>
                      <p className="text-gray-600">New York, NY 10001</p>
                      <p className="text-gray-600">United States</p>
                      <p className="text-gray-600">Phone: (123) 456-7890</p>
                    </div>
                    
                    <div className="border rounded-lg p-4 relative">
                      <div className="absolute top-4 right-4 flex space-x-2">
                        <button className="text-gray-600 hover:text-gray-900">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                          </svg>
                        </button>
                        <button className="text-red-600 hover:text-red-800">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                          </svg>
                        </button>
                      </div>
                      
                      <div className="flex items-center mb-3">
                        <input
                          id="work-address"
                          name="default-address"
                          type="radio"
                          className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                        />
                        <label htmlFor="work-address" className="ml-2 text-sm font-medium text-gray-700">
                          Work Address
                        </label>
                      </div>
                      
                      <p className="font-medium">John Doe</p>
                      <p className="text-gray-600">456 Business Ave</p>
                      <p className="text-gray-600">Suite 201</p>
                      <p className="text-gray-600">San Francisco, CA 94107</p>
                      <p className="text-gray-600">United States</p>
                      <p className="text-gray-600">Phone: (987) 654-3210</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
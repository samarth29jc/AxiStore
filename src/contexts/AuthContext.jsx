import { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('user', JSON.stringify(currentUser));
    } else {
      localStorage.removeItem('user');
    }
  }, [currentUser]);

  // Mock login functionality
  const login = (email, password) => {
    setLoading(true);
    setError('');
    
    // Simulate API call
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Mock validation
        if (email === 'user@example.com' && password === 'password') {
          const user = {
            id: '1',
            name: 'John Doe',
            email: 'user@example.com',
            avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=800'
          };
          setCurrentUser(user);
          setLoading(false);
          resolve(user);
        } else {
          setError('Invalid email or password');
          setLoading(false);
          reject(new Error('Invalid email or password'));
        }
      }, 1000);
    });
  };

  // Mock registration functionality
  const register = (name, email, password) => {
    setLoading(true);
    setError('');
    
    // Simulate API call
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Mock validation
        if (email && password && name) {
          const user = {
            id: Date.now().toString(),
            name,
            email,
            avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=800'
          };
          setCurrentUser(user);
          setLoading(false);
          resolve(user);
        } else {
          setError('Please fill in all fields');
          setLoading(false);
          reject(new Error('Please fill in all fields'));
        }
      }, 1000);
    });
  };

  const logout = () => {
    setCurrentUser(null);
  };

  const value = {
    currentUser,
    login,
    register,
    logout,
    loading,
    error
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
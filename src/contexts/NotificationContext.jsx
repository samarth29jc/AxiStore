import { createContext, useState, useContext } from 'react';

const NotificationContext = createContext({
  notification: null,
  showNotification: () => {}
});

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotification must be used within a NotificationProvider');
  }
  return context;
};

export const NotificationProvider = ({ children }) => {
  const [notification, setNotification] = useState(null);

  const showNotification = (message, type = 'success') => {
    setNotification({ message, type });
    // Auto hide after 3 seconds
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  const value = {
    notification,
    showNotification
  };

  return (
    <NotificationContext.Provider value={value}>
      {children}
      {notification && (
        <div 
          className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg ${
            notification.type === 'success' ? 'bg-green-500' : 'bg-red-500'
          } text-white transition-opacity duration-300`}
        >
          {notification.message}
        </div>
      )}
    </NotificationContext.Provider>
  );
}; 
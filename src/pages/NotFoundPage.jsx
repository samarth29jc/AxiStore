import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className="pt-24 pb-16 flex flex-col items-center justify-center min-h-[70vh]">
      <div className="container-custom max-w-lg text-center">
        <h1 className="text-6xl font-bold text-primary-700 mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/" className="btn-primary">
            Go to Homepage
          </Link>
          <Link to="/products" className="btn-secondary">
            Browse Products
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 px-4 font-sans">
      <div className="text-center">
        <h1 className="text-9xl font-black text-slate-200">404</h1>
        <p className="text-2xl font-bold tracking-tight text-slate-900 sm:text-4xl mt-4">
          Page Not Found
        </p>
        <p className="mt-4 text-slate-500">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <Link
          to="/"
          className="mt-8 inline-block rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

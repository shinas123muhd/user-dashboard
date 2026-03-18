import { Loader2 } from 'lucide-react';

const PageLoader = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50">
      <Loader2 className="h-10 w-10 text-indigo-500 animate-spin" />
      <p className="mt-4 text-sm font-medium text-slate-500 animate-pulse">
        Loading...
      </p>
    </div>
  );
};

export default PageLoader;

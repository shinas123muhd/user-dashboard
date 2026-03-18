import React from 'react';
import { AlertTriangle, RefreshCcw } from 'lucide-react';

class GlobalErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // We can potentially log to a service like Sentry or Datadog here
    console.error("Uncaught application error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 p-4 font-sans">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 max-w-md w-full text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-50 mb-6 ring-8 ring-red-50/50">
              <AlertTriangle className="h-8 w-8 text-red-600" aria-hidden="true" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">Something went wrong</h2>
            <p className="text-slate-500 mb-6 text-sm">
              We've encountered an unexpected error. Don't worry, your data is safe. Please refresh the page to try again.
            </p>
            
            {this.state.error && (
              <div className="bg-slate-50 p-4 rounded-lg text-left overflow-auto mb-8 border border-slate-200 max-h-32">
                <p className="text-xs font-mono text-red-600 break-words">{this.state.error.toString()}</p>
              </div>
            )}

            <button
              onClick={() => window.location.reload()}
              className="inline-flex w-full items-center justify-center rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
            >
              <RefreshCcw className="mr-2 h-4 w-4" />
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default GlobalErrorBoundary;

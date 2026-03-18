import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast';
import AppRoutes from './AppRoutes';
import GlobalErrorBoundary from './components/ui/GlobalErrorBoundary';

function App() {

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

  return (
    <GlobalErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <Toaster position="top-right" />
        <AppRoutes />
      </QueryClientProvider>
    </GlobalErrorBoundary>
  )
}

export default App

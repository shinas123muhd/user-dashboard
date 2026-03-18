import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";


// Lazy load the new Users List page
const UsersList = lazy(() => import("./pages/admin/Users/UsersList"));

const AppRoutes = () => {
  return (
    <Router>
      <Suspense fallback={
        <div className="flex items-center justify-center min-h-screen bg-white">
          Loading...
        </div>
      }>
        <Routes>
          {/* Default redirect to admin users */}
          <Route path="/" element={<Navigate to="/admin/users" replace />} />

          {/* Admin routes */}
          <Route >

              <Route path="users" element={<UsersList />} />
              <Route index element={<Navigate to="users" replace />} />
            </Route>

        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRoutes;
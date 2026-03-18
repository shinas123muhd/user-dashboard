import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";


// Lazy load the pages
const UsersList = lazy(() => import("./pages/admin/Users/UsersList"));
const NotFound = lazy(() => import("./pages/NotFound"));

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

          {/* Admin routes wrapped in persistent layout */}
          <Route path="/admin" element={<DashboardLayout />}>
              <Route path="users" element={<UsersList />} />
              <Route index element={<Navigate to="users" replace />} />
          </Route>

          {/* Catch-all 404 route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRoutes;
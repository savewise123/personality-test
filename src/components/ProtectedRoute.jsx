import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
  const { user } = (useContext = UserContext);
  if (!user) {
    return <Navigate to="/login" />;
  }
  return (
    <>
      <h1>보호된 라우트</h1>
      <Outlet />
    </>
  );
}

export default ProtectedRoute;

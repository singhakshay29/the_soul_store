import { useSelector } from "react-redux";
import { Navigate, Route } from "react-router-dom";
const Protected = ({ children, whenLoggedIn }) => {
  const { isLoggedIn } = useSelector((state) => state.user);
  if (!isLoggedIn || (isLoggedIn && whenLoggedIn)) {
    return children;
  }
  return <Navigate to="/" replace />;
};

function ProtectedRoute({ path, element, whenLoggedIn = false }) {
  return (
    <Route
      path={path}
      element={<Protected whenLoggedIn={whenLoggedIn}>{element}</Protected>}
    />
  );
}
export { ProtectedRoute };

export default Protected;

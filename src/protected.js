import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
const Protected = ({ children, whenLoggedIn }) => {
  const { isLoggedIn } = useSelector((state) => state.user);
  if ((!isLoggedIn && whenLoggedIn) || (isLoggedIn && !whenLoggedIn)) {
    return children;
  }
  return <Navigate to="/" replace />;
};

export default Protected;

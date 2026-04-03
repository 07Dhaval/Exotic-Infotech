import { useLocation } from "react-router-dom";

const PageWrapper = ({ children }) => {
  const location = useLocation();

  return <div key={location.pathname}>{children}</div>;
};

export default PageWrapper;
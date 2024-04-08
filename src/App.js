import { useEffect } from "react";
import './global.css'
import {
  useNavigationType,
  useLocation,
} from "react-router-dom";
import WebsiteRoutes from "./website_routes";




function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    const pageName = location.pathname;
    if (pageName === '/') {
      document.title = 'uniguide'
    } else
      document.title = `${pageName.slice(1)}`;
  }, [location.pathname]
  );

  return (
    <WebsiteRoutes />
  );
}
export default App;

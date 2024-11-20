import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();  // Destructuring pathname from useLocation()

  useEffect(() => {
    window.scrollTo(0, 0);  // Scroll to the top of the page on route change
  }, [pathname]);  // Re-run the effect when the pathname changes

  return null;  // No UI element is rendered by this component
}

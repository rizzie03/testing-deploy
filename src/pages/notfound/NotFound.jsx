import NotFoundStyle from "./notfound.module.scss";
import { useEffect } from "react";

function NotFound() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className={NotFoundStyle.container}>
      <p>uh oh.. the page you're looking for is not available</p>
    </div>
  );
}

export default NotFound;

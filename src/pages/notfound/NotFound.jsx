import NotFoundStyle from "./notfound.module.scss";

function NotFound() {
  return (
    <div className={NotFoundStyle.container}>
      <p>uh oh.. the page you're looking for is not available</p>
    </div>
  );
}

export default NotFound;

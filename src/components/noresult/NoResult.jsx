import NoResultStyle from "./noresult.module.scss";

function NoResult() {
  return (
    <div className={NoResultStyle.container}>
      <p>sorry we couldn't find any events from this category.</p>
    </div>
  );
}

export default NoResult;

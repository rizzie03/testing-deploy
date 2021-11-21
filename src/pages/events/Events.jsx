import { useEffect, useState } from "react";
import Card from "../../components/card/Card";
import Filter from "../../components/filter/Filter";
import NoResult from "../../components/noresult/NoResult";
import PaginationRounded from "../../components/pagination/Pagination";
import EventsStyle from "./events.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getEventsFetch } from "../../redux/action/actions/events";
import { useParams } from "react-router";

function Events() {
  const events = useSelector((state) => state.events);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(8);

  useEffect(() => {
    window.scroll(0, 0);
    dispatch(getEventsFetch({ slug: "?page=1&limit=8" }));
  }, []);

  useEffect(() => {
    dispatch(getEventsFetch({ slug: `?page=${page}&limit=8` }));
  }, [page]);

  const handleClickPage = (event, value) => {
    setPage(value);
  };

  return (
    <>
      <div className={EventsStyle.eventContainer}>
        <p className={EventsStyle.results}>
          Showing {events.totalData ? events.totalData : 0} Results for “How to”
        </p>
        <Filter page={page} />
        {events.data.length !== 0 ? (
          <div>
            <div className={EventsStyle.cards}>
              {events.data.length > 0 &&
                events.data.map((data) => <Card data={data} key={data.id} />)}
            </div>
            <PaginationRounded
              className={EventsStyle.pagination}
              totalPage={Math.ceil(events.totalData / limit)}
              handleClickPage={handleClickPage}
              page={page}
            />
          </div>
        ) : (
          <NoResult />
        )}
      </div>
    </>
  );
}

export default Events;

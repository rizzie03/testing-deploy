import { useEffect, useState } from "react";
import Card from "../../components/card/Card";
import Filter from "../../components/filter/Filter";
import NoResult from "../../components/noresult/NoResult";
import PaginationRounded from "../../components/pagination/Pagination";
import EventsStyle from "./events.module.scss";
import datas from "../../db";

function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    if (datas.length > 0) {
      setEvents([...datas.slice(0, 8)]);
    }
  }, []);

  return (
    <>
      <div className={EventsStyle.eventContainer}>
        <p className={EventsStyle.results}>Showing 68 Results for “How to”</p>
        <Filter />
        <div>
          <div className={EventsStyle.cards}>
            {events.length > 0 && events.map((data) => <Card data={data} />)}
          </div>
          <PaginationRounded className={EventsStyle.pagination} />
        </div>
        {/* <NoResult /> */}
      </div>
    </>
  );
}

export default Events;

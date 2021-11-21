import { useEffect, useState } from "react";
import Card from "../../components/card/Card";
import Filter from "../../components/filter/Filter";
import NoResult from "../../components/noresult/NoResult";
import PaginationRounded from "../../components/pagination/Pagination";
import EventsStyle from "./events.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getEventsFetch } from "../../redux/action/actions/events";
import { useLocation } from "react-router";

function Events() {
  const events = useSelector((state) => state.events);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(8);
  const [searchInput, setSearchInput] = useState("");
  const [filterDate, setFilterDate] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [sort, setSort] = useState("");
  const { state } = useLocation();

  const fetchEvents = () => {
    dispatch(
      getEventsFetch({
        slug: `?search=${searchInput}${
          filterDate ? `&${filterDate}=1` : ""
        }&cat=${filterCategory}${
          sort ? `&${sort}=asc` : ""
        }&page=${page}&limit=${limit}`,
      })
    );
  };

  useEffect(() => {
    setSearchInput(state);
  }, []);

  useEffect(() => {
    window.scroll(0, 0);
    fetchEvents();
  }, [page, filterDate, filterCategory, sort, searchInput]);

  const handleClickPage = (event, value) => {
    setPage(value);
  };

  const handleSetFilterDate = (value) => {
    setFilterDate(value);
  };

  const handleFilterCategory = (value) => {
    setFilterCategory(value);
  };

  const handleSort = (value) => {
    setSort(value);
  };

  return (
    <>
      <div className={EventsStyle.eventContainer}>
        <p className={EventsStyle.results}>
          Showing {events.totalData ? events.totalData : 0} Results for “How to”
        </p>
        <Filter
          page={page}
          handleSetFilterDate={handleSetFilterDate}
          handleFilterCategory={handleFilterCategory}
          handleSort={handleSort}
        />
        {events.data ? (
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

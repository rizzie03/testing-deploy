import { useEffect, useState } from "react";
import HomeStyle from "./home.module.scss";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import Card from "../../components/card/Card";
import datas from "../../db";
import { useDispatch, useSelector } from "react-redux";
import { getEventsFetch } from "../../redux/action/actions/events";

function Home() {
  const eventsDesign = useSelector((state) => state.events);
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    window.scroll(0, 0);
    dispatch(getEventsFetch({ slug: "?cat=2&page=1&limit=4" }));
  }, []);

  const handleOnInputSearch = (value) => {
    setSearchInput(value);
  };

  const handleOnSearch = () => {
    navigate("/events", { state: searchInput });
  };

  return (
    <>
      <section className={HomeStyle.homeTop}>
        <h1 className={HomeStyle.homeHeader}>
          <span className={HomeStyle.homeHeaderSecondary}>Create</span> or
          <span className={HomeStyle.homeHeaderSecondary}> Find </span>
          interesting
          <span className={HomeStyle.homeHeaderSecondary}> Events</span> around
          The world
        </h1>
        {/* SEARCH */}
        <div className={HomeStyle.homeSearch}>
          <BsSearch className={HomeStyle.homeSearchIcon} />
          <input
            type="text"
            placeholder="Search events"
            className={HomeStyle.homeSearchInput}
            value={searchInput}
            onChange={(e) => handleOnInputSearch(e.target.value)}
          />
          <button
            onClick={handleOnSearch}
            className={HomeStyle.homeSearchButton}
          >
            Search
          </button>
        </div>
        {/* SEARCH */}
      </section>
      <section className={HomeStyle.homeBottom}>
        <div className={HomeStyle.homeBottomHeader}>
          <h2 className={HomeStyle.homeBottomHeaderTitle}>
            Attend an event starting soon
          </h2>
          <Link to="/events" className={HomeStyle.homeBottomHeaderLink}>
            More events
          </Link>
        </div>
        <div className={HomeStyle.cards}>
          {eventsDesign.data.length > 0 &&
            eventsDesign.data
              .slice(0, 4)
              .map((data) => <Card data={data} key={data.id} />)}
        </div>
        <div className={HomeStyle.homeBottomHeader}>
          <h2 className={HomeStyle.homeBottomHeaderTitle}>Design events</h2>
          <Link to="/events" className={HomeStyle.homeBottomHeaderLink}>
            More events
          </Link>
        </div>
        <div className={HomeStyle.cards}>
          {eventsDesign.data.length > 0 &&
            eventsDesign.data
              .slice(0, 4)
              .map((data, key) => <Card data={data} key={key} />)}
        </div>
      </section>
    </>
  );
}

export default Home;

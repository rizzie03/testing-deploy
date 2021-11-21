import { useEffect, useState } from "react";
import HomeStyle from "./home.module.scss";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import Card from "../../components/card/Card";
import datas from "../../db";

function Home() {
  const [events, setEvents] = useState([]);

    useEffect(() => {
      if (datas.length > 0) {
        setEvents([...datas.slice(0, 4)]);
      }
    }, []);

    return (
      <>
        <section className={HomeStyle.homeTop}>
          <h1 className={HomeStyle.homeHeader}>
            <span className={HomeStyle.homeHeaderSecondary}>Create</span> or
            <span className={HomeStyle.homeHeaderSecondary}> Find </span>
            interesting
            <span className={HomeStyle.homeHeaderSecondary}> Events</span>{" "}
            around The world
          </h1>
          <div className={HomeStyle.homeSearch}>
            <BsSearch className={HomeStyle.homeSearchIcon} />
            <input
              type='text'
              placeholder='Search events'
              className={HomeStyle.homeSearchInput}
            />
            <button className={HomeStyle.homeSearchButton}>Search</button>
          </div>
        </section>
        <section className={HomeStyle.homeBottom}>
          <div className={HomeStyle.homeBottomHeader}>
            <h2 className={HomeStyle.homeBottomHeaderTitle}>
              Attend an event starting soon
            </h2>
            <Link to='/events' className={HomeStyle.homeBottomHeaderLink}>
              More events
            </Link>
          </div>
          <div className={HomeStyle.cards}>
            {events.length > 0 && events.map((data) => <Card data={data} />)}
          </div>
          <div className={HomeStyle.homeBottomHeader}>
            <h2 className={HomeStyle.homeBottomHeaderTitle}>Design events</h2>
            <Link to='/events' className={HomeStyle.homeBottomHeaderLink}>
              More events
            </Link>
          </div>
          <div className={HomeStyle.cards}>
            {events.length > 0 && events.map((data) => <Card data={data} />)}
          </div>
        </section>
      </>
    );
  };

export default Home;

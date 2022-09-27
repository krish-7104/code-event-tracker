import React, { useEffect, useState } from "react";
import CardContest from "./CardContest";
import CardWeb from "./CardWeb";
import Navbar from "./Navbar";
import "./style/App.css";
const App = () => {
  const [webData, setWebData] = useState([]);
  const [data, setData] = useState([]);

  const fetchWebsite = async (link) => {
    await fetch(link)
      .then((response) => response.json())
      .then((data) => setWebData(data));
  };
  const fetchParticularData = async (link) => {
    await fetch(link)
      .then((response) => response.json())
      .then((data) => setData(data));
  };
  useEffect(() => {
    fetchWebsite("https://www.kontests.net/api/v1/sites");
  }, []);

  const cardClickHandler = (event) => {
    fetchParticularData(`https://www.kontests.net/api/v1/${event.target.id}`);
  };

  return (
    <>
      <Navbar />
      <div className="mainContainer">
        <div className="webCards">
          {webData.map((value) => {
            return (
              <CardWeb
                key={value[1]}
                id={value[1]}
                link={value[2]}
                title={value[0]}
                click={cardClickHandler}
              />
            );
          })}
        </div>
        <div className="contestCards">
          {data.map((value) => {
            return <CardContest key={Math.random() * 200} data={value} />;
          })}
        </div>
      </div>
    </>
  );
};

export default App;

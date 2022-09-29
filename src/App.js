import React, { useEffect, useState } from "react";
import CardContest from "./CardContest";
import CardWeb from "./CardWeb";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "./style/App.css";
const App = () => {
  const [webData, setWebData] = useState([]);
  const [data, setData] = useState([]);
  const [seletedWeb, setSelectedWeb] = useState("");
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
    setSelectedWeb(document.getElementById(event.target.id).innerText);
    fetchParticularData(`https://www.kontests.net/api/v1/${event.target.id}`);
    resetBtns();
    document.getElementById(event.target.id).classList.add("active");
    let allCard = document.getElementsByClassName("contestCard");
    for (let i = 0; i < allCard.length; i++) {
      allCard[i].innerHTML = "";
    }
  };

  const resetBtns = () => {
    let addBtns = document.getElementsByClassName("cardWebTitle");
    for (let i = 0; i < addBtns.length; i++) {
      addBtns[i].classList.remove("active");
    }
  };

  return (
    <>
      <Navbar />
      <div className="mainContainer">
        <div className="webCards">
          {webData.map((value) => {
            return (
              <CardWeb
                type="web"
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
          <div className="selectedTitle">
            {data.length === 0
              ? seletedWeb === ""
                ? ""
                : seletedWeb + " No Challenges, Check Later!"
              : seletedWeb + " " + (data.length + " Challenges")}
          </div>
          {data.map((value) => {
            return <CardContest key={Math.random() * 200} data={value} />;
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;

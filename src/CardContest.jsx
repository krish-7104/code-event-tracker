import React from "react";
import "./style/Card.css";
import { HiExternalLink } from "react-icons/hi";
const CardContest = (props) => {
  const secondsToHms = (d) => {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor((d % 3600) / 60);
    var s = Math.floor((d % 3600) % 60);

    var hDisplay = h > 0 ? h + (h === 1 ? " hour, " : " hours ") : "";
    var mDisplay = m > 0 ? m + (m === 1 ? " minute, " : " minutes ") : "";
    var sDisplay = s > 0 ? s + (s === 1 ? " second" : " seconds") : "";
    return hDisplay + mDisplay + sDisplay;
  };
  // console.log(props.data.start_time.split("T"));
  let newStartTime = new Date(props.data.start_time).toLocaleString();
  let newEndTime = new Date(props.data.end_time).toLocaleString();
  return (
    <div className="contestCard">
      <p className="contestTitle">{"</> " + props.data.name}</p>
      <p className="contestStartTime">
        <span className="label">Start Time: </span>
        {newStartTime}
      </p>
      <p className="contestEndTime">
        <span className="label">End Time: </span>
        {newEndTime}
      </p>
      <p className="contestDuration">
        <span className="label">Duration: </span>
        {secondsToHms(props.data.duration)}
      </p>
      <p className="contestStatus">
        {props.data.status === "CODING" ? (
          <span className="started">Started 🚀</span>
        ) : (
          <span className="notStarted">Not Started Yet</span>
        )}
      </p>
      <div className="contestViewArea">
        <a
          className="contestViewBtn"
          href={props.data.url}
          target="_blank"
          rel="noreferrer"
        >
          Contest Link
          <span className="cardIcon">
            <HiExternalLink />
          </span>
        </a>
      </div>
    </div>
  );
};

export default CardContest;

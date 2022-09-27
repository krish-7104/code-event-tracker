import React from "react";
import "./style/Card.css";

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

  return (
    <div className="contestCard">
      <p className="contestTitle">{"</> " + props.data.name}</p>
      <p className="contestStartTime">
        <span className="label">Start Time: </span>
        {props.data.start_time}
      </p>
      <p className="contestEndTime">
        <span className="label">End Time: </span>
        {props.data.end_time}
      </p>
      <p className="contestDuration">
        <span className="label">Duration: </span>
        {secondsToHms(props.data.duration)}
      </p>
      <p className="contestStatus">
        <span className="label">Status: </span>
        {props.data.status === "CODING" ? "Started" : "Not Started Yet"}
      </p>
      <div className="contestViewArea">
        <a
          className="contestViewBtn"
          href={props.data.url}
          target="_blank"
          rel="noreferrer"
        >
          Contest Link
        </a>
      </div>
    </div>
  );
};

export default CardContest;

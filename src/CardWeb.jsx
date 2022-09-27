import React from "react";
import "./style/Card.css";
import { BiCodeBlock } from "react-icons/bi";
const CardWeb = (props) => {
  return (
    <div className="cardWeb">
      <a href={props.link} target="_blank" rel="noreferrer">
        <span className="cardIcon">
          <BiCodeBlock />
        </span>
      </a>
      <p className="cardWebTitle" onClick={props.click} id={props.id}>
        {props.title}
      </p>
    </div>
  );
};

export default CardWeb;

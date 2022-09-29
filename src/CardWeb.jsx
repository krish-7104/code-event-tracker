import React from "react";
import "./style/Card.css";
const CardWeb = (props) => {
  if (props.title !== "Toph") {
    return (
      <>
        <div className="cardWeb">
          <p className="cardWebTitle" onClick={props.click} id={props.id}>
            {props.title}
          </p>
        </div>
      </>
    );
  }
};

export default CardWeb;

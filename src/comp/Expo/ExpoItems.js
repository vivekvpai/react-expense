import React from "react";
import ExpoDate from "./ExpoDate";
import "./ExpoItems.css";
import Card from "../UI/Card";

function ExpoItems(props) {
  return (
    <li>
      <Card className="expense-item">
        <ExpoDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">RS {props.amount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpoItems;

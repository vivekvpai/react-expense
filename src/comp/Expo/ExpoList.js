import React from "react";
import ExpoItems from "./ExpoItems";
import "./ExpoList.css";

const Expolist = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no Items</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expo) => (
        <ExpoItems
          key={expo.id}
          title={expo.title}
          amount={expo.amount}
          date={expo.date}
        />
      ))}
    </ul>
  );
};

export default Expolist;

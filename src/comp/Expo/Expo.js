import React, { useState } from "react";
import "./Expo.css";
import ExpoFilter from "./ExpoFilter";
import Card from "../UI/Card";
import Expolist from "./ExpoList";
import ExpoChart from "./ExpoChart";

function Expo(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpo = props.items.filter((expo) => {
    return expo.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpoFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpoChart expenses={filteredExpo} />
        <Expolist items={filteredExpo} />
      </Card>
    </div>
  );
}

export default Expo;

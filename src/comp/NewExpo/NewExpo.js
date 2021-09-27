import React, { useState } from "react";
import "./NewExpo.css";
import ExpoForm from "./ExpoForm";

function NewExpo(props) {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpoDataHandler = (enteredExpoData) => {
    const expoData = {
      ...enteredExpoData,
      id: Math.random().toString,
    };
    console.log(expoData);
    props.onAddExpo(expoData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expence</button>
      )}
      {isEditing && (
        <ExpoForm
          onSaveExpoData={saveExpoDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
}

export default NewExpo;

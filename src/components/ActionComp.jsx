import React, { useContext } from "react";
import StateContext from "../context";

const handleChange = (e, dispatch) => {
  dispatch({
    type: "CHANGE_ACTIVITY",
    activity: e.target.value,
  });
};

const ActionComp = () => {
  const [value, dispatch] = useContext(StateContext);
  const { activity } = value;
  return (
    <>
      <h1> {activity}</h1>
      <form>
        <input
          type="text"
          activity="newActivity"
          placeholder="New activity"
          onChange={(e) => handleChange(e, dispatch)}
        />
      </form>
    </>
  );
};

export default ActionComp;

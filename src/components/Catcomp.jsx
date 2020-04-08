import React, { useContext } from "react";
import StateContext from "../context";

const handleChange = (e, dispatch) => {
  dispatch({
    type: "CHANGE_NAME",
    name: e.target.value,
  });
};

const CatComp = () => {
  const [value, dispatch] = useContext(StateContext);
  const { name } = value;
  return (
    <>
      <p> {name} is</p>
      <form>
        <input
          type="text"
          name="newName"
          placeholder="New Name"
          onChange={(e) => handleChange(e, dispatch)}
        />
      </form>
    </>
  );
};

export default CatComp;

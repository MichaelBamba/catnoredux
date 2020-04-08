import React, { useReducer } from "react";
import { StateProvider } from "./context";
import CatComp from "./components/Catcomp";
import ActionComp from "./components/ActionComp";

function App() {
  const initialState = {
    name: "Bamba",
    activity: "running",
  };

  const reducer = (state, action) => {
    const { name } = action;
    const { activity } = action;
    switch (action.type) {
      case "CHANGE_NAME":
        return {
          ...state,
          name,
        };
      case "CHANGE_ACTIVITY":
        return {
          ...state,
          activity,
        };
      default:
        return state;
    }
  };
  return (
    <div className="App">
      <StateProvider value={useReducer(reducer, initialState)}>
        <CatComp />
        <ActionComp />
      </StateProvider>
    </div>
  );
}

export default App;

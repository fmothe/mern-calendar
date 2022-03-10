import React from "react";
import { useDispatch } from "react-redux";
import { openModalAction } from "../../redux/actions/uiActions";
import "../../styles/generalstyles.css";

export const FabButton = () => {
  const dispatch = useDispatch();
  const createNewEvent = () => {
    dispatch(openModalAction());
  };

  return (
    <button className="btn btn-primary fab" onClick={createNewEvent}>
      {" "}
      <i className="fas fa-plus" />
    </button>
  );
};

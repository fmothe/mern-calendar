import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { eventDeleteAction } from "../../redux/actions/calendarActions";
import { openModalAction } from "../../redux/actions/uiActions";
import "../../styles/generalstyles.css";

export const DeleteFabButton = () => {
  const dispatch = useDispatch();
  const {active:activeEvent} = useSelector(state => state.calendar);
  const deleteSelectedEvent = () => {
    dispatch(eventDeleteAction());
  };

  return (
    <button className="btn btn-danger fab-danger" onClick={deleteSelectedEvent}>
      <i className="fas fa-trash" />
    </button>
  );
};

import React, { useState } from "react";
import Modal from "react-modal";
import "../../styles/modal.css";
import DateTimePicker from "react-datetime-picker";
import moment from "moment";
import Swal from "sweetalert2";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const now = moment().minutes(0).seconds(0).add(1, "hours");

export const CalendarModal = () => {
  const [startDate, setStartDate] = useState(now.toDate());
  const [endDate, setEndDate] = useState(now.clone().add(1, "hours").toDate());
  const [titleValid, settitleValid] = useState(true)
  const [formValues, setformValues] = useState({
    title: "",
    notes: "",
    start: now.toDate(),
    end: now.clone().add(1, "hours").toDate(),
  });

  const { title, notes, start, end } = formValues;

  const handleInputChange = ({ target }) => {
    setformValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const closeModal = () => {
      //todocerrarmodal
  };

  const onStartDateChange = (e) => {
    setStartDate(e);
    setformValues({
      ...formValues,
      start: e,
    });
  };

  const onEndDateChange = (e) => {
    setEndDate(e);
    setformValues({
      ...formValues,
      end: e,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (moment(start).isSameOrAfter(moment(end))) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Start date must be before end date",
        showConfirmButton: false,
        timer: 1000,
      });
      return;
    }

    if(title.trim().length < 2 ){
        settitleValid(false)

        return;
    }

    settitleValid(true)

    //TODO database

    closeModal()
  };

  return (
    <Modal
      isOpen={true}
      onRequestClose={closeModal}
      style={customStyles}
      closeTimeoutMS={200}
      className="modal"
      overlayClassName="modal-fondo"
    >
      <h1>New Event</h1>
      <hr />
      <form className="container" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Start Date Time</label>
          <DateTimePicker
            onChange={onStartDateChange}
            value={startDate}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>End Date Time</label>
          <DateTimePicker
            onChange={onEndDateChange}
            value={endDate}
            minDate={startDate}
            className="form-control"
          />
        </div>
        <hr />
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className={`form-control ${!titleValid && 'is-invalid'}`}
            placeholder="Title"
            name="title"
            autoComplete="off"
            value={title}
            onChange={handleInputChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            Short description
          </small>
        </div>
        <div className="form-group">
          <textarea
            type="text"
            className="form-control"
            placeholder="Notes"
            rows="5"
            name="notes"
            value={notes}
            onChange={handleInputChange}
          ></textarea>
          <small id="emailHelp" className="form-text text-muted">
            Aditional Information
          </small>
        </div>
        <button type="submit" className="btn btn-outline-primary btn-block">
          <i className="far fa-save" /> <span>Guardar</span>
        </button>
      </form>
    </Modal>
  );
};

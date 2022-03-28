import React, { useEffect, useState } from "react";
import { Navbar } from "../ui/Navbar";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "../../styles/generalstyles.css";
import { CalendarEvent } from "./CalendarEvent";
import { CalendarModal } from "./CalendarModal";
import { useDispatch, useSelector } from "react-redux";
import { openModalAction } from "../../redux/actions/uiActions";
import { clearActiveEventAction, eventLoadAction, setActiveAction } from "../../redux/actions/calendarActions";
import { FabButton } from "../ui/FabButton";
import { DeleteFabButton } from "../ui/DeleteFabButton";

export const CalendarScreen = () => {

  const [lastView, setLastView] = useState(localStorage.getItem('calendarView') || 'month')
  const dispatch = useDispatch();
  const {uid} = useSelector(state => state.auth);

  useEffect(() => {
    dispatch(eventLoadAction())
  }, [dispatch])
  
  
  const onDoubleClick = (e) =>{
    dispatch(openModalAction())
  }
  const onSelectEvent = (e) =>{
    dispatch(setActiveAction(e))
  }
  const onViewChange = (e) =>{
    setLastView(e)
    localStorage.setItem("calendarView", e)
  }
  const onSelectSlot = (e) => {
    dispatch(clearActiveEventAction())
  }

  const eventStyleGetter = (event, start, end, isSelected) =>{


    const style = {
      backgroundColor: (uid === event.user._id) ? '#367cf7' : '#465660',
      borderRadius: '0px',
      opacity: 0.8,
      display:'block',
      color: 'white',
    }
    return {
      style
    }
  }


  const localizer = momentLocalizer(moment);
  const eventsList = useSelector(state => state.calendar.events);

  const {active:activeEvent} = useSelector(state => state.calendar);
  
  return (
    <div className="calendar-screen">
      <Navbar />
      <Calendar
        localizer={localizer}
        events={eventsList}
        startAccessor="start"
        endAccessor="end"
        eventPropGetter={eventStyleGetter}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelectEvent}
        onView={onViewChange}
        view={lastView}
        onSelectSlot={onSelectSlot}
        selectable={true}
        components={{event: CalendarEvent}}
      />
      <FabButton/>
      {activeEvent && <DeleteFabButton/>}
      <CalendarModal/>
    </div>
  );
};

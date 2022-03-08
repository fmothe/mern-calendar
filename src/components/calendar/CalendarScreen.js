import React, { useState } from "react";
import { Navbar } from "../ui/Navbar";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "../../styles/generalstyles.css";
import { CalendarEvent } from "./CalendarEvent";
import { CalendarModal } from "./CalendarModal";

export const CalendarScreen = () => {

  const [lastView, setLastView] = useState(localStorage.getItem('calendarView') || 'month')
  const onDoubleClick = (e) =>{
    console.log(e)
  }
  const onSelectEvent = (e) =>{
    console.log(e)
  }
  const onViewChange = (e) =>{
    setLastView(e)
    localStorage.setItem("calendarView", e)
  }

  const eventStyleGetter = (event, start, end, isSelected) =>{
    const style = {
      backgroundColor: '#367cf7',
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
  const eventsList = [
    {
      title: "Que miras",
      start: moment().toDate(),
      end: moment().add(2, "hours").toDate(),
      bgColor: "#fafafa",
      user: {
        _id:'123',
        name:'Federico'
      }
    },
  ];
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
        components={{event: CalendarEvent}}
      />
      <CalendarModal/>
    </div>
  );
};

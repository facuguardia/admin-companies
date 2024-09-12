"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

import multiMonthPlugin from "@fullcalendar/multimonth";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";

import { DateSelectArg, EventContentArg } from "@fullcalendar/core/index.js";

import { formatDate } from "@/lib/formatDate";

import { CalendarProps } from "./Calendar.types";
import { ModalAddEvent } from "../ModalAddEvent";
import { toast } from "@/hooks/use-toast";

export function Calendar(props: CalendarProps) {
  const { companies, events } = props;
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [onSaveNewEvent, setOnSaveNewEvent] = useState(false);
  const [selectedItem, setSelectedItem] = useState<DateSelectArg>();
  const [newEvent, setNewEvent] = useState({
    eventName: "",
    companieSelected: {
      name: "",
      id: "",
    },
  });

  const handleDateClick = async (selected: DateSelectArg) => {
    setOpen(true), setSelectedItem(selected);
  };

  useEffect(() => {
    if (onSaveNewEvent && selectedItem?.view.calendar) {
      const calendarApi = selectedItem.view.calendar;
      calendarApi.unselect();

      const newEventPrisma = {
        companyId: newEvent.companieSelected.id,
        title: newEvent.eventName,
        start: new Date(selectedItem.start),
        allDay: false,
        timeFormat: "H(:mm)",
      };

      axios
        .post(
          `/api/company/${newEvent.companieSelected.id}/event`,
          newEventPrisma
        )
        .then(() => {
          toast({
            title: "Evento creado",
          });
          router.refresh();
        })
        .catch((error) => {
          toast({
            title: "Error al crear el evento",
            variant: "destructive",
          });
        });

      setNewEvent({
        eventName: "",
        companieSelected: {
          name: "",
          id: "",
        },
      });

      setOnSaveNewEvent(false);

    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onSaveNewEvent, selectedItem, event]);

  const handleEventClick = async (selected: any) => {
    if (
      window.confirm(
        "Are you sure mant to delete this event ${selected.event.title}"
      )
    ) {
      try {
        await axios.delete(`/api/event/${selected.event._def.publicId}`);
        toast({
          title: "Evento eliminado",
        });
        router.refresh();
      } catch (error) {
        toast({
          title: "Algo salió mal",
          variant: "destructive",
        });
      }
    }
  };

  return (
    <div>
      <div className="md:flex gap-x-3">
        <div className="w-[200px] relative">
          <div className="overflow-auto absolute left-0 top-0 h-full w-full">
            <p className="text-xl mb-3">Listado de Tareas</p>
            {events.map((currenEvent) => (
              <div
                key={currenEvent.id}
                className="p-4 rounded-lg shadow-md mb-2 bg-slate-200 dark:bg-background"
              >
                <p className="font-bold">{currenEvent.title}</p>
                <p>{formatDate(currenEvent.start)}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 calendar-container">
          <FullCalendar
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
              multiMonthPlugin,
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right:
                "timeGridDay,timeGridWeek,dayGridMonth,multiMonthYear,listMonth",
            }}
            height="80vh"
            initialView="dayGridMonth"
            weekends={false}
            events={events}
            eventContent={renderEventContent}
            editable={true}
            selectable={true}
            selectMirror={true}
            select={handleDateClick}
            eventClick={handleEventClick}
          />
        </div>
      </div>
      <ModalAddEvent
        open={open}
        setOpen={setOpen}
        setOnSaveNewEvent={setOnSaveNewEvent}
        setNewEvent={setNewEvent}
        companies={companies}
      />
    </div>
  );
}

function renderEventContent(eventInfo: EventContentArg) {
  return (
    <div className="bg-slate-200 dark:bg-background w-full p-1">
      <i>{eventInfo.event.title}</i>
    </div>
  );
}

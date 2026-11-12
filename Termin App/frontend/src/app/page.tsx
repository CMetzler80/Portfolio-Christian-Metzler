"use client";

import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import themePlugin from "@fullcalendar/react/themes/monarch"; // YOUR THEME
import dayGridPlugin from "@fullcalendar/react/daygrid";
import timeGridPlugin from "@fullcalendar/react/timegrid";

// stylesheets
import '@fullcalendar/react/skeleton.css'; // ALWAYS NEED SKELETON
import '@fullcalendar/react/themes/monarch/theme.css'; // YOUR THEME
import '@fullcalendar/react/themes/monarch/palettes/purple.css'; // YOUR THEME'S PALETTE

// Define the Termin type typescript
type Termin = {
  id: string;
  title: string;
  start: string;
};

export default function Calendar() {

    const [termine, setTermine] = useState<Termin[]>([
        { id: "1", title: "Beratung", start: "2026-11-16T10:00:00" },
    ]);

    return (
        <div>   
            <h1>Termine</h1>
            <FullCalendar
            plugins={[themePlugin, dayGridPlugin, timeGridPlugin]}
            initialView="dayGridMonth"
    
            events={termine}
            />
        </div>
    );
}
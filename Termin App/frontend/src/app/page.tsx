"use client";

import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import themePlugin from "@fullcalendar/react/themes/monarch"; // YOUR THEME
import dayGridPlugin from "@fullcalendar/react/daygrid";
import timeGridPlugin from "@fullcalendar/react/timegrid";
import FormularToggel from "./compoments/terminFormular";

// stylesheets
import '@fullcalendar/react/skeleton.css'; // ALWAYS NEED SKELETON
import '@fullcalendar/react/themes/monarch/theme.css'; // YOUR THEME
import '@fullcalendar/react/themes/monarch/palettes/purple.css'; // YOUR THEME'S PALETTE

// Define the Termin type typescript
type Termin = {
    id: string;
    title: string;
    start: string;
    end: string;
};

type Props = {
    onClose: () => void;
};



const headerToolbar = {
    start: 'prevYear,prev,next,nextYear today myCustomButton', //linke Seite auf der Toolbar
    center: 'title', //mittlere Seite auf der Toolbar
    end: 'dayGridMonth,timeGridWeek,timeGridDay' //rechte Seite auf der Toolbar
};


const Calendar = () => {


    // State to manage the visibility of the form (false = hidden, true = visible)
    const [istOffen, setIstOffen] = useState(false);

    const [termine, setTermine] = useState<Termin[]>([
        { id: "1", title: "Beratung", start: "2026-11-16T10:00:00", end: "2026-11-16T11:00:00" },
    ]);

    const buttons = {
        myCustomButton: {
            text: "neuer Termin",
            click: () => setIstOffen(true),
        },
    }


    return (
        <div>

            <main>
                <h1>Termine</h1>
                {/* Kalender-Komponente für die Terminübersicht */}
                <FullCalendar
                    plugins={[themePlugin, dayGridPlugin, timeGridPlugin]}
                    initialView="dayGridMonth"
                    events={termine}
                    buttons={buttons}
                    headerToolbar={headerToolbar}
                />

                {istOffen && <FormularToggel onClose={() => setIstOffen(false)} />}

            </main>
        </div >
    );
}

export default Calendar;
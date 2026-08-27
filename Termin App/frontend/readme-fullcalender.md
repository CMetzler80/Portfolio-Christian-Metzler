# React Component

FullCalendar seamlessly integrates with [React](https://reactjs.org/), versions 17 - 19. It provides a component that exactly matches the functionality of FullCalendar's standard API.

This package is released under an MIT license, the same license the standard version of FullCalendar uses. Useful links:

- [Browse the Github repo](https://github.com/fullcalendar/fullcalendar-react) (please star it!)
- [Bug report instructions](/reporting-bugs)
- Example projects:
  - Standard: [StackBlitz](https://stackblitz.com/github/fullcalendar/fullcalendar-examples/tree/main/react19) | [Github Source](https://github.com/fullcalendar/fullcalendar-examples/tree/main/react19)
  - Scheduler: [StackBlitz](https://stackblitz.com/github/fullcalendar/fullcalendar-examples/tree/main/react19-scheduler) | [Github Source](https://github.com/fullcalendar/fullcalendar-examples/tree/main/react19-scheduler)

This guide does not go into depth about initializing a React project. Please consult the aforementioned example/runnable projects for that.

The first step is to install the FullCalendar-related dependencies:

```bash
npm install --save @fullcalendar/react temporal-polyfill
```

The `temporal-polyfill` package is small and tree-shakable, and can be used as a global polyfill if you explicitly opt-in ([more info](temporal-polyfill.md)).

Next, choose one of the standard themes from [themes.fullcalendar.io](https://themes.fullcalendar.io), along with a [color palette](color-palettes.md). The examples below show a simplified way of importing the color palette (ex: `purple.css`), but please be aware, there are better ways to integrated with [dark mode](color-palettes.md#dark-mode).

You may then begin to write a parent component that leverages the `<FullCalendar>` component ([DemoApp.tsx](https://github.com/fullcalendar/fullcalendar-examples/blob/main/react18/src/DemoApp.tsx)):

```jsx
import FullCalendar from "@fullcalendar/react";
import themePlugin from "@fullcalendar/react/themes/monarch"; // YOUR THEME
import dayGridPlugin from "@fullcalendar/react/daygrid";

// stylesheets
import '@fullcalendar/react/skeleton.css'; // ALWAYS NEED SKELETON
import '@fullcalendar/react/themes/monarch/theme.css'; // YOUR THEME
import '@fullcalendar/react/themes/monarch/palettes/purple.css'; // YOUR THEME'S PALETTE

export default function Calendar() {
  return (
    <FullCalendar
      plugins={[themePlugin, dayGridPlugin]}
      initialView="dayGridMonth"
    />
  );
}
```

You must initialize your calendar with at least one plugin that provides a view!

## Props

The `<FullCalendar>` component is equipped with [all of FullCalendar's options](https://fullcalendar.io/docs#toc)! Just pass them in as props. Example:

```jsx
<FullCalendar
  plugins={[dayGridPlugin]}
  initialView="dayGridMonth"
  weekends={false}
  events={[
    { title: "event 1", date: "2019-04-01" },
    { title: "event 2", date: "2019-04-02" },
  ]}
/>
```

Props for the `<FullCalendar>` component are set the same way for both Class and Functional Components.

## Callbacks

A callback function can be passed into a React component and it will be called when something happens. For example, the [dateClick](dateClick.md) handler is called whenever the user clicks on a date:

```jsx
export default function Calendar() {
  const handleDateClick = (info) => {
    alert(info.dateStr);
  };

  return (
    <FullCalendar
      plugins={[ /* ... */ ]}
      dateClick={handleDateClick}
    />
  );
}
```

## Content Injection

There are many settings throughout the API for injecting custom content, like the `eventContent` [event render hook](event-render-hooks.md). The [Content Injection article](content-injection.md) explains the general concept. When you're using the React implementation, it's possible to return React JSX nodes. Example:

```jsx
export default function Calendar() {
  return (
    <FullCalendar
      plugins={[ /* ... */ ]}
      eventContent={renderEventContent}
    />
  );
}

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}
```

## Custom Toolbar Markup

You can completely customize the markup for the header or footer toolbars:

```jsx
import FullCalendar, { useCalendarController } from "@fullcalendar/react";
// ...

export default function Calendar() {
  const controller = useCalendarController();
  const buttons = controller.getButtonState();

  return (
    <div>
      <div class='toolbar'>
        <button onClick={() => controller.today()}>{buttons.today.text}</button>
        <div class='toolbar-title'>{controller.view.title}</div>
      </div>
      <FullCalendar
        controller={controller}
        plugins={[ /* ... */ ]}
      />
    </div>
  );
}
```

More generally, this "controller" technique allows you to use a calendar's data outside the component itself. Learn about the [CalendarController API &raquo;](CalendarController.md)


## Custom Views with Components

It's possible to make calendar views that have custom rendering logic. The [Custom Views via JS](custom-view-with-js.md) article explains the general concept. When you're using the React implementation, it's possible to specify a [React component](https://reactjs.org/docs/components-and-props.html). Example:

```jsx
import FullCalendar, { sliceEvents } from "@fullcalendar/react";
// ...

function CustomView(props) {
  let segs = sliceEvents(props, true); // allDay=true

  return (
    <>
      <div className="view-title">
        {props.dateProfile.currentRange.start.toUTCString()}
      </div>
      <div className="view-events">{segs.length} events</div>
    </>
  );
}

<FullCalendar
  views={{
    custom: CustomView
  }}
/>
```

## Calendar API

Hopefully you won't need to do it often, but sometimes it's useful to access the underlying `Calendar` object for raw data and methods.

This is especially useful for controlling the current date. The [initialDate](initialDate.md) prop will set the _initial_ date of the calendar, but to change it after that, you'll need to rely on the [date navigation methods](date-navigation.md).

To do something like this, you'll need to get ahold of the component's ref (short for "reference"). Once you do that, you call the `getApi` method of the "current" component instance:

```jsx
import { useRef } from 'react';
import FullCalendar from '@fullcalendar/react'
// ...

export default function Calendar() {
  const calendarRef = useRef(null)

  function goNext() {
    const calendarApi = calendarRef.current.getApi()
    calendarApi.next()
  }

  return (
    <>
      <button onClick={goNext}>Go Next!</button>
      <FullCalendar
        ref={calendarRef}
        plugins={[ /* ... */ ]}
      />
    </>
  )
}
```

## FullCalendar Premium

How do you use [FullCalendar Premium's](/pricing) plugins with React? They are no different than any other plugin. Just follow the same instructions as you did `dayGridPlugin` in the above example. You'll need an additional package however:

```sh
npm install --save @fullcalendar/react-scheduler
```

Then, initialize your calendar. Make sure to include your [schedulerLicenseKey](schedulerLicenseKey.md):

```jsx
import FullCalendar from "@fullcalendar/react";
import themePlugin from "@fullcalendar/react/themes/monarch";
import resourceTimelinePlugin from "@fullcalendar/react-scheduler/resource-timeline";

// stylesheets
import '@fullcalendar/react/skeleton.css';
import '@fullcalendar/react/themes/monarch/theme.css';
import '@fullcalendar/react/themes/monarch/palettes/purple.css';

export default function Calendar() {
  return (
    <FullCalendar
      schedulerLicenseKey="XXX"
      plugins={[themePlugin, resourceTimelinePlugin]}
    />
  );
}
```

## State Management

The above mentioned sample project uses a rather simple technique to store event data: it uses the FullCalendar component itself. It's possible to share this data with other parts of the application, but it's often useful to have a more sophisticated setup. For example, if you need access to event data when a FullCalendar component isn't visible.

Please check out the following example projects that demonstrate usage with third-party state-management libraries:

- [View the **Redux** example &raquo;](https://github.com/fullcalendar/fullcalendar-examples/tree/main/react18-redux)
- [View the **MobX** + **TypeScript** example &raquo;](https://github.com/fullcalendar/fullcalendar-examples/tree/main/react18-mobx-typescript)

## Next.js

FullCalendar works well with the React framework [Next.js](https://nextjs.org/).
View the [example project &raquo;](https://github.com/fullcalendar/fullcalendar-examples/tree/main/next14)

## Remix

FullCalendar works well with the React framework [Remix](https://remix.run/).
View the [example project &raquo;](https://github.com/fullcalendar/fullcalendar-examples/tree/main/remix)
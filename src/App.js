import logo from "./logo.svg";
import "./App.css";
import Container from "./components/Container";
import { useState } from 'react';

function App() {
	const [events, setEvents] = useState([
		{id: 0, title: 'meeting'},
		{id: 1, title: 'greeting'},
		{id: 2, title: 'home'}
	]);
	const onDeleteEvent = (id) => {
		setEvents(events.filter((event) => event.id != id));
	};
    return <Container title='Event Manager' events={events} onDeleteEvent={onDeleteEvent} />;
}

export default App;

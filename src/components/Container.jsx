import Events from "./Events";
import EventsHeader from "./EventsHeader";

const Container = ({ title, events, onDeleteEvent }) => {
    return <div style={containerStyle}>
		<EventsHeader title={title}/>
		<Events events={events} onDeleteEvent={onDeleteEvent}/>
	</div>;
};

const containerStyle = {
    backgroundColor: "pink",
    color: "black",
    display: 'flex',
	flexFlow: 'column',
	justifyContent: 'center',
	border: '1px solid black',
	margin: '1rem',
};

export default Container;

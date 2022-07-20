import Event from "./Event";

const Events = ({ events, onDeleteEvent }) => {
    return <div style={eventsStyle}>
        {events.map((event) => <Event key={event.id} title={event.title} onDelete={() => onDeleteEvent(event.id)}/>)}
    </div>;
};

const eventsStyle = {
    border: "1px dashed black",
    margin: "0.5rem",
};

export default Events;

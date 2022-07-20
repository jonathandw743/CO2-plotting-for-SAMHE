import EventTitle from "./EventTitle";
import EventDeleteButton from "./EventDeleteButton";

const Event = ({ title, onDelete }) => {
    return (
        <div style={eventStyle}>
            <EventTitle title={title} />
            <EventDeleteButton onClick={onDelete} />
        </div>
    );
};

const eventStyle = {
    margin: "0.5rem",
    border: "1px dashed black",
};

export default Event;

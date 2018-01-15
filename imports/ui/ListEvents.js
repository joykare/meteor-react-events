import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Events } from "../api/events";

const buttonStyle = {
  margin: "10px 15px",
  maxWidth: "120px"
}

class ListEvents extends Component {
  handleEdit = (eventId) => {
    // onEdit we want to have the form on AddEvents populate the fields and allow for editing
    // so we pass the eventId to the parent component so that it tells AddEvent component what data is to be displayed
    this.props.handleEdit(eventId);
  }

  handleDelete = (eventId) => {
    // onDelete we just remove the event from the db
    Events.remove({_id: eventId});
  }

  render() {
    return (
      <div>
        {
          this.props.events.length ? this.props.events.map((event) => (
            <div className="list-group" key={event._id} style={{ margin: "20px 100px" }}>
              <div className="list-group-item list-group-item-action flex-column align-items-start">

                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">{event.title}</h5>
                  <small>{event.date}</small>
                </div>

                <p className="mb-1">{event.description}</p>

                <div className="controls row">
                  <button
                    className="btn btn-outline-warning col"
                    data-toggle="modal"
                    data-target="#myModal"
                    type="button"
                    style={buttonStyle}
                    onClick={() => this.handleEdit(event._id)}
                  >
                    Edit Event
                  </button>

                  <button
                    className="btn btn-outline-danger col"
                    style={buttonStyle}
                    onClick={() => this.handleDelete(event._id)}
                  >
                    Delete Event
                  </button>
                </div>

              </div>
            </div>
          )) :
          <div className="no-events text-center" style={{ padding: "100px 0" }}>OOOPSY: NO EVENTS REGISTERED</div>
        }
      </div>
    );
  }
}

export default withTracker(() => {
  return {
    events: Events.find({}). fetch()
  }
})(ListEvents);
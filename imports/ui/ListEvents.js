import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Events } from "../api/events";

const buttonStyle = {
  margin: "10px 15px",
  maxWidth: "120px"
}

class ListEvents extends Component {
  render() {
    return (
      <div>
        {this.props.events.length ? this.props.events.map((event) => (
          <div className="list-group" key={event._id} style={{ margin: "20px 100px" }}>
            <div className="list-group-item list-group-item-action flex-column align-items-start">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{event.title}</h5>
                <small>{event.date}</small>
              </div>
              <p className="mb-1">{event.description}</p>
              <div className="controls row">
                <button className="btn btn-outline-danger col" style={buttonStyle}>Delete Event</button>
                <button className="btn btn-outline-warning col" style={buttonStyle}>Edit Event</button>
              </div>
            </div>
          </div>
        )) : <div className="no-events">OOOPSY: NO EVENTS REGISTERED</div>}
      </div>
    );
  }
}

export default withTracker(() => {
  return {
    events: Events.find({}). fetch()
  }
})(ListEvents);
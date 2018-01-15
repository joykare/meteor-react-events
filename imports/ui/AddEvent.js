import React, { Component } from "react";
import { Events } from "../api/events";

class AddEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: props.event,
      isUpdating: props.isUpdating
    }
  }

  // React Lifecycle method that runs when props are updated and sets them into state
  componentWillReceiveProps(nextProps) {
    this.setState({
      event: nextProps.event,
      isUpdating: nextProps.isUpdating
    });
  }

  handleChange = (event) => {
    const field = event.target.name;

    // onChange we take the event in state and create a new object thats updated depending on which field has changed
    // we use square braces around the key `field` coz its a variable (we are setting state with a dynamic key name)
    const newEvent = Object.assign({}, this.state.event, {[field]: event.target.value});

    // we then set new event object into state
    this.setState({
      event: newEvent
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { title, description, date } = this.state.event;

    // checks whether it is an update if not when you hit the submit button it inserts a new event into the db
    if (!this.props.isUpdating) {
      Events.insert({
        title,
        description,
        date
      });
    } else {
      // if the flag isUpdating is true it updates an existing event with changes made
      Events.update(this.state.event._id, {
        $set: {
          title,
          description,
          date
        }
      });

      // it then sets flag back to false
      this.setState({
        isUpdating: false
      })
    }

    const newEvent = {
      title: "",
      description: "",
      date: ""
    }

    this.setState({
      event: newEvent
    })
  }

  renderSubmitButton() {
    // renders submit button dynamically depending on whether isUpdating flag is true/false
    if(this.state.isUpdating) {
      return ( <button type="submit" className="btn btn-primary">Update This Event</button> );
    }
      return( <button type="submit" className="btn btn-primary">Add Event</button> );
  }

  render() {
    const { event } = this.state;

    return (
      <div>
        <div className="text-center">
          <h4>Event Sync</h4>
        </div>
        <hr />

        <div className="jumbotron" style={{ margin: "0 250px" }}>
          <form onSubmit={this.handleSubmit}>

            <div className="form-group">
              <label>Title:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter event title"
                name="title"
                value={event.title ? event.title : ""}
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <label>Description:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter event description"
                name="description"
                value={event.description ? event.description : ""}
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <label>Event Date:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter date in the format mm.dd.yyyy"
                name="date"
                value={event.date ? event.date : ""}
                onChange={this.handleChange}
              />
            </div>

            {this.renderSubmitButton()}

          </form>
        </div>
      </div>
    );
  }
}

export default AddEvent;
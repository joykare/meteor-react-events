import React, { Component } from 'react';

class AddEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      date: ""
    }
  }

  handleChange = (event) => {
    const field = event.target.name;

    // we use square braces around the key `field` coz its a variable (we are setting state with a dynamic key name)
    this.setState({
      [field]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    // TODO: Create backend Meteor methods to save created events
    alert("Will be Saved in a little bit :)")
  }

  render() {
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
                onChange={this.handleChange}
              />
            </div>

            <button type="submit" className="btn btn-primary">Add Event</button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddEvent;
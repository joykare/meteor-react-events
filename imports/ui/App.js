import React, { Component } from "react";
import AddEvent from "./AddEvent";
import ListEvents from "./ListEvents";
import { Events } from "../api/events";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUpdating: false,
      event: {}
    }
  }

  handleEdit = (eventId) => {
    // find the event that requires editing
    const event = Events.findOne({_id: eventId});

    // set it into state also sets a flag `isUpdating` that will allow us to have a dynamic form on AddEvent component
    this.setState({
      event,
      isUpdating: true
    })
  }

  render() {
    return (
      <div>
        {/*
          we pass down the event and isUpdating flag as props in the AddEvent component
        */}
        <AddEvent
          event={this.state.event}
          isUpdating={this.state.isUpdating}
        />
        {/*
          we have the pre tags to view contents of db just for verification
          <pre>DB Stuff: {JSON.stringify(this.props, null, " ")} </pre>
        */}
        <ListEvents handleEdit={this.handleEdit} />
      </div>
    );
  }
}

export default App;
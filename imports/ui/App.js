import React, { Component } from 'react';
import AddEvent from './AddEvent';
// we import withTracker and Events into our app file
import { withTracker } from 'meteor/react-meteor-data';
import { Events } from "../api/events";
import ListEvents from "./ListEvents";

// Create a new React Component `EventApp`
class EventApp extends Component {
  render() {
    return (
      <div>
        <AddEvent />
        {/*
          we have the pre tags to view contents of db just for verification
          <pre>DB Stuff: {JSON.stringify(this.props, null, ' ')} </pre>
        */}
        <ListEvents {...this.props} />
      </div>
    );
  }
}

// Wrap `EventApp` with the HOC withTracker and call the new component we get `App`
const App = withTracker(() => {
  return {
    events: Events.find({}). fetch()
  }
})(EventApp);

// export the component `App`
export default App;
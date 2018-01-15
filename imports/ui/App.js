import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Events } from "../api/events";
import AddEvent from './AddEvent';

class EventApp extends Component {
  render() {
    return (
      <div>
        <AddEvent />
        {/*
          we have the pre tags to view contents of db just for verification
        */}
        <pre> DB STUFF: {JSON.stringify(this.props, null, ' ')} </pre>
      </div>
    );
  }
}

const App = withTracker(() => {
  return {
    events: Events.find({}). fetch()
  }
})(EventApp);

export default App;
import React, { Component } from 'react';
import AddEvent from './AddEvent';
import ListEvents from "./ListEvents";

class App extends Component {
  render() {
    return (
      <div>
        <AddEvent />
        {/*
          we have the pre tags to view contents of db just for verification
          <pre>DB Stuff: {JSON.stringify(this.props, null, ' ')} </pre>
        */}
        <ListEvents />
      </div>
    );
  }
}

// export the component `App`
export default App;
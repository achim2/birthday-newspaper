import React, { Component } from 'react';
import DatePicker from './components/DatePicker';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ 'marginTop': '100px' }}>

        <div className="container">
          <div className="row">
            <div className="col-12">

              <DatePicker/>

            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;

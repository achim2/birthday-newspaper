import React, {Component} from 'react';
import Header from './components/Header';

// import Footer from './components/Footer';
import DatePicker from './components/DatePicker';

class App extends Component {
  state = {
    isMenuOpen: false
  };

  handleToggle = () => {
    this.setState((prevState) => {
      return {
        isMenuOpen: !prevState.isMenuOpen
      }
    });
  };

  render() {
    return (
      <div className="App">
        <Header isOpen={this.state.isMenuOpen} clicked={this.handleToggle}/>

        <div className="container">
          <div className="row">
            <div className="col-12">

              <DatePicker/>

            </div>
          </div>
        </div>

        {/*<Footer/>*/}
      </div>
    );
  }
}

export default App;

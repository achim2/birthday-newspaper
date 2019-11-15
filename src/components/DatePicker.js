import React, {Component} from 'react';

import Select from "./Select";

class DatePicker extends Component {
  state = {
    years: [2019, 2020, 2021, 2022],
    months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    days: [],
    currentYear: 0,
    currentMonth: 0,
    currentDay: 0
  };

  componentDidMount() {
    this.setCurrentDate();
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.currentYear !== this.state.currentYear || prevState.currentMonth !== this.state.currentMonth) {
      this.setState((state, props) => {
        return {
          days: this.setDays(parseInt(state.currentYear), parseInt(state.currentMonth) - 1)
        }
      });
    }
  };

  setDays(year = new Date().getFullYear(), month = new Date().getMonth()) {
    let days = [];
    let date = new Date(Date.UTC(year, month, 1));

    while (date.getMonth() === month) {
      days.push(new Date(date).getDate());
      date.setDate(date.getDate() + 1);
    }

    return days;
  };

  handleSelectChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  setCurrentDate = () => {
    this.setState(() => {
      return {
        currentYear: new Date().getFullYear(),
        currentMonth: new Date().getMonth() + 1,
        currentDay: new Date().getDate()
      }
    });
  };

  handleChange = (item, type) => {
    this.setState({
      [type]: item,
    });
  };

  render() {
    return (
      <div>
        <div className="d-flex mb-5">
          <Select items={this.state.years}
                  name="currentYear"
                  current={this.state.currentYear}
                  onSelectChanged={this.handleChange}/>
          <Select items={this.state.months}
                  name="currentMonth"
                  current={this.state.currentMonth}
                  onSelectChanged={this.handleChange}/>
          <Select items={this.state.days}
                  name="currentDay"
                  current={this.state.currentDay}
                  onSelectChanged={this.handleChange}/>
        </div>

        <div className="d-flex align-items-center">
          <button onClick={this.setCurrentDate}>set current date</button>
          <p className="ml-2 mb-0">{this.state.currentYear + ' ' + (this.state.currentMonth) + ' ' + this.state.currentDay}</p>
        </div>
      </div>
    );
  };
}

export default DatePicker;

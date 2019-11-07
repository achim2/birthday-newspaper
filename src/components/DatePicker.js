import React, {Component} from 'react';

class DatePicker extends Component {
  state = {
    years: [2019, 2020, 2021, 2022],
    months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    days: [],
    currentYear: 0,
    currentMonth: 0,
    currentDay: 0
  };

  componentDidMount() {
    this.setCurrentDate()
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.currentYear !== this.state.currentYear || prevState.currentMonth !== this.state.currentMonth) {
      this.setState((state, props) => {
        return {
          days: this.setDays(parseInt(state.currentYear), parseInt(state.currentMonth))
        }
      });
    }
  };

  setDays(year = new Date().getFullYear(), month = new Date().getMonth()) {
    let days = [];
    let date = new Date(Date.UTC(year, month, 1));

    while (date.getMonth() === month) {
      days.push(new Date(date));
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
        currentMonth: new Date().getMonth(),
        currentDay: new Date().getDate()
      }
    })
  };

  render() {
    let yearsArr = this.state.years.map((item, key) => <option key={key}>{item}</option>);
    let monthsArr = this.state.months.map((item, key) => <option value={item} key={key}>{item + 1}</option>);
    let daysArr = this.state.days.map((item, key) => <option key={key}>{item.getDate()}</option>);

    return (
      <div>
        <form action="">
          <select
            name="currentYear"
            value={this.state.currentYear}
            onChange={this.handleSelectChange.bind(this)}>
            {yearsArr}
          </select>
          <select
            name="currentMonth"
            value={this.state.currentMonth}
            onChange={this.handleSelectChange.bind(this)}>
            {monthsArr}
          </select>
          <select
            name="currentDay"
            value={this.state.currentDay}
            onChange={this.handleSelectChange.bind(this)}>
            {daysArr}
          </select>
        </form>

        <button onClick={this.setCurrentDate}>set current date</button>

        <p>{this.state.currentYear + ' ' + (this.state.currentMonth + 1) + ' ' + this.state.currentDay}</p>
      </div>
    );
  };
}

export default DatePicker;

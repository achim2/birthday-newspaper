import React, {Component} from 'react';

import Select from "./Select";

class DatePicker extends Component {
  state = {
    years: [],
    months: [],
    days: [],
    currentYear: 0,
    currentMonth: 0,
    currentDay: 0
  };

  componentDidMount() {
    // console.log('componentDidMount');
    this.setCurrentDate();
    this.setYears();
    this.setMonths();
    this.setDays();
  };

  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   if (
  //     prevState.currentYear !== this.state.currentYear ||
  //     prevState.currentMonth !== this.state.currentMonth ||
  //     prevState.currentDay !== this.state.currentDay
  //   ) {
  //     console.log('componentDidUpdate');
  //     this.cutArr(this.state.years, 'years', this.state.currentYear);
  //     this.cutArr(this.state.months, 'months', this.state.currentMonth);
  //     this.cutArr(this.state.days, 'days', this.state.currentDay);
  //   }
  // };

  setYears() {
    let years = [];
    const current = new Date().getFullYear();

    for (let i = current; i <= current + 12; i++) {
      years.push(i);
    }

    this.setState((state, props) => {
      return {
        years: years
      }
    })
  }

  setMonths() {
    let months = [];

    for (let i = 1; i <= 12; i++) {
      months.push(i);
    }

    this.setState((state, props) => {
      return {
        months: months
      }
    })
  }

  setDays(year = new Date().getFullYear(), month = new Date().getMonth()) {
    let days = [];
    let date = new Date(Date.UTC(year, month, 1));

    while (date.getMonth() === month) {
      days.push(new Date(date).getDate());
      date.setDate(date.getDate() + 1);
    }

    // return days;

    this.setState((state, props) => {
      return {
        days: days
      }
    })
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

    //re fill years, months, days arrays before cut
    this.setYears();
    this.setMonths();
    this.setDays(parseInt(this.state.currentYear), parseInt(this.state.currentMonth) - 1);
  };

  // cutArr = (arr, id, currentItem) => {
  //   const currentItemIndex = arr.indexOf(currentItem) + 1;
  //   let start = 0;
  //   let end = arr.length;
  //
  //   if (currentItemIndex >= arr.length - 2) {
  //     start = arr.length - 5;
  //   } else if (currentItemIndex <= (arr.length - (arr.length - 2))) {
  //     end = arr.length - (arr.length - 5);
  //   } else if (currentItemIndex >= (arr.length - (arr.length - 2)) && currentItemIndex <= arr.length - 2) {
  //     start = currentItemIndex - 3;
  //     end = currentItemIndex + 2;
  //   }
  //
  //   // console.log(arr.slice(start, end));
  //
  //   this.setState({
  //     [id]: arr.slice(start, end)
  //   })
  // };

  render() {
    return (
      <div>
        <h3>Válasz dátumot!</h3>
        <div className="datepicker">
          <Select items={this.state.years}
                  id="currentYear"
                  current={this.state.currentYear}
                  onSelectChanged={this.handleChange}/>
          <Select items={this.state.months}
                  id="currentMonth"
                  current={this.state.currentMonth}
                  onSelectChanged={this.handleChange}/>
          <Select items={this.state.days}
                  id="currentDay"
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

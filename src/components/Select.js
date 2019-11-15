import React from 'react';

class SelectBox extends React.Component {
  state = {
    showItems: false
  };

  dropdown = () => {
    this.setState(prevState => ({
        showItems: !prevState.showItems
      })
    )
  };

  selectItem = (item, type) => {
    this.props.onSelectChanged(item, type);

    this.setState({
      showItems: false
    });
  };

  render() {
    return <div className="select-box">
      <div className="select-box--container">

        <div className="select-box--selected-item"
             onClick={this.dropdown}>
          <span>{this.props.current}</span>
          <div className="select-box--arrow">
            <span className={`${this.state.showItems ? 'select-box--arrow-up' : 'select-box--arrow-down'}`}/>
          </div>
        </div>

        <div style={{display: this.state.showItems ? 'block' : 'none'}}
             className="select-box--items">
          {
            this.props.items.map(item => <div
              key={item}
              onClick={() => this.selectItem(item, this.props.name)}
              className={this.props.current === item ? 'selected' : ''}>
              {item}
            </div>)
          }
        </div>

      </div>
    </div>
  };
}

export default SelectBox;

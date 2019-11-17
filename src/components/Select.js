import React from 'react';

class SelectBox extends React.Component {
  state = {
    showItems: false
  };

  dropdown = (id) => {
    this.setState(prevState => ({
        showItems: !prevState.showItems
      })
    );
    this.watchOutsideClick(id);
  };

  selectItem = (item, id) => {
    this.props.onSelectChanged(item, id);

    this.setState({
      showItems: false
    });
  };

  updateItem = (item, id) => {
    if (this.props.items.includes(item)) {
      this.props.onSelectChanged(item, id);
    }

    this.watchOutsideClick(id);
  };

  watchOutsideClick = (id) => {
    let self = this;
    let currentItems = document.querySelector(`#${id}.select__items`);

    document.addEventListener('click', function (e) {
      if (currentItems.classList.contains('d-block') && !e.target.classList.contains('select__arrow')) {
        self.setState({
            showItems: false
          }
        );
      }
    }, {once: true})
  };

  render() {
    return <div className="select">
      <div className="select__container">

        <div className="select__selected"
             onClick={() => this.dropdown(this.props.id)}>
          <span>{this.props.current}</span>
        </div>

        <div id={this.props.id} className={`select__items ${this.state.showItems ? 'd-block' : 'd-none'}`}>
          <div className={`select__arrow select__arrow--up ${this.state.showItems ? 'd-flex' : 'd-none'}`}
               onClick={() => this.updateItem(this.props.current - 1, this.props.id)}>-
          </div>
          {
            this.props.items.map((item, key) => <div
              key={key}
              onClick={() => this.selectItem(item, this.props.id)}
              className={`
              select__item 
              ${this.props.current === item ? 'select__item--active' : ''} 
              ${this.props.current === item + 1 ? 'select__item--active-sibling' : ''}
              ${this.props.current === item + 2 ? 'select__item--active-sibling' : ''}
              ${this.props.current === item + 3 && key >= this.props.items.length - 5 ? 'select__item--active-sibling' : ''}
              ${this.props.current === item + 4 && key >= this.props.items.length - 5 ? 'select__item--active-sibling' : ''}
              ${this.props.current === item - 1 ? 'select__item--active-sibling' : ''}
              ${this.props.current === item - 2 ? 'select__item--active-sibling' : ''}
              ${this.props.current === item - 3 && key <= 4 ? 'select__item--active-sibling' : ''}
              ${this.props.current === item - 4 && key <= 4 ? 'select__item--active-sibling' : ''}
              `}>
              {item}
            </div>)
          }
          <div className={`select__arrow select__arrow--down ${this.state.showItems ? 'd-flex' : 'd-none'}`}
               onClick={() => this.updateItem(this.props.current + 1, this.props.id)}>+
          </div>
        </div>

      </div>
    </div>
  };
}

export default SelectBox;

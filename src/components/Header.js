import React from 'react';

const header = (props) => {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-lg-10">
            <div className="header__inner">

              <a className="logo" href="#e">Birthday-newspapers</a>
              <button className="nav-toggle"
                      onClick={props.clicked}>
                <span className="nav-toggle__line"/>
                <span className="nav-toggle__line"/>
                <span className="nav-toggle__line"/>
              </button>
              <nav className={props.isOpen ? 'nav nav__active' : 'nav'}>
                <ul className="nav__list">
                  <li className="nav__item"><a className="nav__link" href="#a">home</a></li>
                  <li className="nav__item"><a className="nav__link" href="#b">order</a></li>
                  <li className="nav__item"><a className="nav__link" href="#c">faq</a></li>
                  <li className="nav__item"><a className="nav__link" href="#d">contact</a></li>
                </ul>
              </nav>
              <button className="header__starter">start here</button>

            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default header;
